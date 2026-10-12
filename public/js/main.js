document.addEventListener('DOMContentLoaded', () => {
  const modal = document.querySelector('#callbackModal');
  const openButtons = document.querySelectorAll('[data-open-callback]');
  const closeButton = document.querySelector('#closeCallbackModal');

  openButtons.forEach(button => {
    button.addEventListener('click', () => {
      const course = button.dataset.course || '';
      const select = document.querySelector('#callbackCourse');
      if (select && course) select.value = course;
      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
      const nameField = document.querySelector('#callbackName');
      if (nameField) nameField.focus();
    });
  });

  const closeModal = () => {
    modal?.classList.remove('open');
    document.body.style.overflow = '';
  };

  closeButton?.addEventListener('click', closeModal);
  modal?.addEventListener('click', (event) => {
    if (event.target === modal) closeModal();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal?.classList.contains('open')) {
      closeModal();
    }
  });

  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const button = item.querySelector('.faq-question');
    button?.addEventListener('click', () => {
      item.classList.toggle('active');
    });
  });

  const filterSelect = document.querySelector('#courseFilter');
  const searchInput = document.querySelector('#courseSearch');
  const courseCards = document.querySelectorAll('.course-card');

  if (filterSelect || searchInput) {
    const applyFilters = () => {
      const filter = filterSelect?.value || 'all';
      const query = searchInput?.value.toLowerCase() || '';
      let visible = 0;
      courseCards.forEach(card => {
        const category = card.dataset.category;
        const name = card.dataset.name || '';
        const matchesCategory = filter === 'all' || category === filter;
        const matchesSearch = name.toLowerCase().includes(query);
        const shouldShow = matchesCategory && matchesSearch;
        card.style.display = shouldShow ? '' : 'none';
        if (shouldShow) visible += 1;
      });

      const emptyState = document.querySelector('#courseEmptyState');
      if (emptyState) {
        emptyState.style.display = visible === 0 ? 'block' : 'none';
      }
    };

    filterSelect?.addEventListener('change', applyFilters);
    searchInput?.addEventListener('input', applyFilters);
  }

  const lightbox = document.querySelector('#galleryLightbox');
  const lightboxImage = document.querySelector('#lightboxImage');
  const lightboxTitle = document.querySelector('#lightboxTitle');
  const galleryItems = document.querySelectorAll('[data-lightbox-src]');
  let lightboxIndex = 0;

  galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => {
      const src = item.dataset.lightboxSrc;
      const title = item.dataset.lightboxTitle || 'Gallery image';
      lightboxIndex = index;
      lightboxImage.src = src;
      lightboxTitle.textContent = title;
      lightbox.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  const closeLightbox = () => {
    lightbox?.classList.remove('open');
    document.body.style.overflow = '';
  };
  document.querySelector('#closeLightbox')?.addEventListener('click', closeLightbox);
  lightbox?.addEventListener('click', (event) => {
    if (event.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', (event) => {
    if (!lightbox?.classList.contains('open')) return;
    if (event.key === 'Escape') closeLightbox();
    if (event.key === 'ArrowRight') {
      const items = Array.from(galleryItems);
      lightboxIndex = (lightboxIndex + 1) % items.length;
      const next = items[lightboxIndex];
      lightboxImage.src = next.dataset.lightboxSrc;
      lightboxTitle.textContent = next.dataset.lightboxTitle || 'Gallery image';
    }
    if (event.key === 'ArrowLeft') {
      const items = Array.from(galleryItems);
      lightboxIndex = (lightboxIndex - 1 + items.length) % items.length;
      const prev = items[lightboxIndex];
      lightboxImage.src = prev.dataset.lightboxSrc;
      lightboxTitle.textContent = prev.dataset.lightboxTitle || 'Gallery image';
    }
  });

  const forms = document.querySelectorAll('[data-form-type]');
  forms.forEach(form => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const formType = form.dataset.formType;
      const button = form.querySelector('button[type="submit"]');
      const message = form.querySelector('.form-message');
      const submitLabel = button?.textContent || 'Submit';

      button.disabled = true;
      button.textContent = 'Sending...';
      message.className = 'form-message';

      const formData = new FormData(form);
      const payload = Object.fromEntries(formData.entries());
      payload.type = formType === 'callback' ? 'callback' : 'general';

      try {
        const response = await fetch(formType === 'callback' ? '/api/callback' : '/api/enquiries', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        const result = await response.json();
        if (!response.ok) {
          throw new Error(result.message || 'Submission failed.');
        }

        message.classList.add('success');
        message.textContent = result.message;
        form.reset();
        const courseField = form.querySelector('select[name="course"]');
        if (courseField) courseField.value = courseField.dataset.default || '';
      } catch (error) {
        message.classList.add('error');
        message.textContent = error.message || 'We could not submit the form right now.';
      } finally {
        button.disabled = false;
        button.textContent = submitLabel;
      }
    });
  });
});
