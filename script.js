// script.js

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile menu functionality
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    // Toggle the active class for the menu and button
    mobileMenuBtn.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuBtn.classList.remove('active');
        navLinks.classList.remove('active');
    });
});


// CTA Button hover and click effects
const button = document.querySelector('.cta-button');
button.addEventListener('mouseenter', () => {
    button.style.transform = 'translateY(-3px)';
});

button.addEventListener('mouseleave', () => {
    button.style.transform = 'translateY(0)';
});

button.addEventListener('click', () => {
    button.style.transform = 'translateY(1px)';
    setTimeout(() => {
        button.style.transform = 'translateY(0)';
    }, 100);
});

// Slider Configuration
const sliderConfig = {
    slidesToShow: 4,
    autoplaySpeed: 4000,
    transitionSpeed: 500,
    breakpoints: {
        600: 1,
        900: 2,
        1200: 3
    }
};

// Initialize slider
function initializeSlider() {
    const slider = document.querySelector('.slider');
    const imagePaths = Array.from({ length: 50 }, (_, i) => ({
        src: `/api/placeholder/800/600`,
        alt: `Masjid View ${i + 1}`
    }));
    
    // Clear loading message
    slider.innerHTML = '';
    
    // Create slides
    imagePaths.forEach((image, index) => {
        const slide = document.createElement('div');
        slide.className = 'slide';
        
        const img = document.createElement('img');
        img.src = image.src;
        img.alt = image.alt;
        img.loading = 'lazy';
        
        slide.appendChild(img);
        slider.appendChild(slide);
    });
    
    return {
        slider,
        slides: document.querySelectorAll('.slide')
    };
}

// Slider functionality
function setupSlider() {
    const { slider, slides } = initializeSlider();
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    
    let currentSlide = 0;
    let slidesPerView = sliderConfig.slidesToShow;
    let isTransitioning = false;
    let autoSlideInterval;
    let touchStartX = 0;
    let touchEndX = 0;
    
    // Update slides per view based on screen size
    function updateSlidesPerView() {
        const width = window.innerWidth;
        for (const [breakpoint, slides] of Object.entries(sliderConfig.breakpoints)) {
            if (width <= parseInt(breakpoint)) {
                slidesPerView = slides;
                return;
            }
        }
        slidesPerView = sliderConfig.slidesToShow;
    }
    
    function goToSlide(index) {
        if (isTransitioning) return;
        isTransitioning = true;
        
        currentSlide = index;
        const slideWidth = slides[0].offsetWidth + parseFloat(getComputedStyle(slides[0]).marginRight);
        slider.style.transform = `translateX(-${slideWidth * currentSlide}px)`;
        
        setTimeout(() => {
            isTransitioning = false;
        }, sliderConfig.transitionSpeed);
    }
    
    function nextSlide() {
        const maxSlides = slides.length - slidesPerView;
        currentSlide = currentSlide >= maxSlides ? 0 : currentSlide + 1;
        goToSlide(currentSlide);
    }
    
    function prevSlide() {
        const maxSlides = slides.length - slidesPerView;
        currentSlide = currentSlide <= 0 ? maxSlides : currentSlide - 1;
        goToSlide(currentSlide);
    }
    
    // Auto slide functionality
    function startAutoSlide() {
        stopAutoSlide();
        autoSlideInterval = setInterval(nextSlide, sliderConfig.autoplaySpeed);
    }
    
    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }
    
    // Touch events for mobile
    slider.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
        stopAutoSlide();
    }, { passive: true });

    slider.addEventListener('touchmove', (e) => {
        touchEndX = e.touches[0].clientX;
    }, { passive: true });

    slider.addEventListener('touchend', () => {
        const difference = touchStartX - touchEndX;
        if (Math.abs(difference) > 50) { // minimum swipe distance
            if (difference > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        }
        startAutoSlide();
    });
    
    // Event listeners
    prevBtn.addEventListener('click', () => {
        prevSlide();
        stopAutoSlide();
        startAutoSlide();
    });
    
    nextBtn.addEventListener('click', () => {
        nextSlide();
        stopAutoSlide();
        startAutoSlide();
    });
    
    slider.addEventListener('mouseenter', stopAutoSlide);
    slider.addEventListener('mouseleave', startAutoSlide);
    
    // Handle window resize
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            updateSlidesPerView();
            goToSlide(currentSlide);
        }, 250);
    });
    
    // Initial setup
    updateSlidesPerView();
    setTimeout(startAutoSlide, 1000);
}

// Initialize the slider when the DOM is ready
document.addEventListener('DOMContentLoaded', setupSlider);
