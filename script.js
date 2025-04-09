// تحسينات التبديل بين اللغات
const langToggle = document.getElementById('langToggle');
let currentLang = 'en';

langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    document.documentElement.setAttribute('lang', currentLang);
    document.documentElement.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');
    langToggle.textContent = currentLang === 'en' ? 'العربية' : 'English';
    
    // تحديث النصوص
    document.querySelectorAll('[data-en], [data-ar]').forEach(el => {
        el.textContent = currentLang === 'en' ? el.dataset.en : el.dataset.ar;
    });
});

// تحسينات الوضع الليلي
const darkModeToggle = document.getElementById('darkModeToggle');

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    darkModeToggle.innerHTML = isDark 
        ? '<i class="fas fa-sun"></i> Light Mode' 
        : '<i class="fas fa-moon"></i> Dark Mode';
    localStorage.setItem('darkMode', isDark);
});

// تهيئة AOS
AOS.init({
    duration: 800,
    once: true,
    offset: 120,
});

// تهيئة Lightbox
lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true,
    'albumLabel': 'صورة %1 من %2'
});
