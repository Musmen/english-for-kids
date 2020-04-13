import { CLASS_NAMES } from './helper';
import CategoryCard from './categoryCard';

export default class CategoryList {
  constructor(container, categoryData, onCategoryCardClick) {
    this.container = container;
    this.categoryData = categoryData;
    this.onCategoryCardClick = onCategoryCardClick;
    this.list = null;

    this.init();
  }

  addHandlers() {
    this.list.addEventListener('click', this.onCategoryCardClick);
  }

  removeHandlers() {
    this.list.removeEventListener('click', this.onCategoryCardClick);
  }

  render() {
    this.categoryData.forEach((cardData) => {
      const card = new CategoryCard(this.list, cardData);
      card.render();
    });

    this.container.append(this.list);
  }

  remove() {
    this.removeHandlers();
    this.list.remove();
  }

  init() {
    const list = document.createElement('ul');
    list.className = CLASS_NAMES.CATEGORY_PAGE_CARDS_LIST;
    this.list = list;
    this.addHandlers();
  }
}
