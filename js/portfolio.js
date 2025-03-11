// Portfolio and Testimonials functionality for PixeLift

document.addEventListener('DOMContentLoaded', function() {
    // Portfolio filtering
    const filterButtons = document.querySelectorAll('.filter-button');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    // Add click event to each filter button
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and add to current
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Get the filter value
            const filterValue = button.getAttribute('data-filter');
            
            // Show/hide portfolio items based on category
            portfolioItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                    // Add a slight delay for a staggered animation effect
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }, 100);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // Testimonials carousel
    const testimonialsTrack = document.querySelector('.testimonials-track');
    const testimonialSlides = document.querySelectorAll('.testimonial-slide');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    const dots = document.querySelectorAll('.carousel-dot');
    
    let currentIndex = 0;
    const slideWidth = 100; // 100% width for each slide
    
    // Initialize carousel
    function updateCarousel() {
        testimonialsTrack.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
        
        // Update dot indicators
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }
    
    // Next slide function
    function nextSlide() {
        currentIndex = (currentIndex + 1) % testimonialSlides.length;
        updateCarousel();
    }
    
    // Previous slide function
    function prevSlide() {
        currentIndex = (currentIndex - 1 + testimonialSlides.length) % testimonialSlides.length;
        updateCarousel();
    }
    
    // Add button event listeners
    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);
    
    // Add dot controls
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel();
        });
    });
    
    // Auto slide every 5 seconds
    const autoSlideInterval = setInterval(nextSlide, 5000);
    
    // Stop auto sliding when user interacts
    const carouselControls = document.querySelector('.carousel-controls');
    carouselControls.addEventListener('mouseenter', () => {
        clearInterval(autoSlideInterval);
    });
    
    // Newsletter form submission
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            
            if (emailInput.value) {
                // In a real application, you would send this to your server
                alert('Thank you for subscribing! You will receive our updates soon.');
                emailInput.value = '';
            }
        });
    }

    // Make the newsletter button submit the form
    const newsletterButton = document.querySelector('.newsletter-button');
    if (newsletterButton) {
        newsletterButton.addEventListener('click', function() {
            const form = this.closest('.newsletter-form');
            if (form) {
                // Trigger form submit event
                const submitEvent = new Event('submit', {
                    bubbles: true,
                    cancelable: true
                });
                form.dispatchEvent(submitEvent);
            }
        });
    }
});
