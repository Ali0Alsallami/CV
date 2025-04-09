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
            e.preventDefault(); // Prevent default anchor behavior
            const targetId = this.getAttribute('href').substring(1); // Get section ID
            const targetSection = document.getElementById(targetId);
            const targetCollapsible = targetSection.querySelector('.collapsible');

            if (targetCollapsible) {
                closeAllExcept(targetCollapsible);
                targetCollapsible.classList.add('active');
                const content = targetCollapsible.nextElementSibling;
                content.style.maxHeight = content.scrollHeight + "px";

                // Smooth scroll to section
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
        darkModeToggle.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
    } else {
        darkModeToggle.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
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
});

// Initialize AOS
AOS.init({
    duration: 800,
    once: true
});
