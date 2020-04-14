import { CLASS_NAMES } from './helper';
import MainCard from './mainCard';

export default class MainList {
  constructor(container, categoriesData, onMainCardClick) {
    this.container = container;
    this.categoriesData = categoriesData;
    this.onMainCardClick = onMainCardClick;
    this.list = null;

    this.init();
  }

  addHandlers() {
    this.list.addEventListener('click', this.onMainCardClick);
  }

  removeHandlers() {
    this.list.removeEventListener('click', this.onMainCardClick);
  }

  render() {
    this.categoriesData.forEach((categoryData) => {
      const card = new MainCard(this.list, categoryData);
      card.render();
    });

    this.container.prepend(this.list);
  }

  remove() {
    this.removeHandlers();
    this.list.remove();
  }

  init() {
    const list = document.createElement('ul');
    list.className = CLASS_NAMES.MAIN_LIST;
    this.list = list;
    this.addHandlers();
  }
}
