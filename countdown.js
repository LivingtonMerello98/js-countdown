'use strict'


// Funzione per avviare il countdown
function startCountdown() {
  let seconds = 10;
  const countdownDiv = document.getElementById('countdown');
  const countdownInterval = setInterval(function() {

    //conto alla rovescia su schermo
    countdownDiv.innerText = seconds;
    seconds--;

    if (seconds < 0) {
      clearInterval(countdownInterval);
      countdownDiv.innerText = 'Buon anno!';
      alert('Buon anno!');
    }
  }, 1000);

  // Aggiunge evento click al bottone per interrompere il countdown
  document.getElementById('stopButton').addEventListener('click', function() {
    clearInterval(countdownInterval);
    countdownDiv.innerText = 'Countdown interrotto';
  });
}

// Avvia il countdown quando la pagina è pronta
document.addEventListener('DOMContentLoaded', startCountdown);


