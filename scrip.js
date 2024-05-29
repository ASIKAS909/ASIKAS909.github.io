document.addEventListener('DOMContentLoaded', () => {
    const texts = Array.from(document.querySelectorAll('.text'));
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const startButton = document.getElementById('start');
    let currentIndex = 0;

    function splitText(element) {
        const paragraphs = element.querySelectorAll('h1');
        paragraphs.forEach(paragraph => {
            const words = paragraph.textContent.trim().split(' ');
            paragraph.innerHTML = '';
            words.forEach((word, index) => {
                const span = document.createElement('span');
                span.textContent = word;
                paragraph.appendChild(span);
                if (index < words.length - 1) {
                    paragraph.appendChild(document.createTextNode(' '));
                }
            });
        });
    }
    

    texts.forEach(text => {
        splitText(text);
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
        window.location.href = 'Pag2/pag.html'; // Reemplaza 'otro.html' con la URL del archivo HTML de destino
    });

    showText(currentIndex);
});
