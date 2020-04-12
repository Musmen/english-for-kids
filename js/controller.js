import CARDS_DATA from './data/cards';
import { CLASS_NAMES } from './helper';

export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  categorySwitch(event) {
    // console.log(CLASS_NAMES.MAIN_PAGE_CARD_LINK);
    // console.log(event.target);
    // debugger;
    const selectedCategory = event.target.closest(`.${CLASS_NAMES.MAIN_PAGE_CARD_LINK}`).dataset.category;

    const cardsListElement = document.querySelector('.cards__list');
    // const navigationList = document.querySelector('.navigation__list');

    // navigationList.addEventListener('click', (event) => {
    cardsListElement.classList.remove('cards__list_main-page');
    cardsListElement.innerHTML = '';

    // const category = event.target.innerText.toLowerCase();
    const categoryIndex = CARDS_DATA[0].indexOf(selectedCategory) + 1;

    const cardTemplate = document.querySelector('#cardTemplate');
    const cardsListFragment = document.createDocumentFragment();

    CARDS_DATA[categoryIndex].forEach((card) => {
      const newCardElement = cardTemplate.content.cloneNode(true);

      const cardsLinkElement = newCardElement.querySelector('.card__link');
      const cardWordElement = newCardElement.querySelector('.card__word');
      const cardTranslationElement = newCardElement.querySelector('.card__translation');
      const cardImageElements = newCardElement.querySelectorAll('.card__image');
      // const cardAudioElements = newCardElement.querySelectorAll('.card__audio');
      cardWordElement.innerText = card.word;
      cardTranslationElement.innerText = card.translation;

      const audio = new Audio(`./../app-data/${card.audioSrc}`);
      cardsLinkElement.onclick = () => {
        audio.play();
        return false;
      };

      cardImageElements.forEach((cardImageElement) => {
        cardImageElement.src = `./../app-data/${card.image}`;
      });

      cardsListFragment.append(newCardElement);
    });

    cardsListElement.append(cardsListFragment);
  }

  init() {

  }
}
