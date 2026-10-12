const courses = [
  {
    id: 'basic-computer',
    slug: 'basic-computer',
    name: 'Basic Computer Course',
    category: 'Basic Computer',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80',
    enabled: true,
    shortDescription: 'Hands-on introduction to computers, typing, internet basics, and digital productivity.',
    description: 'A beginner-friendly course that helps students understand computer fundamentals, digital skill basics, and workplace productivity tools.',
    audience: 'School students, beginners, and freshers',
    eligibility: 'Open to all beginners',
    duration: 'Contact us for details.',
    fees: 'Contact us for details.',
    certificate: 'Certificate of completion',
    modules: [
      'Computer fundamentals and hardware basics',
      'Operating systems and file management',
      'Internet browsing and digital communication',
      'Typing and productivity fundamentals',
      'Safe online practices and digital awareness'
    ],
    outcomes: [
      'Use a computer confidently for daily tasks',
      'Navigate operating systems and software applications',
      'Build digital literacy and online safety habits'
    ],
    highlights: ['Beginner-friendly', 'Career foundation', 'Hands-on practice']
  },
  {
    id: 'ms-office',
    slug: 'ms-office',
    name: 'MS Office & Digital Productivity',
    category: 'MS Office',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80',
    enabled: true,
    shortDescription: 'Learn Word, Excel, PowerPoint, and essential office productivity tools used in modern workplaces.',
    description: 'This course develops proficiency in Microsoft Office and digital workflows for academic, administrative, and professional use.',
    audience: 'Students, office staff, and job seekers',
    eligibility: 'Basic computer knowledge helpful',
    duration: 'Contact us for details.',
    fees: 'Contact us for details.',
    certificate: 'Certificate of completion',
    modules: [
      'Microsoft Word essentials',
      'Excel formulas, tables, and charts',
      'PowerPoint presentations',
      'Professional document preparation',
      'Office productivity workflow'
    ],
    outcomes: [
      'Create professional documents',
      'Use spreadsheets for data analysis',
      'Communicate effectively with office tools'
    ],
    highlights: ['Office-ready skills', 'Certification track', 'Project-based learning']
  },
  {
    id: 'advanced-excel',
    slug: 'advanced-excel',
    name: 'Advanced Excel for Professionals',
    category: 'Advanced Excel',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80',
    enabled: true,
    shortDescription: 'Master formulas, dashboards, automation, data management, and business reporting with Excel.',
    description: 'Designed for professionals and job seekers who want to improve financial, analytical, and reporting capabilities using Excel.',
    audience: 'Working professionals and students',
    eligibility: 'MS Office foundation recommended',
    duration: 'Contact us for details.',
    fees: 'Contact us for details.',
    certificate: 'Certificate of completion',
    modules: [
      'Excel formulas and functions',
      'Pivot tables and dashboards',
      'Data cleaning and analysis',
      'Business reporting and charts',
      'Workbook automation basics'
    ],
    outcomes: [
      'Work with large datasets efficiently',
      'Prepare professional dashboards',
      'Improve workplace data handling abilities'
    ],
    highlights: ['Excel dashboard training', 'Professional reporting', 'Business analytics foundation']
  },
  {
    id: 'tally-gst',
    slug: 'tally-accounting-gst',
    name: 'Tally, Accounting & GST',
    category: 'Tally, Accounting and GST',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=900&q=80',
    enabled: true,
    shortDescription: 'Learn accounting principles, Tally software, and GST records for practical financial operations.',
    description: 'This practical accounting and GST course helps students understand business records, accounting workflows, and bookkeeping software.',
    audience: 'Commerce students and accounting aspirants',
    eligibility: 'Open to interested learners',
    duration: 'Contact us for details.',
    fees: 'Contact us for details.',
    certificate: 'Certificate of completion',
    modules: [
      'Accounting fundamentals',
      'Tally workflows and vouchers',
      'Inventory and ledger management',
      'GST and tax basics',
      'Practice-based accounts setup'
    ],
    outcomes: [
      'Maintain business accounts',
      'Understand GST workflow',
      'Prepare for practical finance environments'
    ],
    highlights: ['Practical accounting', 'GST training', 'Business-ready skills']
  },
  {
    id: 'c-programming',
    slug: 'c-programming',
    name: 'C Programming',
    category: 'C Programming',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=80',
    enabled: true,
    shortDescription: 'Build a strong logic foundation in C language with structured programming, loops, arrays, and functions.',
    description: 'Perfect for beginners who want to improve problem-solving skills and prepare for higher-level coding languages.',
    audience: 'Students and beginners',
    eligibility: 'Open to beginners',
    duration: 'Contact us for details.',
    fees: 'Contact us for details.',
    certificate: 'Certificate of completion',
    modules: [
      'C syntax and control flow',
      'Functions and arrays',
      'Pointers and memory basics',
      'Strings and file handling',
      'Logic-building exercises'
    ],
    outcomes: [
      'Write structured C programs',
      'Understand fundamental programming logic',
      'Prepare for advanced languages'
    ],
    highlights: ['Logic building', 'Structured programming', 'Beginner friendly']
  },
  {
    id: 'cpp-programming',
    slug: 'cpp-programming',
    name: 'C++ Programming',
    category: 'C++',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=900&q=80',
    enabled: true,
    shortDescription: 'Dive into object-oriented programming and software development concepts using C++.',
    description: 'This course introduces students to object-oriented concepts, class design, and real-world software logic.',
    audience: 'IT students and aspiring developers',
    eligibility: 'Basic programming knowledge preferred',
    duration: 'Contact us for details.',
    fees: 'Contact us for details.',
    certificate: 'Certificate of completion',
    modules: [
      'OOP fundamentals',
      'Classes and objects',
      'Inheritance and polymorphism',
      'Templates and STL basics',
      'Mini-projects'
    ],
    outcomes: [
      'Develop modular programs',
      'Understand object-oriented design',
      'Create beginner-level software solutions'
    ],
    highlights: ['OOP learning', 'Project build focus', 'Career foundation']
  },
  {
    id: 'java',
    slug: 'java',
    name: 'Java Programming',
    category: 'Java',
    image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=900&q=80',
    enabled: true,
    shortDescription: 'Build strong programming fundamentals in Java, including OOP, data structures, and application logic.',
    description: 'A practical Java course for students and aspiring developers aiming to understand backend logic and application design.',
    audience: 'Students and aspiring software developers',
    eligibility: 'Basic coding familiarity recommended',
    duration: 'Contact us for details.',
    fees: 'Contact us for details.',
    certificate: 'Certificate of completion',
    modules: [
      'Java syntax and environment setup',
      'Classes, methods, and inheritance',
      'Collections and exception handling',
      'File input/output and OOP practice',
      'Mini applications'
    ],
    outcomes: [
      'Write Java programs confidently',
      'Understand object-oriented design',
      'Prepare for advanced software learning'
    ],
    highlights: ['Java fundamentals', 'Application logic', 'Career-focused training']
  },
  {
    id: 'python',
    slug: 'python',
    name: 'Python Programming',
    category: 'Python',
    image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=900&q=80',
    enabled: true,
    shortDescription: 'Learn Python for automation, data handling, scripting, and modern web development fundamentals.',
    description: 'A practical Python course for students, graduates, and beginners seeking a versatile language for automation and development.',
    audience: 'Beginners, students, and working professionals',
    eligibility: 'Open to beginners',
    duration: 'Contact us for details.',
    fees: 'Contact us for details.',
    certificate: 'Certificate of completion',
    modules: [
      'Python basics and syntax',
      'Conditions, loops, and functions',
      'Lists, dictionaries, and file handling',
      'Automation and scripts',
      'Intro to Python application development'
    ],
    outcomes: [
      'Write simple Python programs',
      'Use Python for problem-solving and automation',
      'Build a pathway to web/data skills'
    ],
    highlights: ['High-demand language', 'Automation basics', 'Career boosting']
  },
  {
    id: 'web-development',
    slug: 'web-development',
    name: 'Web Development',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80',
    enabled: true,
    shortDescription: 'Learn HTML, CSS, JavaScript, responsive design, and front-end fundamentals for websites.',
    description: 'This course equips learners to build responsive websites and understand the front-end technologies used in modern digital products.',
    audience: 'Students, beginners, and aspiring developers',
    eligibility: 'Basic computer knowledge recommended',
    duration: 'Contact us for details.',
    fees: 'Contact us for details.',
    certificate: 'Certificate of completion',
    modules: [
      'HTML and semantic structure',
      'CSS styling and responsiveness',
      'JavaScript interactions and DOM',
      'Responsive layouts and forms',
      'Career-oriented project building'
    ],
    outcomes: [
      'Create responsive websites',
      'Understand front-end web design',
      'Build a portfolio-ready project'
    ],
    highlights: ['Project-based', 'Responsive design', 'Portfolio readiness']
  },
  {
    id: 'graphic-design',
    slug: 'graphic-design',
    name: 'Graphic Design & DTP',
    category: 'Graphic Design and DTP',
    image: 'https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=900&q=80',
    enabled: true,
    shortDescription: 'Create visually engaging designs, layouts, digital art, and print-ready materials.',
    description: 'Learn digital design principles, creative tools, and formatting techniques for print and digital communication.',
    audience: 'Creative learners and job seekers',
    eligibility: 'Open to beginners',
    duration: 'Contact us for details.',
    fees: 'Contact us for details.',
    certificate: 'Certificate of completion',
    modules: [
      'Design fundamentals and typography',
      'Colour theory and layout composition',
      'Poster and social media design',
      'Photoshop and DTP basics',
      'Print preparation workflow'
    ],
    outcomes: [
      'Design simple creative assets',
      'Build professional-looking layouts',
      'Use design tools for communication goals'
    ],
    highlights: ['Creative skills', 'Print and digital design', 'Portfolio-friendly']
  },
  {
    id: 'hardware-networking',
    slug: 'computer-hardware-networking',
    name: 'Computer Hardware & Networking',
    category: 'Computer Hardware and Networking',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80',
    enabled: true,
    shortDescription: 'Understand PC assembly, troubleshooting, networking basics, and device connectivity.',
    description: 'A practical course for learners who want to work with computer systems, devices, and local network environments.',
    audience: 'IT aspirants and beginners',
    eligibility: 'Open to beginners',
    duration: 'Contact us for details.',
    fees: 'Contact us for details.',
    certificate: 'Certificate of completion',
    modules: [
      'PC hardware components',
      'Troubleshooting and installation',
      'Networking fundamentals',
      'Routers and IP basics',
      'Maintenance and system support'
    ],
    outcomes: [
      'Diagnose basic hardware issues',
      'Set up and understand networks',
      'Prepare for IT support roles'
    ],
    highlights: ['IT support skills', 'Practical systems learning', 'Career exploration']
  }
];

const faculty = [
  {
    name: 'Aditi Sharma',
    designation: 'Senior Web Development Trainer',
    specialization: 'HTML, CSS, JavaScript, Responsive Design',
    experience: '8+ years',
    qualification: 'B.Tech in Computer Science',
    bio: 'Aditi supports beginner and intermediate learners to build practical web development skills and portfolio-ready projects.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'Rohit Nair',
    designation: 'Advanced Excel & Accounting Mentor',
    specialization: 'Excel, Tally, GST, Accounting',
    experience: '10+ years',
    qualification: 'B.Com with accounting expertise',
    bio: 'Rohit brings hands-on examples from business and office environments to help learners become confident with real-world workflows.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'Neha Verma',
    designation: 'Digital Skills Instructor',
    specialization: 'MS Office, Productivity, Career Skills',
    experience: '6+ years',
    qualification: 'MCA and training certification',
    bio: 'Neha focuses on practical digital literacy and workplace confidence for students, beginners, and career starters.',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=600&q=80'
  }
];

const testimonials = [
  {
    name: 'Shreya M.',
    course: 'Web Development',
    quote: 'The course was practical, approachable, and easy to follow. I improved my confidence in building simple websites and understanding front-end logic.'
  },
  {
    name: 'Venkatesh K.',
    course: 'MS Office',
    quote: 'I used to be nervous with Excel and Word, but the trainer explained everything with real examples. It helped me in my office work immediately.'
  }
];

const gallery = [
  { title: 'Computer Lab', image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80' },
  { title: 'Practical Learning', image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80' },
  { title: 'Classroom Session', image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80' },
  { title: 'Workshop Activity', image: 'https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=1200&q=80' },
  { title: 'Digital Skills Lab', image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80' },
  { title: 'Student Practice', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80' }
];

const posts = [
  {
    slug: 'admissions-open-for-new-batches',
    title: 'Admissions Open for New Batches',
    category: 'Admissions',
    date: '2026-10-02',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1100&q=80',
    excerpt: 'Explore beginner-friendly technology courses and new batch schedules for the upcoming month.',
    content: '<p>TechNova Computer Academy is now accepting enrolments for the upcoming batches across our most in-demand courses.</p><p>Students and professionals can enquire for flexible timings, beginner sessions, and job-oriented programs.</p>'
  },
  {
    slug: 'how-to-choose-the-right-computer-course',
    title: 'How to Choose the Right Computer Course',
    category: 'Career Guidance',
    date: '2026-09-18',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1100&q=80',
    excerpt: 'Learn how to match your interests, budget, and learning goals to the best computer course.',
    content: '<p>Choosing the right course depends on your current skill level, career objective, and time availability.</p><p>Our trainers help learners decide between digital skills, programming, design, and office productivity tracks.</p>'
  },
  {
    slug: 'career-skills-for-students',
    title: 'Career Skills Every Student Should Build',
    category: 'Student Growth',
    date: '2026-08-20',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1100&q=80',
    excerpt: 'Key skills such as digital literacy, communication, and productivity are essential in today’s competitive environment.',
    content: '<p>Students gain confidence by learning practical skills beyond classroom theory.</p><p>Digital literacy, documentation skills, and confidence with tools can make a major difference in future learning and work opportunities.</p>'
  }
];

const faqs = [
  { question: 'Do I need prior computer knowledge to join?', answer: 'No. We offer beginner-friendly courses and guidance for learners starting from the basics.' },
  { question: 'Are courses available for working professionals?', answer: 'Yes. We support flexible timing options and practical training suited for working professionals.' },
  { question: 'Do you provide course certificates?', answer: 'Many courses include a certificate of completion depending on the program and attendance requirements.' },
  { question: 'What if I am not sure which course to choose?', answer: 'Our team can guide you based on your goals, interests, and current skill level.' },
  { question: 'Can I enquire about fees and batches?', answer: 'Yes. You can contact the academy directly or submit a callback request for a personalised reply.' }
];

const siteData = { courses, faculty, testimonials, gallery, posts, faqs };

function buildCourseMap() {
  return new Map(siteData.courses.filter(c => c.enabled).map(c => [c.slug, c]));
}

function buildBlogMap() {
  return new Map(siteData.posts.map(post => [post.slug, post]));
}

module.exports = { siteData, buildCourseMap, buildBlogMap };
