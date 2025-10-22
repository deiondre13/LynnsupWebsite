// ========================================
// MOBILE NAVIGATION TOGGLE
// ========================================
const mobileToggle = document.getElementById('mobile-toggle');
const navMenu = document.getElementById('nav-menu');

mobileToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    mobileToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link, .btn-nav').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        mobileToggle.classList.remove('active');
    });
});

// ========================================
// NAVBAR SCROLL EFFECT
// ========================================
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// ========================================
// SMOOTH SCROLLING FOR NAVIGATION LINKS
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 70; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// BACK TO TOP BUTTON
// ========================================
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ========================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all cards and sections
document.querySelectorAll('.service-card, .value-card, .vm-card, .about-content').forEach(el => {
    observer.observe(el);
});

// ========================================
// CONTACT FORM HANDLING
// ========================================
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const submitButton = contactForm.querySelector('.btn-submit');
    submitButton.classList.add('loading');
    formMessage.className = 'form-message';
    formMessage.style.display = 'none';
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };
    
    // Simulate form submission (replace with actual endpoint)
    setTimeout(() => {
        submitButton.classList.remove('loading');
        
        // For demonstration, we'll show a success message
        // In production, you would send this to a server endpoint
        console.log('Form Data:', formData);
        
        formMessage.className = 'form-message success';
        formMessage.textContent = 'Thank you for your message! We will get back to you soon.';
        formMessage.style.display = 'block';
        
        // Reset form
        contactForm.reset();
        
        // Hide message after 5 seconds
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
        
        // If there's an error, use this instead:
        // formMessage.className = 'form-message error';
        // formMessage.textContent = 'Sorry, there was an error sending your message. Please try again.';
        
    }, 1500);
});

// ========================================
// FORM VALIDATION
// ========================================
const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
};

const validatePhone = (phone) => {
    // South African phone number format
    const re = /^(\+27|0)[0-9]{9}$/;
    return phone === '' || re.test(phone.replace(/\s/g, ''));
};

// Real-time validation
document.getElementById('email').addEventListener('blur', function() {
    if (this.value && !validateEmail(this.value)) {
        this.style.borderColor = '#e74c3c';
    } else {
        this.style.borderColor = '#bdc3c7';
    }
});

document.getElementById('phone').addEventListener('blur', function() {
    if (this.value && !validatePhone(this.value)) {
        this.style.borderColor = '#e74c3c';
    } else {
        this.style.borderColor = '#bdc3c7';
    }
});

// ========================================
// ACTIVE NAVIGATION HIGHLIGHT
// ========================================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 150) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ========================================
// LOADING ANIMATION
// ========================================
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// ========================================
// COUNTER ANIMATION (for future stats section)
// ========================================
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// ========================================
// PARALLAX EFFECT FOR HERO
// ========================================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    
    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// ========================================
// CONSOLE BRANDING
// ========================================
console.log('%cLynnsup', 'color: #3498db; font-size: 2rem; font-weight: bold;');
console.log('%cEmpowering growth through service, quality, and integrity.', 'color: #2c3e50; font-size: 1rem;');
console.log('%cWebsite developed with ❤️', 'color: #7f8c8d; font-size: 0.9rem;');

// ========================================
// LAZY LOADING IMAGES (if images are added later)
// ========================================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ========================================
// PERFORMANCE OPTIMIZATION
// ========================================
// Debounce function for scroll events
function debounce(func, wait = 10, immediate = true) {
    let timeout;
    return function() {
        const context = this, args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// ========================================
// ACCESSIBILITY IMPROVEMENTS
// ========================================
// Keyboard navigation for mobile menu
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        mobileToggle.classList.remove('active');
    }
});

// Focus trap for mobile menu
const focusableElements = navMenu.querySelectorAll('a, button');
const firstFocusable = focusableElements[0];
const lastFocusable = focusableElements[focusableElements.length - 1];

navMenu.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        if (e.shiftKey) {
            if (document.activeElement === firstFocusable) {
                lastFocusable.focus();
                e.preventDefault();
            }
        } else {
            if (document.activeElement === lastFocusable) {
                firstFocusable.focus();
                e.preventDefault();
            }
        }
    }
});

// ========================================
// GOOGLE MAPS INTEGRATION (Optional)
// ========================================
// Uncomment and add your Google Maps API key to enable this feature
/*
function initMap() {
    const mainOffice = { lat: -26.1234, lng: 27.5678 }; // Replace with actual coordinates
    
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: mainOffice,
        styles: [
            // Custom map styling
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [{"color": "#e9e9e9"}, {"lightness": 17}]
            }
        ]
    });
    
    const marker = new google.maps.Marker({
        position: mainOffice,
        map: map,
        title: 'Lynnsup Main Office'
    });
}
*/

// ========================================
// EMAIL INTEGRATION NOTE
// ========================================
/*
To integrate actual email sending functionality:

1. Backend API (Recommended):
   - Create a server endpoint (Node.js, PHP, Python, etc.)
   - Use services like SendGrid, Mailgun, or AWS SES
   - Send POST request from the form to your endpoint

2. Third-party Form Services:
   - Formspree: https://formspree.io
   - Netlify Forms (if hosted on Netlify)
   - EmailJS: https://www.emailjs.com

Example with Formspree:
Replace the form submission code with:

contactForm.setAttribute('action', 'https://formspree.io/f/YOUR_FORM_ID');
contactForm.setAttribute('method', 'POST');
*/
