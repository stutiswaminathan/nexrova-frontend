// GSAP Animations and Interactions for Agentic AI Receptionist Homepage

// Initialize GSAP and ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeAnimations();
    initializeMobileMenu();
    initializeStickyNav();
    initializeCounters();
});

// Main animation initialization
function initializeAnimations() {
    // Hero section animations
    const heroTimeline = gsap.timeline();
    
    heroTimeline
        .from('.hero-title', {
            duration: 1,
            y: 50,
            opacity: 0,
            ease: 'power3.out'
        })
        .from('.hero-subtitle', {
            duration: 0.8,
            y: 30,
            opacity: 0,
            ease: 'power3.out'
        }, '-=0.5')
        .from('.hero-cta', {
            duration: 0.6,
            y: 20,
            opacity: 0,
            ease: 'power3.out'
        }, '-=0.3')
        .from('.hero-illustration', {
            duration: 1,
            x: 50,
            opacity: 0,
            ease: 'power3.out'
        }, '-=0.8');

    // Feature cards staggered animation
    gsap.from('.feature-card', {
        duration: 0.8,
        y: 60,
        opacity: 0,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.features-section',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        }
    });

    // Benefits section animation
    gsap.from('.benefits-content', {
        duration: 1,
        y: 40,
        opacity: 0,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.benefits-section',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        }
    });

    // Story timeline animation
    gsap.from('.timeline-item', {
        duration: 0.8,
        x: -50,
        opacity: 0,
        stagger: 0.3,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.story-section',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        }
    });

    // Vision section animation
    gsap.from('.vision-content', {
        duration: 1,
        y: 40,
        opacity: 0,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.vision-section',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        }
    });

    // Team cards animation
    gsap.from('.team-card', {
        duration: 0.8,
        y: 40,
        opacity: 0,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.team-section',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        }
    });
}

// Counter animation function
function initializeCounters() {
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const suffix = counter.getAttribute('data-suffix') || '';
        const prefix = counter.getAttribute('data-prefix') || '';
        
        ScrollTrigger.create({
            trigger: counter,
            start: 'top 80%',
            onEnter: () => {
                gsap.to(counter, {
                    duration: 2,
                    innerHTML: target,
                    roundProps: 'innerHTML',
                    ease: 'power2.out',
                    onUpdate: function() {
                        counter.innerHTML = prefix + Math.floor(counter.innerHTML) + suffix;
                    }
                });
            }
        });
    });
}

// Mobile menu functionality
function initializeMobileMenu() {
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
    
    if (!mobileMenuButton || !mobileMenu) return;
    
    // Toggle mobile menu
    mobileMenuButton.addEventListener('click', function() {
        const isOpen = mobileMenu.classList.contains('translate-x-0');
        
        if (isOpen) {
            // Close menu
            gsap.to(mobileMenu, {
                duration: 0.3,
                x: '100%',
                ease: 'power3.inOut'
            });
            gsap.to(mobileMenuOverlay, {
                duration: 0.3,
                opacity: 0,
                ease: 'power3.inOut',
                onComplete: () => {
                    mobileMenu.classList.remove('translate-x-0');
                    mobileMenuOverlay.classList.add('hidden');
                }
            });
        } else {
            // Open menu
            mobileMenu.classList.add('translate-x-0');
            mobileMenuOverlay.classList.remove('hidden');
            gsap.fromTo(mobileMenu, 
                { x: '100%' },
                { duration: 0.3, x: '0%', ease: 'power3.inOut' }
            );
            gsap.fromTo(mobileMenuOverlay,
                { opacity: 0 },
                { duration: 0.3, opacity: 1, ease: 'power3.inOut' }
            );
        }
    });
    
    // Close menu when clicking overlay
    mobileMenuOverlay.addEventListener('click', function() {
        mobileMenuButton.click();
    });
    
    // Close menu when clicking menu items
    const mobileMenuItems = mobileMenu.querySelectorAll('a');
    mobileMenuItems.forEach(item => {
        item.addEventListener('click', function() {
            mobileMenuButton.click();
        });
    });
}

// Sticky navigation functionality
function initializeStickyNav() {
    const navbar = document.querySelector('.navbar');
    const navbarBackground = document.querySelector('.navbar-background');
    
    if (!navbar) return;
    
    // Change navbar background on scroll
    ScrollTrigger.create({
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        onUpdate: (self) => {
            if (self.progress > 0.1) {
                navbar.classList.add('bg-white', 'shadow-brand');
                navbar.classList.remove('bg-transparent');
                if (navbarBackground) {
                    navbarBackground.classList.add('bg-white/95', 'backdrop-blur-sm');
                }
            } else {
                navbar.classList.remove('bg-white', 'shadow-brand');
                navbar.classList.add('bg-transparent');
                if (navbarBackground) {
                    navbarBackground.classList.remove('bg-white/95', 'backdrop-blur-sm');
                }
            }
        }
    });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            gsap.to(window, {
                duration: 1,
                scrollTo: {
                    y: target,
                    offsetY: 80
                },
                ease: 'power3.inOut'
            });
        }
    });
});

// Form submission handling
document.addEventListener('submit', function(e) {
    if (e.target.classList.contains('demo-form')) {
        e.preventDefault();
        
        // Add loading state
        const submitButton = e.target.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;
        
        // Simulate form submission (replace with actual API call)
        setTimeout(() => {
            submitButton.textContent = 'Thank you!';
            submitButton.classList.add('bg-green-500');
            
            setTimeout(() => {
                submitButton.textContent = originalText;
                submitButton.disabled = false;
                submitButton.classList.remove('bg-green-500');
                e.target.reset();
            }, 2000);
        }, 1500);
    }
});

// Intersection Observer for additional animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
        }
    });
}, observerOptions);

// Observe elements for fade-in animation
document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
});

// Parallax effect for hero illustration
ScrollTrigger.create({
    trigger: '.hero-section',
    start: 'top bottom',
    end: 'bottom top',
    onUpdate: (self) => {
        const progress = self.progress;
        gsap.set('.hero-illustration', {
            y: progress * 50
        });
    }
});
