// ===== PROJECT DATA =====
const projectData = {
    'Covid-19 Analysis (SQL)': {
        image: 'cov1.jpg',
        title: 'Covid-19 Analysis (SQL)',
        description: 'Comprehensive data analysis of Covid-19 global statistics using advanced SQL queries. This project involves extracting, transforming, and analyzing pandemic data to uncover meaningful insights about infection rates, mortality rates, and vaccination progress across different countries and continents.',
        tools: ['SQL', 'PostgreSQL', 'Data Analysis'],
        features: [
            'Complex SQL queries for data extraction and transformation',
            'Statistical analysis of infection and death rates',
            'Comparative analysis across countries and continents',
            'Time series analysis of pandemic progression',
            'Calculation of vaccination percentages and trends',
            'Data aggregation and window functions'
        ],
        github: 'https://github.com/jumahans/covid-analysis-with-sql',
        live: null
    },
    'Covid-19 Analysis (Python)': {
        image: 'cov2.jpg',
        title: 'Covid-19 Analysis (Python)',
        description: 'In-depth Python-based analysis of Covid-19 data featuring data visualization, statistical modeling, and predictive analytics. Utilizes powerful Python libraries to process large datasets and create insightful visualizations that tell the story of the pandemic.',
        tools: ['Python', 'Pandas', 'Numpy', 'Matplotlib', 'Seaborn'],
        features: [
            'Data cleaning and preprocessing of raw Covid-19 datasets',
            'Interactive visualizations using Matplotlib and Seaborn',
            'Statistical analysis and trend identification',
            'Geographic data visualization with heatmaps',
            'Time series forecasting and predictions',
            'Comparative analysis of different regions'
        ],
        github: 'https://github.com/jumahans/covid-analysis-with-python',
        live: null
    },
    'Popular Phone Brands': {
        image: 'phone.png',
        title: 'Popular Phone Brands Analysis',
        description: 'Market analysis project examining the popularity and trends of various phone brands. This project leverages data analytics to understand consumer preferences, market share distribution, and brand performance metrics across different segments.',
        tools: ['Python', 'Pandas', 'Numpy', 'Matplotlib', 'Data Visualization'],
        features: [
            'Market share analysis of leading phone brands',
            'Consumer preference trend analysis',
            'Price point comparison across brands',
            'Feature-based competitive analysis',
            'Visual representations with charts and graphs',
            'Data-driven insights for market positioning'
        ],
        github: 'https://github.com/jumahans/popular_phone_brands.',
        live: null
    },
    'Project Management System': {
        image: 'project.jpg',
        title: 'Project Management System',
        description: 'A comprehensive web-based project management solution built with Django. This system enables teams to efficiently plan, track, and manage projects with features like task assignment, progress monitoring, team collaboration, and resource allocation.',
        tools: ['Django', 'Python', 'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'SQLite'],
        features: [
            'User authentication and role-based access control',
            'Project creation and management dashboard',
            'Task assignment and tracking system',
            'Team collaboration and communication tools',
            'Progress visualization with charts and timelines',
            'File upload and document management',
            'Notification system for task updates',
            'Responsive design for mobile and desktop'
        ],
        github: 'https://github.com/jumahans/Product-management-system',
        live: null
    },
    'Ecommerce Website': {
        image: 'ecom.jpg',
        title: 'Ecommerce Website',
        description: 'A full-featured online shopping platform built with Django, offering a complete ecommerce experience. This project includes product catalog management, shopping cart functionality, secure payment processing, and order management system.',
        tools: ['Django', 'Python', 'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'SQLite', 'Payment Gateway'],
        features: [
            'User registration and authentication system',
            'Product catalog with categories and search',
            'Shopping cart and wishlist functionality',
            'Secure checkout and payment processing',
            'Order tracking and management',
            'Admin panel for inventory management',
            'Customer reviews and ratings',
            'Responsive design optimized for all devices'
        ],
        github: 'https://github.com/jumahans/Ecommerce-Web-App',
        live: null
    },
    'Data Analytical Web App': {
        image: 'data.png',
        title: 'Data Analytical Web App',
        description: 'A sophisticated web-based analytical tool designed for professionals and researchers. This application provides comprehensive data cleaning, transformation, visualization, and report generation capabilities, making data analysis accessible and efficient.',
        tools: ['Django', 'Python', 'HTML', 'CSS', 'JavaScript', 'Pandas', 'Plotly', 'Chart.js'],
        features: [
            'CSV and Excel file upload and processing',
            'Automated data cleaning and preprocessing',
            'Interactive data visualization dashboards',
            'Statistical analysis and summary statistics',
            'Custom report generation with export options',
            'Data filtering and transformation tools',
            'Multiple chart types and visualization options',
            'User-friendly interface for non-technical users'
        ],
        github: 'https://github.com/jumahans/Data-Analysis-Web-App',
        live: null
    },
    'OpenAI Chatbot': {
        image: 'ai.png',
        title: 'OpenAI Chatbot',
        description: 'An intelligent conversational AI chatbot powered by OpenAI APIs. This application provides real-time conversational support with capabilities for data analysis, insights generation, and natural language processing, offering users an interactive and intelligent assistant.',
        tools: ['Django', 'React', 'OpenAI API', 'CSS', 'Tailwind CSS', 'REST API', 'WebSockets'],
        features: [
            'Real-time conversational AI interface',
            'Integration with OpenAI GPT models',
            'Context-aware responses and conversation memory',
            'Data analysis and insights generation',
            'Natural language query processing',
            'Modern React-based user interface',
            'Responsive design with Tailwind CSS',
            'Conversation history and session management'
        ],
        github: 'https://github.com/jumahans/OPENAI--CHATBOT',
        live: null
    },
    'Rock-Paper-Scissors': {
        image: 'rock.png',
        title: 'Rock-Paper-Scissors Game',
        description: 'A modern take on the classic Rock-Paper-Scissors game with an engaging user interface and smooth animations. This interactive game features score tracking, game statistics, and an intelligent computer opponent.',
        tools: ['HTML', 'CSS', 'JavaScript', 'Game Logic'],
        features: [
            'Interactive gameplay with smooth animations',
            'Score tracking and win/loss statistics',
            'Computer AI opponent with random selection',
            'Responsive design for all screen sizes',
            'Sound effects and visual feedback',
            'Round history tracking',
            'Modern and intuitive user interface'
        ],
        github: 'https://github.com/jumahans/Rock-paper-scissors',
        live: null
    },
    'Rolling-Dice Game': {
        image: 'roll.webp',
        title: 'Rolling-Dice Game',
        description: 'An interactive dice rolling game featuring realistic animations and multiplayer gameplay. Players take turns rolling dice to accumulate points, with strategic elements that make each game exciting and unpredictable.',
        tools: ['HTML', 'CSS', 'JavaScript', 'Animation'],
        features: [
            'Realistic dice rolling animations',
            'Two-player turn-based gameplay',
            'Score accumulation and tracking',
            'Strategic "hold" and "roll" mechanics',
            'Visual feedback for game events',
            'Winning conditions and game restart',
            'Responsive layout for mobile and desktop'
        ],
        github: 'https://github.com/jumahans/Rolling-Dice',
        live: null
    },
    'Number-Guessing Game': {
        image: 'num.webp',
        title: 'Number-Guessing Game',
        description: 'A fun and challenging number guessing game built with Django and JavaScript. Players attempt to guess a randomly generated number within a limited number of tries, with hints provided after each guess to guide them toward the correct answer.',
        tools: ['Django', 'Python', 'HTML', 'CSS', 'JavaScript'],
        features: [
            'Random number generation algorithm',
            'Hint system (higher/lower feedback)',
            'Limited attempts with difficulty levels',
            'Score tracking and best score recording',
            'Multiple difficulty settings',
            'Game statistics and analytics',
            'Responsive and engaging UI',
            'Sound effects for correct/incorrect guesses'
        ],
        github: 'https://github.com/jumahans/Number-guessing-game',
        live: null
    }
};

// ===== CUSTOM CURSOR =====
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

// Add hover effect on clickable elements
const clickableElements = document.querySelectorAll('a, button, .project-card');
clickableElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.classList.add('expand');
    });
    el.addEventListener('mouseleave', () => {
        cursor.classList.remove('expand');
    });
});

// ===== SKILLS SLIDER =====
const slides = document.querySelectorAll('.slides .show');
let slideindex = 0;

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

// ===== TEXT ANIMATION =====
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
            typingSpeed = 1500;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typingSpeed = 500;
        }
        
        setTimeout(typeText, typingSpeed);
    }
    
    typeText();
}

// ===== PROJECT FILTERS =====
function setupProjectFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    if (!filterBtns.length) return;
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filter = btn.getAttribute('data-filter');
            
            projectCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 100);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// ===== PROJECT MODAL =====
function setupProjectModal() {
    const modal = document.getElementById('projectModal');
    const modalClose = document.querySelector('.modal-close');
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            const title = card.querySelector('h3').textContent;
            const data = projectData[title];
            
            if (data) {
                document.getElementById('modalImage').src = data.image;
                document.getElementById('modalTitle').textContent = data.title;
                document.getElementById('modalDescription').textContent = data.description;
                
                // Tools
                const toolsList = document.getElementById('modalTools');
                toolsList.innerHTML = '';
                data.tools.forEach(tool => {
                    const span = document.createElement('span');
                    span.textContent = tool;
                    toolsList.appendChild(span);
                });
                
                // Features
                const featuresList = document.getElementById('modalFeatures');
                featuresList.innerHTML = '';
                data.features.forEach(feature => {
                    const li = document.createElement('li');
                    li.textContent = feature;
                    featuresList.appendChild(li);
                });
                
                // Links
                document.getElementById('modalGithubLink').href = data.github;
                const liveLink = document.getElementById('modalLiveLink');
                if (data.live) {
                    liveLink.href = data.live;
                    liveLink.style.display = 'inline-flex';
                } else {
                    liveLink.style.display = 'none';
                }
                
                modal.classList.add('show');
                document.body.style.overflow = 'hidden';
            }
        });
    });
    
    // Close modal
    modalClose.addEventListener('click', () => {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto';
    });
    
    // Close on outside click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
            document.body.style.overflow = 'auto';
        }
    });
    
    // Close on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            modal.classList.remove('show');
            document.body.style.overflow = 'auto';
        }
    });
}

// ===== MOBILE NAVIGATION =====
function setupNavigation() {
    const show = document.getElementById('show');
    const navigation = document.querySelector('.navigation');
    
    if (!show || !navigation) return;
    
    function updateNavigationDisplay() {
        if (window.innerWidth <= 768) {
            navigation.classList.remove('active');
        } else {
            navigation.classList.add('active');
        }
    }
    
    show.addEventListener('click', () => {
        navigation.classList.toggle('active');
        
        if (navigation.classList.contains('active')) {
            show.innerHTML = '<i class="bx bx-x"></i>';
        } else {
            show.innerHTML = '<i class="bx bx-menu"></i>';
        }
    });
    
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                navigation.classList.remove('active');
                show.innerHTML = '<i class="bx bx-menu"></i>';
            }
        });
    });
    
    window.addEventListener('resize', updateNavigationDisplay);
    updateNavigationDisplay();
}

// ===== SCROLL ANIMATIONS =====
function setupScrollAnimation() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    const header = document.querySelector('.header');
    
    let scrollTimeout;
    
    window.addEventListener('scroll', () => {
        // Header scroll effect
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
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
            
            animateOnScroll();
        });
    });
}

// ===== ANIMATE ON SCROLL =====
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

// ===== SMOOTH SCROLL =====
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ===== FORM HANDLING =====
function setupFormHandling() {
    const form = document.querySelector('.contact-form form');
    
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);
            
            // Here you would typically send the data to a server
            console.log('Form submitted:', data);
            
            // Show success message
            alert('Thank you for your message! I will get back to you soon.');
            form.reset();
        });
    }
}

// ===== INITIALIZE ON DOM LOAD =====
document.addEventListener('DOMContentLoaded', () => {
    initializedSlides();
    setupTextAnimation();
    setupProjectFilters();
    setupProjectModal();
    setupNavigation();
    setupScrollAnimation();
    setupSmoothScroll();
    setupFormHandling();
    animateOnScroll();
});

// ===== PERFORMANCE OPTIMIZATION =====
// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add lazy loading for images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}