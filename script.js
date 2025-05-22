// Custom cursor
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    setTimeout(() => {
        cursorFollower.style.left = e.clientX + 'px';
        cursorFollower.style.top = e.clientY + 'px';
    }, 100);
});

// Skills slider
const slides = document.querySelectorAll('.slides .show');
let slideindex = 0;

document.addEventListener('DOMContentLoaded', () => {
    initializedSlides();
    setupTextAnimation();
    setupProjectFilters();
    setupNavigation();
    setupScrollAnimation();
    // Initial call to show animations on page load
    animateOnScroll();
});

function initializedSlides() {
    if (slides.length > 0) {
        slides.forEach(slide => slide.classList.remove('displayslides'));
        slides[slideindex].classList.add('displayslides');
    }
}

function showSlides(index) {
    if (index >= slides.length) {
        slideindex = 0;
    } else if (index < 0) {
        slideindex = slides.length - 1;
    }
    slides.forEach(slide => {
        slide.classList.remove('displayslides');
    });
    slides[slideindex].classList.add('displayslides');
}

function prevSlides() {
    slideindex--;
    showSlides(slideindex);
}

function nextSlides() {
    slideindex++;
    showSlides(slideindex);
}

// Text animation for hero section
function setupTextAnimation() {
    const textAnimation = document.querySelector('.text-animation span');
    if (!textAnimation) return;
    
    const roles = ['Data Analyst', 'Web Developer', 'Problem Solver'];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    function typeText() {
        const currentRole = roles[roleIndex];
        
        if (isDeleting) {
            textAnimation.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            textAnimation.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 150;
        }
        
        if (!isDeleting && charIndex === currentRole.length) {
            isDeleting = true;
            typingSpeed = 1500; // Pause at the end
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typingSpeed = 500; // Pause before typing next word
        }
        
        setTimeout(typeText, typingSpeed);
    }
    
    typeText();
}

// Project filters
function setupProjectFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    if (!filterBtns.length) return;
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');
            
            const filter = btn.getAttribute('data-filter');
            
            projectCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.classList.add('show');
                    }, 100);
                } else {
                    card.classList.remove('show');
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// Mobile navigation
function setupNavigation() {
    const show = document.getElementById('show');
    const navigation = document.querySelector('.navigation');
    
    if (!show || !navigation) return;
    
    // Initial state based on screen size
    function updateNavigationDisplay() {
        if (window.innerWidth <= 767) {
            navigation.classList.remove('active');
        } else {
            navigation.classList.add('active');
        }
    }
    
    // Toggle navigation on menu button click
    show.addEventListener('click', () => {
        navigation.classList.toggle('active');
        
        if (navigation.classList.contains('active')) {
            show.innerHTML = '<i class="bx bx-x"></i>';
        } else {
            show.innerHTML = '<i class="bx bx-menu"></i>';
        }
    });
    
    // Close navigation when clicking a link (mobile only)
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 767) {
                navigation.classList.remove('active');
                show.innerHTML = '<i class="bx bx-menu"></i>';
            }
        });
    });
    
    // Update on resize
    window.addEventListener('resize', updateNavigationDisplay);
    
    // Initial setup
    updateNavigationDisplay();
}

// Scroll animations
function setupScrollAnimation() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Use throttling to improve scroll performance
    let scrollTimeout;
    
    window.addEventListener('scroll', () => {
        if (scrollTimeout) {
            window.cancelAnimationFrame(scrollTimeout);
        }
        
        scrollTimeout = window.requestAnimationFrame(() => {
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                
                if (pageYOffset >= sectionTop - 200) {
                    current = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').includes(current)) {
                    link.classList.add('active');
                }
            });
            
            // Call the separate animation function
            animateOnScroll();
        });
    });
}

// Page transition effect
function createPageTransition() {
    // Remove any existing transitions first
    const existingTransition = document.querySelector('.page-transition');
    if (existingTransition) {
        document.body.removeChild(existingTransition);
    }
    
    const transition = document.createElement('div');
    transition.className = 'page-transition';
    document.body.appendChild(transition);
    
    return new Promise(resolve => {
        setTimeout(() => {
            document.body.removeChild(transition);
            resolve();
        }, 1000);
    });
}

// Trigger transition when clicking on navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', async function(e) {
        e.preventDefault();
        
        await createPageTransition();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Animate elements when they come into view
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight - 100) {
            element.classList.add('animate');
        }
    });
};

// No need for separate event listeners as this is called from setupScrollAnimation
// and on DOMContentLoaded
