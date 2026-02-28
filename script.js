// Concepts
const cc1 = document.querySelector("#cc1");
const cc2 = document.querySelector("#cc2");
const cc3 = document.querySelector("#cc3");
const concept_Info = document.querySelector("#conceptInfo")
let activeCard = null;
let isAnimating = false;

function activateCard(card, newContent) {

    if (isAnimating) return;
    isAnimating = true;

    // SAME CARD → CLOSE
    if (activeCard === card) {

        card.classList.remove("active");
        [cc1, cc2, cc3].forEach(c => c.classList.remove("hide-card"));

        concept_Info.classList.remove("concept-show");
        concept_Info.classList.add("concept-hide");

        setTimeout(() => {
            concept_Info.classList.remove("concept-hide");
            concept_Info.style.transform = "translateX(-100vw)";
            concept_Info.style.opacity = "0";
            concept_Info.innerHTML = "";

            activeCard = null;
            isAnimating = false;
        }, 500);

        return;
    }

    // RESET CARDS
    [cc1, cc2, cc3].forEach(c => {
        c.classList.remove("active", "hide-card");
    });

    card.classList.add("active");

    if (window.innerWidth <= 1100) {
        [cc1, cc2, cc3].forEach(c => {
            if (c !== card) c.classList.add("hide-card");
        });
    }

    // SWITCHING
    if (activeCard !== null) {

        concept_Info.classList.remove("concept-show");
        concept_Info.classList.add("concept-hide");

        setTimeout(() => {
            concept_Info.innerHTML = newContent;
            concept_Info.classList.remove("concept-hide");

            concept_Info.offsetHeight; // force reflow
            concept_Info.classList.add("concept-show");

            isAnimating = false;
        }, 500);

    } else {
        // FIRST OPEN
        concept_Info.innerHTML = newContent;

        concept_Info.offsetHeight;
        concept_Info.classList.add("concept-show");

        isAnimating = false;
    }

    activeCard = card;
}

function cc1Go() {
    activateCard(cc1, `
        <p>The empire focused on in Akame Ga Kill seats a child emperor, Makoto, on the throne. The Emperor is only a figurehead though, behind the scenes the Prime Minister, Honest, has complete control over the empire. Not only does he possess overwhelming power in the empire, but he is a horribly corrupt and evil human who many wish was dead. The very same situation can be observed throughout Chinese history, such as Emperor Ling of Han and King Zheng of Qin. In the case of Emperor Ling of the Han Dynasty, it was a group of eunuchs who controlled the state and ruled with an iron fist, monopolizing power, executing innocents, and extracting wealth from the people. It is all the more noteworthy that Makoto did not believe the empire was corrupt, and genuinely though it was thriving and embodying justice. If not for the success of the rebellion he would have surely gone on to become as vile and misguided as the Minister, just  as Emperor Ling himself followed in the steps of the eunuchs. The parallels between Makoto's situation and that of various different emperors of China lead me to believe that the creator drew inspiration from history</p>
    `);
}

function cc2Go() {
    activateCard(cc2, `
        rebellion is no bueno
    `);
}

function cc3Go() {
    activateCard(cc3, `
        Heaven is present in Black Myth Wukong
    `);
}

// Slideshow
const slidesData = [
    {
        image: "Images/nightRaid1.jpg",
        alt: "Night Raid",
        description: "Night Raid is a group of assassins that are publicly enemies of the empire, taking out corrupt officials and elites in an effort to weaken their hold. "
    },
    {
        image: "Images/revolutionaries.webp",
        alt: "The Revolutionary Army",
        description: "The revolutionary army works in tandem with Night Raid to oppose the empire and install a new government. "
    },
    {
        image: "Images/emperorAndMinister1.jpeg",
        alt: "The Child Emperor and the Minister",
        description: "The emperor is a nominal ruler, a mere puppet to the vile minister. "
    },
    {
        image: "Images/celestialCourt.jpg",
        alt: "Slide 3",
        description: "This image shows Sun Wukong standing off against the Celestial Court, which is awfully similar to the bureaucracy of China. The strict hierarchy, ranked officials, and system of punishments and promotions function the same as many of the more centralized dynasties of China."
    }
];

const visuals = document.querySelector("#visuals");
const container = document.querySelector(".slides-container");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const caption = document.querySelector(".caption");

let currentIndex = 0;

/* Generate slides */
slidesData.forEach((slide, index) => {
    const slideDiv = document.createElement("div");
    slideDiv.classList.add("slide");

    if (index === 0) slideDiv.classList.add("active");

    slideDiv.innerHTML = `
        <img src="${slide.image}" alt="${slide.alt}">
    `;

    container.appendChild(slideDiv);
});

const slides = document.querySelectorAll(".slide");
caption.textContent = slidesData[0].description;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");

    caption.textContent = slidesData[index].description;
}

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
});

prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
});