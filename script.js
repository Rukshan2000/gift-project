function blowOutCandles() {
    const flames = document.querySelectorAll('.flame');
    
    // Blow out the candles one by one with a delay
    let delay = 0;
    flames.forEach((flame, index) => {
      setTimeout(() => {
        flame.style.animation = 'none';
        flame.style.opacity = '0';
      }, delay);
      delay += 1000; // Add 1-second delay for each candle
    });
  
    // After 5 seconds, trigger confetti and redirect
    setTimeout(() => {
      // Redirect to confetti.html after 5 seconds
      window.location.href = 'confetti.html';
    }, 5000); // 5000ms = 5 seconds
  }
  
