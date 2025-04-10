// Collapsible functionality
document.addEventListener('DOMContentLoaded', function() {
    const collapsibles = document.getElementsByClassName('collapsible');
    const navLinks = document.querySelectorAll('.nav-links a');

    // Function to close all sections except the selected one
    function closeAllExcept(selected) {
        for (let i = 0; i < collapsibles.length; i++) {
            if (collapsibles[i] !== selected) {
                collapsibles[i].classList.remove('active');
                collapsibles[i].nextElementSibling.style.maxHeight = null;
            }
        }
    }

    // Collapsible sections click event
    for (let i = 0; i < collapsibles.length; i++) {
        collapsibles[i].addEventListener('click', function() {
            closeAllExcept(this);
            this.classList.toggle('active');
            const content = this.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    }

    // Navigation links click event
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            const targetCollapsible = targetSection.querySelector('.collapsible');

            if (targetCollapsible) {
                closeAllExcept(targetCollapsible);
                targetCollapsible.classList.add('active');
                const content = targetCollapsible.nextElementSibling;
                content.style.maxHeight = content.scrollHeight + "px";
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

// Back to Top functionality
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("backToTop").style.display = "block";
    } else {
        document.getElementById("backToTop").style.display = "none";
    }
};

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        darkModeToggle.innerHTML = '<i class="fas fa-sun"></i> ' + (isArabic ? 'الوضع الفاتح' : 'Light Mode');
    } else {
        darkModeToggle.innerHTML = '<i class="fas fa-moon"></i> ' + (isArabic ? 'الوضع الداكن' : 'Dark Mode');
    }
});

// Language Toggle
const langToggle = document.getElementById('langToggle');
let isArabic = false;
langToggle.addEventListener('click', function() {
    isArabic = !isArabic;
    langToggle.textContent = isArabic ? 'English' : 'العربية';
    document.querySelectorAll('[data-en][data-ar]').forEach(element => {
        element.textContent = isArabic ? element.getAttribute('data-ar') : element.getAttribute('data-en');
    });
    document.documentElement.setAttribute('lang', isArabic ? 'ar' : 'en');
    document.documentElement.setAttribute('dir', isArabic ? 'rtl' : 'ltr');
    // Update dark mode button text based on language
    if (document.body.classList.contains('dark-mode')) {
        darkModeToggle.innerHTML = '<i class="fas fa-sun"></i> ' + (isArabic ? 'الوضع الفاتح' : 'Light Mode');
    } else {
        darkModeToggle.innerHTML = '<i class="fas fa-moon"></i> ' + (isArabic ? 'الوضع الداكن' : 'Dark Mode');
    }
    // Update collapsible content heights after language switch
    const activeCollapsibles = document.querySelectorAll('.collapsible.active');
    activeCollapsibles.forEach(collapsible => {
        const content = collapsible.nextElementSibling;
        content.style.maxHeight = content.scrollHeight + "px";
    });
});

// Scroll Progress Bar
window.addEventListener('scroll', function() {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercentage = (scrollTop / scrollHeight) * 100;
    document.getElementById('progress-bar').style.width = scrollPercentage + '%';
});

// Copy Email to Clipboard
document.getElementById('copyEmail').addEventListener('click', function() {
    navigator.clipboard.writeText('alsallamiali066@gmail.com');
    alert(isArabic ? 'تم نسخ البريد الإلكتروني إلى الحافظة!' : 'Email copied to clipboard!');
});

// Initialize AOS
AOS.init({
    duration: 800,
    once: false,
    easing: 'ease-in-out'
});
