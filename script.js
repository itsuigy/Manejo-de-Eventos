function showMessage(message) {
    alert(message);
  }

  function toggleScrollEvents() {
    const scrollButtons = document.querySelectorAll('.scroll-button');

    for (const button of scrollButtons) {
      button.style.display = (button.style.display === 'none' || button.style.display === '') ? 'block' : 'none';
    }
  }

  function scrollPage(amount) {
    window.scrollBy(0, amount);
  }

  function github() {
    window.open('https://github.com/itsuigy/Manejo-de-Eventos');
}