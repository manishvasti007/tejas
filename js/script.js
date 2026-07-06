// ===================================
// Mobile Menu Toggle Functionality
// ===================================

const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navLinks = document.getElementById('navLinks');

// Toggle mobile menu when hamburger is clicked
mobileMenuToggle.addEventListener('click', function() {
    navLinks.classList.toggle('active');
    mobileMenuToggle.classList.toggle('active');
});

// Close mobile menu when a nav link is clicked
const navLinksElements = document.querySelectorAll('.nav-link');
navLinksElements.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const isClickInsideNav = navLinks.contains(event.target);
    const isClickInsideToggle = mobileMenuToggle.contains(event.target);
    
    if (!isClickInsideNav && !isClickInsideToggle && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
    }
});

// ===================================
// Smooth Scrolling for Anchor Links
// ===================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        
        if (targetId === '#') return;
        
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===================================
// Contact Form Handling
// ===================================

const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = contactForm.querySelector('input[type="text"]').value;
    const email = contactForm.querySelector('input[type="email"]').value;
    const message = contactForm.querySelector('textarea').value;
    
    // Validate form
    if (!name || !email || !message) {
        alert('Please fill in all fields');
        return;
    }
    
    // Display success message
    alert(`Thank you ${name}! Your message has been received. We'll get back to you soon.`);
    
    // Reset form
    contactForm.reset();
});

// ===================================
// Scroll Animation for Elements
// ===================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe cards for animation
document.querySelectorAll('.program-card, .stat-box, .facility-item, .gallery-item').forEach(element => {
    element.style.opacity = '0';
    observer.observe(element);
});

// ===================================
// Interactive Gallery Items
// ===================================

const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.filter = 'brightness(0.8)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.filter = 'brightness(1)';
    });
    
    item.addEventListener('click', function() {
        const text = this.querySelector('.placeholder-image').textContent;
        alert(`Gallery: ${text}`);
    });
});

// ===================================
// CTA Button Functionality
// ===================================

const ctaButton = document.querySelector('.cta-button');

ctaButton.addEventListener('click', function() {
    const academics = document.getElementById('academics');
    academics.scrollIntoView({ behavior: 'smooth' });
});

// ===================================
// Header Scroll Effect
// ===================================

const header = document.querySelector('.header');
let lastScrollY = 0;

window.addEventListener('scroll', function() {
    const scrollY = window.scrollY;
    
    if (scrollY > lastScrollY && scrollY > 100) {
        // Scrolling down
        header.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up
        header.style.transform = 'translateY(0)';
    }
    
    lastScrollY = scrollY;
});

header.style.transition = 'transform 0.3s ease';

// ===================================
// Active Navigation Link Indicator
// ===================================

window.addEventListener('scroll', function() {
    let current = '';
    
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= sectionTop - 300) {
            current = section.getAttribute('id');
        }
    });
    
    navLinksElements.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ===================================
// Add some console feedback for debugging
// ===================================

console.log('✅ School Website JS Loaded Successfully!');
console.log('📱 Mobile menu toggle: Working');
console.log('🎯 Smooth scrolling: Enabled');
console.log('✉️ Contact form: Ready');
console.log('🎨 Scroll animations: Active');
