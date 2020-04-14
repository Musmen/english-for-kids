const categoryPage = () => {
  const cardsListElement = document.querySelector('.cards__container');

  const rotateButton = document.querySelector('#rotateButton');
  rotateButton.onclick = () => {
    cardsListElement.classList.toggle('rotate');
  };

  // const switcher = document.querySelector('.onoffswitch-checkbox');
  // switcher.addEventListener('change', () => {
  //   cardsListElement.classList.toggle('rotate');
  // });
};

export default categoryPage;
