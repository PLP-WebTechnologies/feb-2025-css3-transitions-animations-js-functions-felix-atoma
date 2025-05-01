document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('animateBtn');
    const message = document.getElementById('message');
  
    // Load preference
    const savedMsg = localStorage.getItem('userMessage');
    if (savedMsg) {
      message.textContent = savedMsg;
    }
  
    button.addEventListener('click', () => {
      const text = "Thanks for clicking! Your preference has been saved.";
      message.textContent = text;
      localStorage.setItem('userMessage', text);
      button.classList.add('clicked');
      setTimeout(() => button.classList.remove('clicked'), 500);
    });
  });