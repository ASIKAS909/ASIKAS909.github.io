
document.addEventListener('DOMContentLoaded', function() {
    const targetNumber = '123456789'; // El número telefónico a adivinar
    const form = document.getElementById('guessForm');
    const input = document.getElementById('guessInput');
    const hint = document.getElementById('hint');
    const playButton = document.getElementById('playButton');
    const backgroundMusic = document.getElementById('backgroundMusic');
    const successVideo = document.getElementById('successVideo');
    const backButton = document.getElementById('backButton'); // Obtenemos el botón "REGRESAR"

    playButton.addEventListener('click', function() {
        if (backgroundMusic.paused || backgroundMusic.ended) {
            backgroundMusic.play();
            playButton.textContent = 'Pause Music';
        } else {
            backgroundMusic.pause();
            playButton.textContent = 'Play Music';
        }
    });

    backgroundMusic.addEventListener('ended', function() {
        playButton.textContent = 'Play Music';
    });

    input.addEventListener('input', function() {
        if (this.value.length > 0) {
            this.classList.add('has-content');
        } else {
            this.classList.remove('has-content');
        }
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const guess = input.value;
        if (guess.length !== 9 || !/^\d{9}$/.test(guess)) {
            hint.textContent = 'Por favor, introduce un número de 9 dígitos válido.';
            return;
        }

        let correctPositions = 0;
        let hintHtml = '';

        for (let i = 0; i < 9; i++) {
            if (guess[i] === targetNumber[i]) {
                correctPositions++;
                hintHtml += `<span class="correct"><img class="icon" src="Img/Bien.png" alt="Correcto"> ${guess[i]}</span>`;
            }
            else {
                hintHtml += `<span class="incorrect"><img class="icon" src="Img/Mal.png" alt="Incorrecto"> ${guess[i]}</span>`;
            }
        }

        if (correctPositions === 9) {
            hint.innerHTML = '¡Felicidades! Adivinaste el número correctamente.';
            successGif.style.display = 'block';
        } else {
            hint.innerHTML = `Tienes ${correctPositions} dígitos en la posición correcta:<br>${hintHtml}`;
            successVideo.style.display = 'none';
        }
    });
});
