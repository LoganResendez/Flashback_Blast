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
        <p>The empire focused on in Akame Ga Kill seats a child emperor, Makoto, on the throne. The Emperor is only a figurehead though, behind the scenes Prime Minister Honest has complete control over the Empire. Not only does he possess overwhelming power in the Empire, but he is a horribly corrupt and evil human who many wish was dead. The very same situation can be observed throughout Chinese history, such as Emperor Ling of Han and King Zheng of Qin. In the case of Emperor Ling of the Han Dynasty, it was a group of eunuchs who controlled the state and ruled with an iron fist, monopolizing power, executing innocents, and extracting wealth from the people. It is all the more noteworthy that Makoto did not believe the Empire was corrupt, and genuinely though it was thriving and embodying justice. If not for the success of the rebellion he would have surely gone on to become as vile and misguided as the Minister, just as Emperor Ling himself followed in the steps of the eunuchs. The parallels between Makoto's situation and that of various different emperors of China lead me to believe that the creator drew inspiration from Chinese history.</p>
    `);
}

function cc2Go() {
    activateCard(cc2, `
        <p>The empire focused on in Akame Ga Kill is rotted with corruption at all levels of government, even politically unaffiliated noblemen get away with virtually anything so long as they don't oppose the Empire.This was no always the case though. When this regime first came to power it was ruled by a virtuous and heroic emperor. The first emperor was beloved, ensuring the safety and prosperity of the upper, middle, and lower classes. Naturally, as the Empire descended into tyranny, a rebellion was ignited with the revolutionary army and Night Raid. The notion of overthrowing a corrupt regime is extremely prevalent throughout all of Chinese History, this is how nearly every dynasty came to an end. To be more specific, the Yellow Turban Rebellion, Red Turban Rebellion, and An Lushan Rebellion are rooted in the same systemic issues as the one in Akame Ga Kill. The Yellow Turban Rebellion was mostly executed by farmers and peasants, infuriated by the Han Dynasty's taxation and negligence to famine and economic issues. The reasoning behind the revolution in Akame Ga Kill is actually very similar to the Mandate of Heaven. Emperor Makoto could be said to have lost the mandate, and for that, he was destined by the heavens to be overthrown.</p>
    `);
}

function cc3Go() {
    activateCard(cc3, `
        <p>The empire focused on in Akame Ga Kill is an incredibly centralized power built on monarchy, bureaucracy, and the class system. The emperor holds absolute power (<i>or at least they're supposed to)</i>) and passes whatever legislation they desire. Bureaucrats and noblemen also have tremendous power, but they fall direly short of the Emperor and are frequently executed, beaten, and threatened. Laws put into practice by the Emperor are often cruel and designed to make an example out of treasonous rebels. The Empire's power is pretty much completely centralized in the capital, using the wealth and resources of villages and cities outside of it to fuel the desires of the "most important" people. This system of a centralized state a with harsh legal code and elite bureaucrats functions very similar to many of the dynasties throughout Chinese history, especially the Qin and early Ming. The legalist system of the Qin Dynasty utilized fear as an instrument of order the same way that the empire of Akame Ga Kill does. The early Ming Dynasty was extremely centralized and kept all the power with the Emperor, the Hongwu Emperor was even known to scold and beat officials. Although not entirely aligned with the empire of Akame Ga Kill as the early Ming got rid of the position of prime minister, the sentiment is still the same and is an interesting parallel.</p>
    `);
}

// Slideshow
const slidesData = [
    {
        image: "Images/nightRaid1.jpg",
        alt: "Night Raid",
        description: "Night Raid is a group of assassins that are publicly enemies of the Empire, taking out corrupt officials and elites in an effort to weaken their hold. This covert organization of the Revolutionary Army is made up of highly skilled Imperial Arms users who have been tormented by the Empire their whole lives, and are the #1 target of the Minister and his forces. "
    },
    {
        image: "Images/revolutionaries.webp",
        alt: "The Revolutionary Army",
        description: "The revolutionary army works in tandem with Night Raid to oppose the Empire and install a new government. They are the face of the revolution while Night Raid works in the shadows, not showing relation to them to the public. Although many sympathize with their efforts, most are too scared to join."
    },
    {
        image: "Images/empVsRev.jpg",
        alt: "The Jaegers and Night Raid",
        description: "The Jaegers are an elite force established by the Emperor and commanded by General Esdeath with the sole goal of wiping out Night Raid. Like Night Raid, each member has an Imperial Arms and fueled by their own sense of justice. General Esdeath is considered the strongest, most capable person in the empire and subjugates the innocent on behalf of the Minister for her own pleasure."
    },
    {
        image: "Images/emperorAndMinister1.jpeg",
        alt: "The Child Emperor and the Minister",
        description: "Emperor Makoto and Prime Minister Honest, a relationship between a puppet and puppeteer. The vile minister has absolute power while Makoto acts as a nominal ruler. Put on the thrown by the Minister at a very young age, he has been raised to obey his every word and have absolute trust in his judgement. Makoto seeks validation for his every action from the Minister, and hardly recognizes the true state of the Empire."
    },
    {
        image: "Images/capital.webp",
        alt: "The Royal Capital",
        description: "The Royal Capital is the backbone of the Empire, infested with the imperial guard and scummy bureaucrats. The wealthy folks of the capital are prosperous, while the working class struggle to get by and are treated like cattle. Even worse off are those of rural villages, neglected and abandoned by the elite and yet still taxed to the point where they earn no profit."
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