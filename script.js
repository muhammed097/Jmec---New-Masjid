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
    const imagePaths = [
        { src: 'assets/images/Masjid%20-%201.webp', alt: 'Masjid View 1' },
   { src: 'assets/images/Masjid%20-%202.webp', alt: 'Masjid View 2' },
   { src: 'assets/images/Masjid%20-%203.webp', alt: 'Masjid View 3' },
   { src: 'assets/images/Masjid%20-%204.webp', alt: 'Masjid View 4' },
   { src: 'assets/images/Masjid%20-%205.webp', alt: 'Masjid View 5' },
   { src: 'assets/images/Masjid%20-%206.webp', alt: 'Masjid View 6' },
   { src: 'assets/images/Masjid%20-%207.webp', alt: 'Masjid View 7' },
   { src: 'assets/images/Masjid%20-%208.webp', alt: 'Masjid View 8' },
   { src: 'assets/images/Masjid%20-%209.webp', alt: 'Masjid View 9' },
   { src: 'assets/images/Masjid%20-%2010.webp', alt: 'Masjid View 10' },
   { src: 'assets/images/Masjid%20-%2011.webp', alt: 'Masjid View 11' },
   { src: 'assets/images/Masjid%20-%2012.webp', alt: 'Masjid View 12' },
   { src: 'assets/images/Masjid%20-%2013.webp', alt: 'Masjid View 13' },
   { src: 'assets/images/Masjid%20-%2014.webp', alt: 'Masjid View 14' },
   { src: 'assets/images/Masjid%20-%2015.webp', alt: 'Masjid View 15' },
   { src: 'assets/images/Masjid%20-%2016.webp', alt: 'Masjid View 16' },
   { src: 'assets/images/Masjid%20-%2017.webp', alt: 'Masjid View 17' },
   { src: 'assets/images/Masjid%20-%2018.webp', alt: 'Masjid View 18' },
   { src: 'assets/images/Masjid%20-%2019.webp', alt: 'Masjid View 19' },
   { src: 'assets/images/Masjid%20-%2020.webp', alt: 'Masjid View 20' },
   { src: 'assets/images/Masjid%20-%2021.webp', alt: 'Masjid View 21' },
   { src: 'assets/images/Masjid%20-%2022.webp', alt: 'Masjid View 22' },
   { src: 'assets/images/Masjid%20-%2023.webp', alt: 'Masjid View 23' },
   { src: 'assets/images/Masjid%20-%2024.webp', alt: 'Masjid View 24' },
   { src: 'assets/images/Masjid%20-%2025.webp', alt: 'Masjid View 25' },
   { src: 'assets/images/Masjid%20-%2026.webp', alt: 'Masjid View 26' },
   { src: 'assets/images/Masjid%20-%2027.webp', alt: 'Masjid View 27' },
   { src: 'assets/images/Masjid%20-%2028.webp', alt: 'Masjid View 28' },
   { src: 'assets/images/Masjid%20-%2029.webp', alt: 'Masjid View 29' },
   { src: 'assets/images/Masjid%20-%2030.webp', alt: 'Masjid View 30' },
   { src: 'assets/images/Masjid%20-%2031.webp', alt: 'Masjid View 31' },
   { src: 'assets/images/Masjid%20-%2032.webp', alt: 'Masjid View 32' },
   { src: 'assets/images/Masjid%20-%2033.webp', alt: 'Masjid View 33' },
   { src: 'assets/images/Masjid%20-%2034.webp', alt: 'Masjid View 34' },
   { src: 'assets/images/Masjid%20-%2035.webp', alt: 'Masjid View 35' },
   { src: 'assets/images/Masjid%20-%2036.webp', alt: 'Masjid View 36' },
   { src: 'assets/images/Masjid%20-%2037.webp', alt: 'Masjid View 37' },
   { src: 'assets/images/Masjid%20-%2038.webp', alt: 'Masjid View 38' },
   { src: 'assets/images/Masjid%20-%2039.webp', alt: 'Masjid View 39' },
   { src: 'assets/images/Masjid%20-%2040.webp', alt: 'Masjid View 40' }
     ];
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
