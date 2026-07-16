const focusText = document.getElementById('focusText');

const focusMessages = [
  'Writing one SQL query to answer a business question clearly.',
  'Cleaning a messy dataset and checking for missing or incorrect values.',
  'Turning numbers into a short insight that a stakeholder could understand.'
];

if (focusText) {
  const today = new Date();
  const index = today.getDate() % focusMessages.length;
  focusText.textContent = focusMessages[index];
}

document.addEventListener('DOMContentLoaded', () => {
  const triggers = document.querySelectorAll('.lightbox-trigger');
  const overlay = document.createElement('div');
  overlay.id = 'lightboxOverlay';
  overlay.className = 'lightbox-overlay';
  overlay.setAttribute('aria-hidden', 'true');
  overlay.innerHTML = `
    <div class="lightbox-content" role="dialog" aria-modal="true">
      <button class="lightbox-close" aria-label="Close">×</button>
      <img id="lightboxImage" src="" alt="" />
    </div>`;
  document.body.appendChild(overlay);

  const lightboxImage = document.getElementById('lightboxImage');
  const closeBtn = overlay.querySelector('.lightbox-close');

  function openLightbox(src, alt) {
    lightboxImage.src = src;
    lightboxImage.alt = alt || '';
    overlay.classList.add('open');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    overlay.classList.remove('open');
    overlay.setAttribute('aria-hidden', 'true');
    lightboxImage.src = '';
    document.body.style.overflow = '';
  }

  triggers.forEach(img => {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', () => openLightbox(img.src, img.alt));
  });

  closeBtn.addEventListener('click', closeLightbox);
  overlay.addEventListener('click', (e) => { if (e.target === overlay) closeLightbox(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLightbox(); });
});
