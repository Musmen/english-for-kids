import successSound from '../assets/audio/success.mp3';
import correctSound from '../assets/audio/correct.mp3';

// import CARDS_DATA from './data/cards';

const mainPage = () => {
  // const
  // const mainPageCardsList = new MainPageCardsList();

  // const cardsListElement = document.querySelector('.cards__list');
  // cardsListElement.classList.toggle('cards__list_main-page');
  // const cardTemplate = document.querySelector('#cardTemplate');
  // const cardsListFragment = document.createDocumentFragment();

  // CARDS_DATA[4].forEach((card) => {
  //   const newCardElement = cardTemplate.content.cloneNode(true);

  //   const cardsLinkElement = newCardElement.querySelector('.card__link');
  //   const cardWordElements = newCardElement.querySelectorAll('.card__word');
  //   const cardTranslationElements = newCardElement.querySelectorAll('.card__translation');
  //   const cardImageElements = newCardElement.querySelectorAll('.card__image');
  //   // const cardAudioElements = newCardElement.querySelectorAll('.card__audio');

  //   const audio = new Audio(`./../app-data/${card.audioSrc}`);
  //   cardsLinkElement.onclick = () => {
  //     audio.play();
  //     return false;
  //   };

  //   cardWordElements.forEach((cardWordElement, index) => {
  //     cardWordElement.innerText = card.word;
  //     cardTranslationElements[index].innerText = card.translation;
  //     cardImageElements[index].src = `./../app-data/${card.image}`;
  //   });

  //   cardsListFragment.append(newCardElement);
  // });

  // cardsListElement.append(cardsListFragment);

  const successButton = document.querySelector('#successButton');
  const audioSuccess = new Audio(successSound);
  const correctButton = document.querySelector('#correctButton');
  const audioCorrect = new Audio(correctSound);

  successButton.onclick = () => {
    audioSuccess.play();
  };
  correctButton.onclick = () => {
    audioCorrect.play();
  };
};

export default mainPage;
