import { CLASS_NAMES } from './helper';
import { createCategoryCard } from './utils';

export default class CategoryCard {
  constructor(container, cardData) {
    this.container = container;
    this.cardData = cardData;
  }

  render() {
    const card = document.createElement('li');
    card.className = CLASS_NAMES.CARD;
    card.innerHTML = createCategoryCard(this.cardData);
    this.container.append(card);
  }
}
