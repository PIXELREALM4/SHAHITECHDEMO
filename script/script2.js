const sliderContainer = document.querySelector('.slider-container');
let currentIndex = 0;
let isAnimating = false; // Add a flag to prevent rapid clicking

function goToSlide(index) {
    currentIndex = index;
    const translateValue = -index * 100;
    sliderContainer.style.transform = `translateX(${translateValue}%)`;
}

function nextSlide() {
    if (!isAnimating) {
        isAnimating = true;
        if (currentIndex < 3) {
            goToSlide(currentIndex + 1);
        } else {
            goToSlide(0); // If at the end, go back to the first slide
        }
        setTimeout(() => {
            isAnimating = false;
        }, 500); // Adjust the timeout to match your animation duration
    }
}

function prevSlide() {
    if (!isAnimating) {
        isAnimating = true;
        if (currentIndex > 0) {
            goToSlide(currentIndex - 1);
        } else {
            goToSlide(3); // If at the beginning, go to the last slide
        }
        setTimeout(() => {
            isAnimating = false;
        }, 500); // Adjust the timeout to match your animation duration
    }
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
        nextSlide();
    } else if (e.key === 'ArrowLeft') {
        prevSlide();
    }
});

setInterval(nextSlide, 10000); // Automatically advance the slider every 5 seconds

goToSlide(0); // Start with the first slide

// ... (remaining code) ...

