const path = require('path');
const express = require('express');
const session = require('express-session');
const dotenv = require('dotenv');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const { siteData, buildCourseMap, buildBlogMap } = require('./data/siteData');
const { siteConfig } = require('./config/site');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const enquiryStore = [];
const callbackStore = [];

const getRandomId = () => `TN-${Date.now().toString(36).toUpperCase()}-${crypto.randomBytes(3).toString('hex').toUpperCase()}`;

const courseMap = buildCourseMap();
const blogMap = buildBlogMap();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({
  secret: process.env.SESSION_SECRET || 'dev-secret-change-me',
  resave: false,
  saveUninitialized: false,
  cookie: { httpOnly: true, sameSite: 'lax', secure: false }
}));

function isAuthenticated(req) {
  return !!(req.session && req.session.isAuthenticated);
}

function formatPhoneForLink(phone) {
  return String(phone || '').replace(/\D/g, '');
}

function setAuth(req, res, next) {
  if (!isAuthenticated(req)) {
    return res.redirect('/admin/login');
  }
  next();
}

function sendOwnerNotification(type, payload) {
  const smtpHost = process.env.SMTP_HOST;
  if (!smtpHost) {
    return Promise.resolve({ skipped: true, reason: 'SMTP not configured' });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  const emailBody = `
    <h2>New ${type} inquiry</h2>
    <p><strong>ID:</strong> ${payload.id}</p>
    <p><strong>Name:</strong> ${payload.name}</p>
    <p><strong>Phone:</strong> ${payload.phone}</p>
    <p><strong>Email:</strong> ${payload.email || 'Not provided'}</p>
    <p><strong>Course:</strong> ${payload.course || 'Not specified'}</p>
    <p><strong>Preferred callback time:</strong> ${payload.preferredTime || 'Not specified'}</p>
    <p><strong>Message:</strong> ${payload.message || 'No message'}</p>
    <p><strong>Submitted:</strong> ${new Date(payload.createdAt).toLocaleString()}</p>
  `;

  return transporter.sendMail({
    from: process.env.SMTP_FROM || 'TechNova Computer Academy <hello@technovaacademy.in>',
    to: process.env.SITE_OWNER_EMAIL || process.env.SITE_EMAIL,
    subject: `New ${type} inquiry - ${payload.name}`,
    html: emailBody
  });
}

function addInquiry(record, type, source) {
  const entry = {
    id: getRandomId(),
    type,
    source,
    status: 'New',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    ...record
  };
  enquiryStore.push(entry);
  if (type === 'callback') {
    callbackStore.push(entry);
  }
  sendOwnerNotification(type, entry).catch(() => {});
  return entry;
}

app.use((req, res, next) => {
  res.locals.site = siteConfig;
  res.locals.currentPath = req.path;
  res.locals.formatPhoneForLink = formatPhoneForLink;
  next();
});

app.get('/', (req, res) => {
  res.render('index', {
    featuredCourses: siteData.courses.filter(c => c.enabled).slice(0, 3),
    categories: [...new Set(siteData.courses.filter(c => c.enabled).map(c => c.category))],
    faculty: siteData.faculty.slice(0, 3),
    testimonials: siteData.testimonials,
    faqs: siteData.faqs.slice(0, 5),
    gallery: siteData.gallery.slice(0, 6),
    posts: siteData.posts.slice(0, 3)
  });
});

app.get('/about', (req, res) => res.render('about'));
app.get('/courses', (req, res) => {
  const enabledCourses = siteData.courses.filter(c => c.enabled);
  res.render('courses', { courses: enabledCourses, categories: [...new Set(enabledCourses.map(c => c.category))] });
});

app.get('/courses/:slug', (req, res) => {
  const course = courseMap.get(req.params.slug);
  if (!course) return res.status(404).render('404');
  const related = siteData.courses.filter(c => c.enabled && c.category === course.category && c.slug !== course.slug).slice(0, 3);
  res.render('course-detail', { course, related });
});

app.get('/admissions', (req, res) => res.render('admissions'));
app.get('/faculty', (req, res) => res.render('faculty', { faculty: siteData.faculty }));
app.get('/facilities', (req, res) => res.render('facilities', { gallery: siteData.gallery }));
app.get('/student-experiences', (req, res) => res.render('testimonials', { testimonials: siteData.testimonials }));
app.get('/blog', (req, res) => res.render('blog', { posts: siteData.posts }));
app.get('/blog/:slug', (req, res) => {
  const post = blogMap.get(req.params.slug);
  if (!post) return res.status(404).render('404');
  const related = siteData.posts.filter(p => p.slug !== post.slug).slice(0, 3);
  res.render('post', { post, related });
});
app.get('/faq', (req, res) => res.render('faq', { faqs: siteData.faqs }));
app.get('/contact', (req, res) => res.render('contact'));
app.get('/privacy-policy', (req, res) => res.render('privacy'));
app.get('/terms', (req, res) => res.render('terms'));

app.get('/admin/login', (req, res) => {
  if (isAuthenticated(req)) return res.redirect('/admin/dashboard');
  res.render('admin/login');
});

app.post('/admin/login', (req, res) => {
  const { username, password } = req.body;
  const expectedUser = process.env.ADMIN_USERNAME || 'admin';
  const expectedPass = process.env.ADMIN_PASSWORD || 'TechNova@2026';

  if (username === expectedUser && password === expectedPass) {
    req.session.isAuthenticated = true;
    req.session.user = { username };
    return res.redirect('/admin/dashboard');
  }

  res.status(401).render('admin/login', { error: 'Invalid username or password.' });
});

app.get('/admin/logout', (req, res) => {
  req.session.destroy(() => res.redirect('/admin/login'));
});

app.get('/admin/dashboard', setAuth, (req, res) => {
  const entries = enquiryStore.slice().sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  res.render('admin/dashboard', { enquiries: entries, site: siteConfig });
});

app.get('/admin/export', setAuth, (req, res) => {
  const csv = [
    ['ID', 'Type', 'Status', 'Name', 'Phone', 'Email', 'Course', 'Preferred Time', 'Message', 'Created At'],
    ...enquiryStore.map(item => [
      item.id,
      item.type,
      item.status,
      item.name,
      item.phone,
      item.email || '',
      item.course || '',
      item.preferredTime || '',
      item.message || '',
      item.createdAt
    ])
  ].map(row => row.map(value => `"${String(value).replace(/"/g, '""')}"`).join(',')).join('\n');

  res.header('Content-Type', 'text/csv');
  res.header('Content-Disposition', 'attachment; filename="inquiries.csv"');
  res.send(csv);
});

app.post('/admin/inquiries/:id/status', setAuth, (req, res) => {
  const { status } = req.body;
  const item = enquiryStore.find(e => e.id === req.params.id);
  if (!item) return res.status(404).json({ success: false, message: 'Inquiry not found.' });
  item.status = status;
  item.updatedAt = new Date().toISOString();
  res.json({ success: true, message: 'Status updated.', inquiry: item });
});

app.post('/api/enquiries', (req, res) => {
  const payload = req.body;
  if (!payload.name || !payload.phone || !payload.message) {
    return res.status(400).json({ success: false, message: 'Name, phone number, and message are required.' });
  }

  const record = {
    name: payload.name,
    phone: payload.phone,
    email: payload.email || '',
    course: payload.course || 'General inquiry',
    preferredTime: payload.preferredTime || 'Flexible',
    message: payload.message,
    source: payload.source || 'contact-page'
  };

  const saved = addInquiry(record, payload.type || 'general', record.source);
  res.status(201).json({ success: true, message: 'Your inquiry has been submitted successfully.', inquiry: saved });
});

app.post('/api/callback', (req, res) => {
  const { name, phone, email, course, preferredTime, message, privacyConsent } = req.body;
  if (!name || !phone || !privacyConsent) {
    return res.status(400).json({ success: false, message: 'Name, phone number, and privacy consent are required.' });
  }

  const record = {
    name,
    phone,
    email: email || '',
    course: course || 'General callback',
    preferredTime: preferredTime || 'Flexible',
    message: message || '',
    source: 'callback-modal'
  };

  const saved = addInquiry(record, 'callback', record.source);
  res.status(201).json({ success: true, message: 'Your callback request has been received. We will contact you soon.', inquiry: saved });
});

app.get('/api/courses', (req, res) => {
  const enabledCourses = siteData.courses.filter(c => c.enabled);
  res.json(enabledCourses);
});

app.use((req, res) => res.status(404).render('404'));

app.listen(PORT, () => {
  console.log(`TechNova Computer Academy running on http://localhost:${PORT}`);
});
