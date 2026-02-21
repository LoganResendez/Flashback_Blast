const slidesData = [
    {
        image: "Images/buddhaEyes.webp",
        alt: "Slide 1",
        description: "In this image is the head of a Buddha statue."
    },
    {
        image: "Images/cyanLoong.avif",
        alt: "Slide 2",
        description: "In class, we learned that the dragon was a symbol of the emperor—or in other words—power. Dragons are a prominent and a relatively common boss fight in this game, showing their power and royal might throughout."
    },
    {
        image: "Images/celestialCourt.jpg",
        alt: "Slide 3",
        description: "This image shows Sun Wukong standing off against the Celestial Court, which is awfully similar to the bureaucracy of China. The strict hierarchy, ranked officials, and system of punishments and promotions function the same as many of the more centralized dynasties of China."
    }
];

const container = document.querySelector(".slides-container");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentIndex = 0;

/* Generate slides */
slidesData.forEach((slide, index) => {
    const slideDiv = document.createElement("div");
    slideDiv.classList.add("slide");

    if (index === 0) slideDiv.classList.add("active");

    slideDiv.innerHTML = `
        <img src="${slide.image}" alt="${slide.alt}">
        <p class="caption">${slide.description}</p>
    `;

    container.appendChild(slideDiv);
});

const slides = document.querySelectorAll(".slide");

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
}

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
});

prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
});