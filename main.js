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
    },
    {
        name: "Satya Nadella",
        bio: "CEO da Microsoft",
        photo: "https://upload.wikimedia.org/wikipedia/commons/7/76/Satya_Nadella.jpg",
        talk: "Transformação Digital e Computação em Nuvem",
        details: "O líder da Microsoft discutirá como a nuvem está revolucionando os negócios e a importância da transformação digital nas organizações."
    },
    {
        name: "Jensen Huang",
        bio: "CEO da NVIDIA",
        photo: "https://upload.wikimedia.org/wikipedia/commons/2/21/Jensen_Huang_-_GTC_Keynote_-_March_2018.jpg",
        talk: "O Futuro da Computação Gráfica e IA",
        details: "O visionário por trás das GPUs modernas falará sobre como a computação acelerada está impulsionando a próxima geração de inteligência artificial."
    },
    {
        name: "Grace Hopper",
        bio: "Pioneira da Computação (homenagem póstuma)",
        photo: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Commodore_Grace_M._Hopper%2C_USN_%28covered%29.jpg",
        talk: "Mulheres na Computação: Legado e Futuro",
        details: "Sessão especial sobre o impacto das mulheres na tecnologia, com ênfase no trabalho revolucionário de Hopper no desenvolvimento de compiladores."
    },
    {
        name: "Vint Cerf",
        bio: "Pai da Internet",
        photo: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Vint_Cerf_%2830091470263%29.jpg",
        talk: "Os Próximos 50 Anos da Internet",
        details: "Um dos criadores dos protocolos TCP/IP compartilha sua visão para o futuro da conectividade global e desafios de segurança digital."
    },
    {
        name: "Fei-Fei Li",
        bio: "Co-Diretora do Stanford Human-Centered AI Institute",
        photo: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Fei-Fei_Li_2015.jpg",
        talk: "IA Humanizada: Ética e Aplicações",
        details: "A renomada pesquisadora de IA discute como desenvolver sistemas de inteligência artificial que beneficiem verdadeiramente a humanidade."
    },
    {
        name: "Guido van Rossum",
        bio: "Criador da Linguagem Python",
        photo: "https://upload.wikimedia.org/wikipedia/commons/6/66/Guido_van_Rossum_OSCON_2006.jpg",
        talk: "Python: Passado, Presente e Futuro",
        details: "O criador da linguagem Python compartilha histórias sobre sua criação e como vê a evolução da linguagem mais popular do mundo."
    },
    {
        name: "Shirin Neshat",
        bio: "Artista Digital e Ativista",
        photo: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Shirin_Neshat_2015.jpg",
        talk: "Arte e Tecnologia: Novas Formas de Expressão",
        details: "A artista explora como a tecnologia está transformando a criação artística e a expressão cultural na era digital."
    },
    {
        name: "Elon Musk",
        bio: "CEO da Tesla e SpaceX",
        photo: "https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg",
        talk: "Inovação Radical e Futuro da Humanidade",
        details: "O empreendedor visionário discute suas perspectivas sobre inteligência artificial, energia sustentável e colonização espacial."
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


// Menu Mobile
function setupMobileMenu() {
    const mobileBtn = document.createElement('button');
    mobileBtn.className = 'mobile-menu-btn';
    mobileBtn.innerHTML = '☰';
    mobileBtn.addEventListener('click', () => {
        document.querySelector('nav').classList.toggle('active');
    });
    
    const header = document.querySelector('header');
    header.insertBefore(mobileBtn, header.querySelector('nav'));
}

// Loading do Mapa
function setupMapLoading() {
    const mapContainer = document.querySelector('#location');
    const iframe = mapContainer.querySelector('iframe');
    const loadingDiv = document.createElement('div');
    loadingDiv.className = 'map-loading';
    loadingDiv.innerHTML = '<div class="spinner"></div>';
    
    mapContainer.insertBefore(loadingDiv, iframe);
    
    iframe.addEventListener('load', () => {
        loadingDiv.style.display = 'none';
    });
}
