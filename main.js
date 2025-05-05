// Animação do Terminal
const messages = ['print("Hello World")', 'print("Hello GDG")', 'Press any key to start...'];
let index = 0;
const terminalContent = document.getElementById('terminal-content');

function typeWriter(text, i = 0) {
    if (i < text.length) {
        terminalContent.innerHTML = text.substring(0, i+1);
        setTimeout(() => typeWriter(text, i+1), 100);
    } else {
        index++;
        if (index < messages.length) {
            setTimeout(() => typeWriter(messages[index]), 1000);
        }
    }
}

// Evento para entrar na Home
function enterSite() {
    document.getElementById('terminal-animation').remove();
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById('home').classList.add('active');
}

// Alternar Tema
document.getElementById('theme-toggle').addEventListener('click', () => {
    const currentTheme = document.body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.body.setAttribute('data-theme', newTheme);
});

// Palestrantes
const speakers = [
    {
        name: "Linus Torvalds",
        bio: "Criador do Linux e Git",
        photo: "https://upload.wikimedia.org/wikipedia/commons/0/01/LinuxCon_Europe_Linus_Torvalds_03_%28cropped%29.jpg",
        talk: "O futuro dos sistemas open-source",
        details: "Pioneiro no desenvolvimento de sistemas open-source, Linus compartilhará sua visão sobre o futuro do desenvolvimento colaborativo e como o Linux continua a evoluir."
    },
    {
        name: "Tim Berners-Lee",
        bio: "Inventor da World Wide Web",
        photo: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Sir_Tim_Berners-Lee_%28cropped%29.jpg",
        talk: "Web 3.0 e o futuro da internet",
        details: "O pai da web discute os próximos passos na evolução da internet, os desafios de privacidade e sua visão para uma web mais descentralizada."
    },
    {
        name: "Sundar Pichai",
        bio: "CEO do Google e Alphabet",
        photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Sundar_pichai.png/640px-Sundar_pichai.png",
        talk: "Inteligência Artificial e o futuro do Google",
        details: "O líder do Google compartilha como a IA está moldando os produtos do Google e o que esperar nos próximos anos de inovação tecnológica."
    }
    
];
function createSpeakerCard(speaker) {
    const card = document.createElement('div');
    card.className = 'speaker-card';
    card.innerHTML = `
        <h3>${speaker.name}</h3>
        <p>${speaker.bio}</p>
        <p><strong>Palestra:</strong> ${speaker.talk}</p>
    `;
    card.addEventListener('click', () => showSpeakerDetails(speaker));
    return card;
}

// função showSpeakerDetails
function showSpeakerDetails(speaker) {
    const detail = document.createElement('div');
    detail.className = 'speaker-detail';
    detail.innerHTML = `
        <div class="speaker-content">
            <button class="close-btn">×</button>
            <img src="${speaker.photo}" alt="${speaker.name}">
            <h2>${speaker.name}</h2>
            <p class="speaker-bio">${speaker.bio}</p>
            <h3>Palestra: ${speaker.talk}</h3>
            <p class="speaker-details">${speaker.details}</p>
        </div>
    `;
    
    detail.querySelector('.close-btn').addEventListener('click', () => {
        detail.remove();
    });
    
    document.body.appendChild(detail);
    setTimeout(() => detail.classList.add('active'), 10);
}


// Inicialização 
document.addEventListener('DOMContentLoaded', () => {
    typeWriter(messages[0]);
    document.addEventListener('keypress', enterSite);
    document.addEventListener('click', enterSite);
    
    const speakersContainer = document.getElementById('speakers-container');
    speakers.forEach(speaker => {
        speakersContainer.appendChild(createSpeakerCard(speaker));
    });
    
    setupMobileMenu();
    setupMapLoading();
});

