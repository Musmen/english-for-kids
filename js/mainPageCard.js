import { createMainPageCard } from './utils';
import { CLASS_NAMES } from './helper';

export default class MainPageCard {
  constructor(container, cardTitle, imageSrc) {
    this.container = container;
    this.cardTitle = cardTitle;
    this.imageSrc = imageSrc;

    // this.render = this.render.bind(this);
  }

  render() {
    const card = document.createElement('li');
    card.className = CLASS_NAMES.CARD;
    card.innerHTML = createMainPageCard(this.cardTitle, this.imageSrc);
    this.container.append(card);
  }
}
