import { createCategoryPageCard } from './utils';
import { CLASS_NAMES } from './helper';

export default class CategoryPageCard {
  constructor(container, cardData) {
    this.container = container;
    this.cardData = cardData;
  }

  render() {
    const card = document.createElement('li');
    card.className = CLASS_NAMES.CARD;
    card.innerHTML = createCategoryPageCard(this.cardData);
    this.container.append(card);
  }
}
