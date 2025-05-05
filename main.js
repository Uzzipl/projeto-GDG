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

