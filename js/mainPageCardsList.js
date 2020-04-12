import { CATEGORIES_LIST, CLASS_NAMES } from './helper';
import MainPageCard from './mainPageCard';

export default class MainPageCardsList {
  constructor(container, callBack) {
    this.container = container;
    this.callBack = callBack;
    this.list = null;

    this.onClickHandler = this.onClickHandler.bind(this);
    this.init();
  }

  onClickHandler(event) {
    if (!event.target.className.match(CLASS_NAMES.MAIN_PAGE_TARGET)) return;
    event.preventDefault();
    this.removeHandlers();
    this.callBack(event);
  }

  addHandlers() {
    this.list.addEventListener('click', this.onClickHandler);
  }

  removeHandlers() {
    this.list.removeEventListener('click', this.onClickHandler);
  }

  render() {
    const list = document.createElement('ul');
    list.className = CLASS_NAMES.MAIN_PAGE_CARDS_LIST;

    CATEGORIES_LIST.forEach((category) => {
      const card = new MainPageCard(list, category.title, category.image);
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
    list.className = CLASS_NAMES.MAIN_PAGE_CARDS_LIST;

    CATEGORIES_LIST.forEach((category) => {
      const card = new MainPageCard(list, category.title, category.image);
      card.render();
    });

    this.list = list;
    this.addHandlers();
  }
}
