
// script.js
document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('langToggle');
  let isArabic = false;

  toggleBtn.addEventListener('click', () => {
    isArabic = !isArabic;
    document.documentElement.lang = isArabic ? 'ar' : 'en';
    document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
    toggleBtn.textContent = isArabic ? 'English' : 'العربية';

    document.querySelectorAll('[data-en][data-ar]').forEach(el => {
      el.textContent = isArabic ? el.getAttribute('data-ar') : el.getAttribute('data-en');
    });
  });
});
