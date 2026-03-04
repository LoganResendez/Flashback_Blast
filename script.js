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
        <p>The empire depicted in <i>"Akame ga Kill!"</i> places a child emperor named Makoto on the throne, though he functions merely as a figurehead while Prime Minister Honest exercises real authority. The Minister's corruption and brutality define the Empire's governance, yet the young Emperor remains unaware of the suffering carried out in his name, sincerely believing the state to be just and prosperous. This dynamic closely resembles moments in Chinese history, particularly during the reign of Emperor Ling of Han, when court eunuchs dominated political power, monopolized authority, executed rivals, and extracted wealth from the population. In both cases, the ruler's isolation from reality allowed corruption to flourish unchecked. The Emperor's ignorance is not just naivety, but a structural flaw in which information and authority are filtered through the elite with their interests put first. These patterns reflect broader political themes found in Chinese history, where moral decay at the center of power often signaled the end of a dynasty's legitimacy.</p>
    `);
}

function cc2Go() {
    activateCard(cc2, `
        <p>The empire depicted in <i>"Akame ga Kill!"</i> is tainted by corruption at nearly every level of governance. Nobles and officials alike exploit their positions for personal gain, facing little consequence so long as they remain loyal to the regime. Yet the Empire was not always tyrannical. It was founded by a virtuous and capable emperor who ensured stability and prosperity across the land. Over time, however, centralized power decayed into systemic abuse, creating the conditions for widespread unrest. The emergence of the Revolutionary Army and Night Raid mirrors a recurring pattern in Chinese history, where rebellion often arose in response to administrative corruption, economic suffering, and political neglect. Uprisings such as the Yellow Turban Rebellion, the Red Turban Rebellion, and the An Lushan Rebellion each emerged from systemic instability rather than isolated grievances. In Chinese politics, such widespread disorder signaled that a dynasty had lost the Mandate of Heaven — the moral authority to rule. Similarly, the rebellion in <i>"Akame ga Kill!"</i> can be interpreted as a response to a regime that has forfeited its legitimacy through corruption and injustice.</p>
    `);
}

function cc3Go() {
    activateCard(cc3, `
        <p>The empire depicted in <i>"Akame ga Kill!"</i> is an intensely centralized monarchy structured around rigid hierarchy, bureaucracy, and class stratification. In theory, the Emperor possesses absolute authority and may enact laws at will, though in practice that authority is often manipulated by those surrounding the throne. Bureaucrats and nobles wield considerable influence, yet their power remains subordinate to the sovereign and can be revoked through execution or punishment at any moment. The legal system is severe and frequently designed to deter dissent through public displays of cruelty. Political and economic power is concentrated in the capital, which extracts resources from surrounding provinces to sustain elite interests. This structure closely parallels aspects of several Chinese dynasties, particularly the Qin and early Ming. The Qin dynasty, guided by Legalist principles built by figures such as Shang Yang and Li Si, centralized authority, standardized administration, and employed harsh punishments to enforce order. Similarly, the early Ming period under the Hongwu Emperor concentrated power directly in the hands of the emperor and maintained strict oversight over officials, at times enforcing discipline through scoldings and beating. Although the Ming abolished the formal position of prime minister, the broader pattern of extreme centralization and bureaucracy reflects the political system in <i>"Akame ga Kill!"</i></p>
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