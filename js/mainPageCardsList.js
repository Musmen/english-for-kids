import { CATEGORIES_LIST, CLASS_NAMES } from './helper';
import MainPageCard from './mainPageCard';

export default class MainPageCardsList {
  constructor(container, callBack) {
    this.container = container;
    this.callBack = callBack;
    this.list = null;

    this.onClickHandler = this.onClickHandler.bind(this);
    // this.render = this.render.bind(this);
    this.init();
  }

  onClickHandler(event) {
    if (!event.target.className.match(CLASS_NAMES.CARD_TARGET)) return;
    event.preventDefault();
    const selectedCategory = event.target.closest(`.${CLASS_NAMES.CARD_LINK}`).dataset.category;

    this.remove();
    // this.removeHandlers();

    this.callBack(selectedCategory);
  }

  addHandlers() {
    this.list.addEventListener('click', this.onClickHandler);
  }

  removeHandlers() {
    this.list.removeEventListener('click', this.onClickHandler);
  }

  render() {
    // const list = document.createElement('ul');
    // list.className = CLASS_NAMES.MAIN_PAGE_CARDS_LIST;

    CATEGORIES_LIST.forEach((category) => {
      const card = new MainPageCard(this.list, category.title, category.imageSrc);
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
    this.list = list;
    this.addHandlers();

    // CATEGORIES_LIST.forEach((category) => {
    //   const card = new MainPageCard(list, category.title, category.image);
    //   card.render();
    // });
  }
}
