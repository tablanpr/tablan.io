// SCRIPT LOADED TEST
console.log('🚀 SCRIPT.JS LOADED SUCCESSFULLY!');

// Supabase Configuration
const supabaseUrl = 'https://mlwcbcvlqzjbgriwhino.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1sd2NiY3ZscXpqYmdyaXdoaW5vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTcwODQxMTEsImV4cCI6MjA3MjY2MDExMX0.IKyB6T_cyeQshByBprgFlGJrYbr-RcAEhiousQFoV60';

let supabaseClient;

// Initialize Supabase client
function initializeSupabase() {
    try {
        if (typeof supabase !== 'undefined') {
            supabaseClient = supabase.createClient(supabaseUrl, supabaseAnonKey);
            console.log('Supabase client initialized successfully');
        } else {
            console.warn('Supabase library not loaded - form will work but not save to database');
        }
    } catch (error) {
        console.error('Error initializing Supabase:', error);
    }
}

// Mobile Navigation Toggle
function setupMobileNavigation() {
    const navToggle = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
}

// Smooth Scrolling for Navigation Links
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 70; // Account for fixed navigation
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const navMenu = document.querySelector('.nav-menu');
                const navToggle = document.getElementById('mobile-menu');
                if (navMenu && navToggle) {
                    navMenu.classList.remove('active');
                    navToggle.classList.remove('active');
                }
            }
        });
    });
}

// FAQ Accordion Functionality - Ultra Simple Version
function setupFAQ() {
    console.log('=== SETTING UP FAQ ===');
    
    // Get all FAQ items
    const faqItems = document.querySelectorAll('.faq-item');
    console.log('Found FAQ items:', faqItems.length);
    
    if (faqItems.length === 0) {
        console.error('No FAQ items found!');
        return;
    }
    
    faqItems.forEach((item, index) => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const toggle = item.querySelector('.faq-toggle');
        
        console.log(`FAQ ${index + 1}:`, {
            question: !!question,
            answer: !!answer,
            toggle: !!toggle
        });
        
        if (question && answer && toggle) {
            question.style.cursor = 'pointer';
            
            question.onclick = function() {
                console.log(`FAQ ${index + 1} clicked!`);
                
                // Close all others first
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        const otherAnswer = otherItem.querySelector('.faq-answer');
                        const otherToggle = otherItem.querySelector('.faq-toggle');
                        if (otherAnswer && otherToggle) {
                            otherAnswer.style.display = 'none';
                            otherToggle.textContent = '+';
                            otherItem.classList.remove('active');
                        }
                    }
                });
                
                // Toggle this one
                if (answer.style.display === 'block') {
                    answer.style.display = 'none';
                    toggle.textContent = '+';
                    item.classList.remove('active');
                    console.log(`FAQ ${index + 1} CLOSED`);
                } else {
                    answer.style.display = 'block';
                    toggle.textContent = '−';
                    item.classList.add('active');
                    console.log(`FAQ ${index + 1} OPENED`);
                }
            };
        }
    });
    
    // Test function
    window.testFAQ = function(itemNumber = 1) {
        const item = document.querySelector('.faq-item:nth-child(' + itemNumber + ')');
        if (item) {
            const question = item.querySelector('.faq-question');
            if (question) {
                question.click();
                console.log('Clicked FAQ ' + itemNumber);
            }
        }
    };
    
    console.log('=== FAQ SETUP COMPLETE ===');
}

// Navbar Background on Scroll
function setupNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.style.background = 'rgba(255, 255, 255, 0.98)';
                navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
            } else {
                navbar.style.background = 'rgba(255, 255, 255, 0.95)';
                navbar.style.boxShadow = 'none';
            }
        });
    }
}

// Contact Email Click Tracking
function setupContactTracking() {
    const contactEmail = document.querySelector('.contact-email');
    
    if (contactEmail) {
        contactEmail.addEventListener('click', () => {
            // Track email click if analytics is available
            if (typeof gtag !== 'undefined') {
                gtag('event', 'click', {
                    'event_category': 'Contact',
                    'event_label': 'Email Click'
                });
            }
        });
    }
}

// Animated Number Counters for Stats
function setupStatsAnimation() {
    const statNumbers = document.querySelectorAll('.stat-number');
    let animated = false;
    
    function animateNumbers() {
        if (animated) return;
        
        const statsSection = document.querySelector('.stats');
        const rect = statsSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Check if stats section is in viewport
        if (rect.top <= windowHeight * 0.75) {
            animated = true;
            
            statNumbers.forEach(stat => {
                const target = stat.textContent.replace(/[^0-9]/g, '');
                const suffix = stat.textContent.replace(/[0-9]/g, '');
                const targetNum = parseInt(target);
                
                if (targetNum) {
                    let current = 0;
                    const increment = targetNum / 50;
                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= targetNum) {
                            current = targetNum;
                            clearInterval(timer);
                        }
                        stat.textContent = Math.floor(current) + suffix;
                    }, 40);
                }
            });
        }
    }
    
    window.addEventListener('scroll', animateNumbers);
}

// CTA Button Hover Effects
function setupCTAEffects() {
    const ctaButtons = document.querySelectorAll('.cta-button');
    
    ctaButtons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translateY(0)';
        });
    });
}

// Contact Popup Modal Functions
function openContactPopup() {
    console.log('openContactPopup called');
    const modal = document.getElementById('contactModal');
    console.log('Modal found:', modal);
    if (modal) {
        // Force show with multiple CSS properties
        modal.style.display = 'block';
        modal.style.visibility = 'visible';
        modal.style.opacity = '1';
        modal.style.zIndex = '9999';
        modal.style.position = 'fixed';
        modal.style.top = '0';
        modal.style.left = '0';
        modal.style.width = '100%';
        modal.style.height = '100%';
        modal.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        
        document.body.style.overflow = 'hidden';
        console.log('Modal display set to block');
        
        // Focus on first input
        setTimeout(() => {
            const firstInput = modal.querySelector('input[type="text"]');
            if (firstInput) {
                firstInput.focus();
            }
        }, 100);
    } else {
        console.error('Modal element not found!');
    }
}

function closeContactPopup() {
    const modal = document.getElementById('contactModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        
        // Reset multi-step form
        resetMultiStepForm();
        
        // Reset form
        const form = modal.querySelector('#multiStepForm');
        if (form) {
            form.reset();
        }
    }
}

// Make functions globally accessible immediately
window.openContactPopup = openContactPopup;
window.closeContactPopup = closeContactPopup;
console.log('✅ Global functions assigned:', {
    openContactPopup: typeof window.openContactPopup,
    closeContactPopup: typeof window.closeContactPopup
});

// Multi-Step Form Variables
let currentStep = 1;
const totalSteps = 6;

// Multi-Step Form Navigation
function nextStep() {
    if (validateCurrentStep()) {
        if (currentStep < totalSteps) {
            // Hide current step
            document.querySelector('[data-step="' + currentStep + '"]').classList.remove('active');
            
            // Move to next step
            currentStep++;
            
            // Show next step
            document.querySelector('[data-step="' + currentStep + '"]').classList.add('active');
            
            // Update progress
            updateProgress();
            
            // Update navigation buttons
            updateNavigationButtons();
        }
    }
}

function previousStep() {
    if (currentStep > 1) {
        // Hide current step
        document.querySelector('[data-step="' + currentStep + '"]').classList.remove('active');
        
        // Move to previous step
        currentStep--;
        
        // Show previous step
        document.querySelector('[data-step="' + currentStep + '"]').classList.add('active');
        
        // Update progress
        updateProgress();
        
        // Update navigation buttons
        updateNavigationButtons();
    }
}

function updateProgress() {
    const progressFill = document.getElementById('progressFill');
    const stepIndicator = document.getElementById('stepIndicator');
    
    const progressPercentage = (currentStep / totalSteps) * 100;
    progressFill.style.width = progressPercentage + '%';
    stepIndicator.textContent = 'Step ' + currentStep + ' of ' + totalSteps;
}

function updateNavigationButtons() {
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    const submitButton = document.querySelector('.submit-button');
    
    // Show/hide previous button
    if (currentStep === 1) {
        prevButton.style.display = 'none';
    } else {
        prevButton.style.display = 'inline-block';
    }
    
    // Show/hide next/submit buttons
    if (currentStep === totalSteps) {
        nextButton.style.display = 'none';
        submitButton.style.display = 'inline-block';
    } else {
        nextButton.style.display = 'inline-block';
        submitButton.style.display = 'none';
    }
}

function validateCurrentStep() {
    const currentStepElement = document.querySelector('[data-step="' + currentStep + '"]');
    
    if (currentStep === 1) {
        // Step 1: At least one implementation area must be selected
        const checkboxes = currentStepElement.querySelectorAll('input[type="checkbox"]');
        const isAnyChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);
        
        if (!isAnyChecked) {
            showFormMessage('Please select at least one implementation area.', 'error');
            return false;
        }
    } else {
        // Other steps: Validate required fields
        const requiredFields = currentStepElement.querySelectorAll('input[required], textarea[required]');
        
        for (let field of requiredFields) {
            if (!field.value.trim()) {
                field.focus();
                showFormMessage('Please fill in all required fields.', 'error');
                return false;
            }
            
            // Email validation for email fields
            if (field.type === 'email') {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(field.value)) {
                    field.focus();
                    showFormMessage('Please enter a valid email address.', 'error');
                    return false;
                }
            }
            
            // URL validation for URL fields
            if (field.type === 'url') {
                try {
                    new URL(field.value);
                } catch {
                    field.focus();
                    showFormMessage('Please enter a valid website URL.', 'error');
                    return false;
                }
            }
        }
    }
    
    // Clear any error messages
    clearFormMessages();
    return true;
}

// Multi-Step Contact Form Handler
async function handleMultiStepForm(event) {
    event.preventDefault();
    
    if (!validateCurrentStep()) {
        return;
    }
    
    const form = event.target;
    const formData = new FormData(form);
    const submitButton = form.querySelector('.submit-button');
    
    // Get all form data
    const data = {
        implementation_areas: [],
        current_challenges: formData.get('current_challenges'),
        current_solutions: formData.get('current_solutions'),
        business_goals: formData.get('business_goals'),
        company_website: formData.get('company_website'),
        full_name: formData.get('full_name'),
        job_title: formData.get('job_title'),
        work_email: formData.get('work_email'),
        contact_number: formData.get('contact_number'),
        company_name: formData.get('company_name')
    };
    
    // Get selected implementation areas
    const selectedAreas = formData.getAll('implementation_area');
    data.implementation_areas = selectedAreas;
    
    // Show loading state
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Submitting...';
    submitButton.disabled = true;
    
    try {
        // Submit to Supabase if available
        if (supabaseClient) {
            const { data: result, error } = await supabaseClient
                .from('contact_submissions')
                .insert([data]);
                
            if (error) {
                throw error;
            }
        } else {
            // Fallback: just log to console if Supabase is not available
            console.log('Form submitted (Supabase not available):', data);
        }
        
        // Success
        showFormMessage('Thank you for your application! I will review your information and get back to you within 24 hours with next steps.', 'success');
        
        // Reset form and close modal after delay
        setTimeout(() => {
            form.reset();
            closeContactPopup();
            resetMultiStepForm();
        }, 3000);
        
    } catch (error) {
        console.error('Error submitting form:', error);
        showFormMessage('Sorry, there was an error submitting your application. Please try again or contact me directly.', 'error');
        
        // Reset button state
        submitButton.textContent = originalText;
        submitButton.disabled = false;
    }
}

function resetMultiStepForm() {
    currentStep = 1;
    
    // Reset all steps
    document.querySelectorAll('.form-step').forEach(step => {
        step.classList.remove('active');
    });
    document.querySelector('[data-step="1"]').classList.add('active');
    
    // Reset progress and buttons
    updateProgress();
    updateNavigationButtons();
    
    // Clear messages
    clearFormMessages();
}

function clearFormMessages() {
    const messages = document.querySelectorAll('.success-message, .error-message');
    messages.forEach(message => message.remove());
}

function showFormMessage(message, type) {
    // Remove existing messages
    const existingMessages = document.querySelectorAll('.success-message, .error-message');
    existingMessages.forEach(msg => msg.remove());
    
    // Create new message
    const messageDiv = document.createElement('div');
    messageDiv.className = type === 'success' ? 'success-message' : 'error-message';
    messageDiv.textContent = message;
    
    // Insert before form
    const form = document.getElementById('multiStepForm');
    if (form) {
        form.parentNode.insertBefore(messageDiv, form);
    }
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('contactModal');
    if (event.target === modal) {
        closeContactPopup();
    }
}

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeContactPopup();
    }
});

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('=== DOM LOADED ===');
    
    try {
        // Initialize Supabase first
        initializeSupabase();
        
        setupMobileNavigation();
        setupSmoothScrolling();
        
        // Setup FAQ with extra logging
        console.log('About to setup FAQ...');
        setupFAQ();
        console.log('FAQ setup called');
        
        setupNavbarScroll();
        setupContactTracking();
        setupStatsAnimation();
        setupCTAEffects();
        
        // Add multi-step contact form handler
        const multiStepForm = document.getElementById('multiStepForm');
        if (multiStepForm) {
            multiStepForm.addEventListener('submit', handleMultiStepForm);
            console.log('Form handler attached');
        } else {
            console.error('multiStepForm not found!');
        }
        
        // Test popup function
        window.testPopup = function() {
            console.log('Testing popup...');
            openContactPopup();
        };
        
        // Ensure functions are globally available
        window.openContactPopup = openContactPopup;
        window.closeContactPopup = closeContactPopup;
        
        // Add loading animation fadeout
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
        
    } catch (error) {
        console.error('Error during initialization:', error);
    }
    
    console.log('=== INITIALIZATION COMPLETE ===');
});

// Also try to setup FAQ after window loads
window.addEventListener('load', function() {
    console.log('=== WINDOW LOADED ===');
    console.log('Setting up FAQ again as backup...');
    setupFAQ();
});

// Add CSS for mobile navigation
const mobileNavCSS = `
    @media (max-width: 768px) {
        .nav-menu.active {
            display: flex;
            position: fixed;
            left: 0;
            top: 70px;
            flex-direction: column;
            background-color: white;
            width: 100%;
            text-align: center;
            box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
            border-top: 1px solid #f0f0f0;
            z-index: 999;
            padding: 20px 0;
        }
        
        .nav-menu.active .nav-item {
            margin: 10px 0;
        }
        
        .nav-toggle.active .bar:nth-child(2) {
            opacity: 0;
        }
        
        .nav-toggle.active .bar:nth-child(1) {
            transform: translateY(9px) rotate(45deg);
        }
        
        .nav-toggle.active .bar:nth-child(3) {
            transform: translateY(-9px) rotate(-45deg);
        }
    }
`;

// Inject mobile navigation CSS
if (!document.getElementById('mobile-nav-styles')) {
    const style = document.createElement('style');
    style.id = 'mobile-nav-styles';
    style.textContent = mobileNavCSS;
    document.head.appendChild(style);
}