(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.primary-nav');

  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!isOpen));
      menuButton.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
      nav.classList.toggle('is-open', !isOpen);
    });

    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.setAttribute('aria-label', 'Open navigation');
        nav.classList.remove('is-open');
      });
    });
  }

  // Industry selector: each option gives a concrete example without leaving the page.
  const industryExamples = {
    retail: {
      icon: '▣', kicker: 'RETAIL & E-COMMERCE', title: 'Help shoppers find what they need.',
      copy: 'Answer questions about products, sizing, delivery, returns, and stock using the information your business provides.'
    },
    education: {
      icon: '⌁', kicker: 'EDUCATION', title: 'Make information easier to find.',
      copy: 'Guide students through course details, admission FAQs, schedules, learning resources, and other approved information.'
    },
    health: {
      icon: '＋', kicker: 'CLINICS & SERVICES', title: 'Make common questions simpler.',
      copy: 'Share service information, opening details, preparation guidance, and appointment instructions—without replacing professional advice.'
    },
    property: {
      icon: '⌂', kicker: 'REAL ESTATE', title: 'Help people explore properties.',
      copy: 'Answer questions about listings, locations, property features, viewing steps, and the next stage of an enquiry.'
    },
    hospitality: {
      icon: '✧', kicker: 'HOSPITALITY', title: 'Make every guest interaction easier.',
      copy: 'Help guests understand rooms, facilities, menus, reservations, check-in details, and local information.'
    }
  };

  const industryButtons = document.querySelectorAll('.industry-tab');
  industryButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const example = industryExamples[button.dataset.industry];
      if (!example) return;
      industryButtons.forEach((item) => {
        const active = item === button;
        item.classList.toggle('is-active', active);
        item.setAttribute('aria-pressed', String(active));
      });
      document.querySelector('#example-icon').textContent = example.icon;
      document.querySelector('#example-kicker').textContent = example.kicker;
      document.querySelector('#example-title').textContent = example.title;
      document.querySelector('#example-copy').textContent = example.copy;
    });
  });

  // Prefill the enquiry form when a visitor chooses a solution.
  const interestSelect = document.querySelector('#interest');
  document.querySelectorAll('[data-interest]').forEach((link) => {
    link.addEventListener('click', () => {
      if (interestSelect) interestSelect.value = link.dataset.interest;
    });
  });

  // Respect reduced-motion preferences and reveal sections as they enter view.
  const revealItems = document.querySelectorAll('.reveal');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion || !('IntersectionObserver' in window)) {
    revealItems.forEach((item) => item.classList.add('is-visible'));
  } else {
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          currentObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -25px 0px' });
    revealItems.forEach((item) => observer.observe(item));
  }

  // Keep the footer year current.
  const year = document.querySelector('#year');
  if (year) year.textContent = new Date().getFullYear();

  // Static-hosting friendly enquiry flow: opens the visitor’s email app.
  // Replace this address with the inbox you want to receive enquiries at.
  const CONTACT_EMAIL = 'YOUR_EMAIL@example.com';
  const form = document.querySelector('#contact-form');
  const status = document.querySelector('#form-status');
  if (form && status) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      status.className = 'form-status';
      status.textContent = '';

      const requiredFields = [form.elements.name, form.elements.email, form.elements.interest];
      let firstInvalid = null;
      requiredFields.forEach((field) => {
        const valid = field.checkValidity();
        field.setAttribute('aria-invalid', String(!valid));
        if (!valid && !firstInvalid) firstInvalid = field;
      });
      if (firstInvalid) {
        firstInvalid.reportValidity();
        firstInvalid.focus();
        return;
      }

      if (CONTACT_EMAIL === 'YOUR_EMAIL@example.com') {
        status.textContent = 'Please set your contact email in script.js before publishing the enquiry form.';
        status.className = 'form-status is-visible is-error';
        return;
      }

      const subject = `ChatForge enquiry: ${form.elements.interest.value}`;
      const body = [
        `Name: ${form.elements.name.value.trim()}`,
        `Email: ${form.elements.email.value.trim()}`,
        `Interested in: ${form.elements.interest.value}`,
        '',
        'Project details:',
        form.elements.message.value.trim() || 'Not provided'
      ].join('\n');
      const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailto;
      status.textContent = 'Your email app should open with your enquiry ready to send.';
      status.className = 'form-status is-visible is-success';
    });

    form.querySelectorAll('input, select, textarea').forEach((field) => {
      field.addEventListener('input', () => field.removeAttribute('aria-invalid'));
      field.addEventListener('change', () => field.removeAttribute('aria-invalid'));
    });
  }
})();
