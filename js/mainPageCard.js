import { createMainPageCard } from './utils';
import { CLASS_NAMES } from './helper';

export default class MainPageCard {
  constructor(container, cardTitle, imageSrc) {
    this.container = container;
    this.cardTitle = cardTitle;
    this.imageSrc = imageSrc;
  }

  render() {
    const card = document.createElement('li');
    card.className = CLASS_NAMES.MAIN_PAGE_CARD;
    card.innerHTML = createMainPageCard(this.cardTitle, this.imageSrc);
    this.container.append(card);
  }
}
