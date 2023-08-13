const carousel = document.querySelector('.carousel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const slides = document.querySelectorAll('.carousel-slide');

let currentIndex = 0;

function goToSlide(index) {
    carousel.style.transform = `translateX(-${index * 100}%)`;
    currentIndex = index;
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    goToSlide(currentIndex);
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    goToSlide(currentIndex);
});

// Initial slide display
goToSlide(currentIndex);


    // Function to scroll to the "Solar Solution" section
    function scrollToSolarSolution() {
        const solarSolutionSection = document.getElementById('solar-solution');
        solarSolutionSection.scrollIntoView({ behavior: 'smooth' });
    }

    function scrolToSolarSolution() {
        const solarSolutionSection = document.getElementById('bk');
        solarSolutionSection.scrollIntoView({ behavior: 'smooth' });
    }

