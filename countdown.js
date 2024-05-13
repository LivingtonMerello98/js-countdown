'use strict'


// Funzione per avviare il countdown
function startCountdown() {
    let seconds = 10;
    const countdownInterval = setInterval(function() {
      seconds--;

      if (seconds < 0) {
        clearInterval(countdownInterval);
        alert('Buon anno!');
      }
    }, 1000);
  }

  // Avvia il countdown quando la pagina è pronta
  document.addEventListener('DOMContentLoaded', startCountdown);