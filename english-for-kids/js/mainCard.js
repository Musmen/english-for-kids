import { CLASS_NAMES } from './helper';
import { createMainCard } from './utils';

export default class MainCard {
  constructor(container, cardTitle, imageSrc) {
    this.container = container;
    this.cardTitle = cardTitle;
    this.imageSrc = imageSrc;
  }

  render() {
    const card = document.createElement('li');
    card.className = CLASS_NAMES.CARD;
    card.innerHTML = createMainCard(this.cardTitle, this.imageSrc);
    this.container.append(card);
  }
}
