const toggle = document.querySelector('[data-menu-toggle]');
const nav = document.querySelector('[data-site-nav]');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.textContent = open ? 'close' : 'menu';
  });
}

const forms = document.querySelectorAll('[data-endpoint]');
forms.forEach((form) => {
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const endpoint = form.getAttribute('data-endpoint');
    const status = form.querySelector('[data-form-status]');
    if (!endpoint) {
      if (status) status.textContent = 'Configure a form endpoint to enable submissions.';
      return;
    }
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      form.reset();
      if (status) status.textContent = 'Thanks! Your message was submitted.';
    } catch (err) {
      if (status) status.textContent = 'Submission failed. Please try again later.';
    }
  });
});
