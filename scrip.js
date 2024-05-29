document.addEventListener('DOMContentLoaded', () => {
    const texts = Array.from(document.querySelectorAll('.text'));
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const startButton = document.getElementById('start');
    let currentIndex = 0;

    function splitText(element) {
        const text = element.textContent.trim();
        element.innerHTML = '';
        text.split('').forEach((char, index) => {
            if (char === ' ') {
                element.innerHTML += '<span>&nbsp;</span>';
            } else {
                element.innerHTML += `<span>${char}</span>`;
            }
            const span = element.querySelectorAll('span')[index];
            span.style.animationDelay = `${index * 0.1}s`;
        });
    }

    texts.forEach(text => {
        splitText(text.querySelector('h1'));
    });

    function showText(index) {
        texts.forEach((text, i) => {
            if (i === index) {
                text.classList.remove('hidden');
                text.querySelectorAll('span').forEach(span => {
                    span.style.animationPlayState = 'running';
                });
            } else {
                text.classList.add('hidden');
            }
        });
        prevButton.style.display = index === 0 ? 'none' : 'inline';
        nextButton.style.display = index === texts.length - 1 ? 'none' : 'inline';
        startButton.style.display = index === texts.length - 1 ? 'inline' : 'none';
    }

    nextButton.addEventListener('click', () => {
        if (currentIndex < texts.length - 1) {
            currentIndex++;
            showText(currentIndex);
        }
    });

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            showText(currentIndex);
        }
    });

    startButton.addEventListener('click', () => {
        window.location.href = 'Pag2/pag2.html'; // Reemplaza 'otro.html' con la URL del archivo HTML de destino
    });

    showText(currentIndex);
});
