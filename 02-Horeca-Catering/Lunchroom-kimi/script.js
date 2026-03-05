/**
 * De Lunchkamer - Main JavaScript
 * Warm Brutalism Design with scroll animations and interactions
 */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all modules
    initCustomCursor();
    initHeader();
    initMobileMenu();
    initScrollReveal();
    initMenuTabs();
    initSmoothScroll();
    initContactForm();
});

/**
 * Custom Cursor
 */
function initCustomCursor() {
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');
    
    if (!cursorDot || !cursorOutline) return;
    
    // Check for touch device
    if (window.matchMedia('(pointer: coarse)').matches) return;
    
    let mouseX = 0;
    let mouseY = 0;
    let outlineX = 0;
    let outlineY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Move dot immediately
        cursorDot.style.left = `${mouseX}px`;
        cursorDot.style.top = `${mouseY}px`;
    });
    
    // Smooth follow for outline
    function animateCursor() {
        const dx = mouseX - outlineX;
        const dy = mouseY - outlineY;
        
        outlineX += dx * 0.15;
        outlineY += dy * 0.15;
        
        cursorOutline.style.left = `${outlineX}px`;
        cursorOutline.style.top = `${outlineY}px`;
        
        requestAnimationFrame(animateCursor);
    }
    animateCursor();
    
    // Hover effects
    const interactiveElements = document.querySelectorAll('a, button, .menu-tab, input, select, textarea');
    
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursorOutline.classList.add('hover');
        });
        
        el.addEventListener('mouseleave', () => {
            cursorOutline.classList.remove('hover');
        });
    });
}

/**
 * Header scroll behavior
 */
function initHeader() {
    const header = document.querySelector('.header');
    if (!header) return;
    
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        // Add/remove scrolled class
        if (currentScroll > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    }, { passive: true });
}

/**
 * Mobile Menu
 */
function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (!menuToggle || !navMenu) return;
    
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });
    
    // Close menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
}

/**
 * Scroll Reveal Animations
 */
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.scroll-reveal');
    
    if (!revealElements.length) return;
    
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -100px 0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.dataset.delay || 0;
                
                setTimeout(() => {
                    entry.target.classList.add('revealed');
                }, delay);
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    revealElements.forEach(el => {
        observer.observe(el);
    });
    
    // Trigger initial check for elements already in view
    setTimeout(() => {
        revealElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                const delay = el.dataset.delay || 0;
                setTimeout(() => {
                    el.classList.add('revealed');
                }, delay);
            }
        });
    }, 100);
}

/**
 * Menu Tabs
 */
function initMenuTabs() {
    const tabs = document.querySelectorAll('.menu-tab');
    const panels = document.querySelectorAll('.menu-panel');
    
    if (!tabs.length) return;
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const category = tab.dataset.category;
            
            // Update active tab
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            // Update active panel
            panels.forEach(panel => {
                panel.classList.remove('active');
                if (panel.dataset.panel === category) {
                    panel.classList.add('active');
                }
            });
        });
    });
}

/**
 * Smooth Scroll
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Contact Form
 */
function initContactForm() {
    const form = document.getElementById('contactForm');
    
    if (!form) return;
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // Show success message (demo)
        alert('Bedankt voor je bericht! We nemen zo snel mogelijk contact met je op.\n\n(Dit is een demo - geen echt bericht verstuurd)');
        
        // Reset form
        form.reset();
    });
}

/**
 * Parallax effect for hero shapes (desktop only)
 */
if (!window.matchMedia('(pointer: coarse)').matches) {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const shapes = document.querySelectorAll('.hero-shape');
        
        shapes.forEach((shape, index) => {
            const speed = 0.1 + (index * 0.05);
            shape.style.transform = `translateY(${scrolled * speed}px)`;
        });
    }, { passive: true });
}

/**
 * Menu item hover effect
 */
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.borderLeftColor = 'var(--color-accent)';
        this.style.borderLeftWidth = '3px';
        this.style.borderLeftStyle = 'solid';
        this.style.paddingLeft = 'calc(var(--space-md) - 3px)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.borderLeftColor = 'transparent';
        this.style.borderLeftWidth = '0';
        this.style.paddingLeft = 'var(--space-md)';
    });
});
