import { CLASS_NAMES } from './helper';
import CategoryPageCard from './categoryPageCard';

export default class CategoryPageCardsList {
  constructor(container, categoryData, callBack) {
    this.container = container;
    this.categoryData = categoryData;
    this.callBack = callBack;
    this.list = null;

    this.onClickHandler = this.onClickHandler.bind(this);
    this.init();
  }

  onClickHandler(event) {
    if (!event.target.className.match(CLASS_NAMES.CARD_TARGET)) return;
    event.preventDefault();
    const selectedCardAudioSrc = event.target.closest(`.${CLASS_NAMES.CARD_LINK}`).dataset.audio;

    // this.remove(); // todo тут еще обработчик кнопки поворота...
    // this.removeHandlers();

    this.callBack(selectedCardAudioSrc);
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

    this.categoryData.forEach((cardData) => {
      const card = new CategoryPageCard(this.list, cardData);
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

    // CATEGORIES_LIST.forEach((category) => {
    //   const card = new MainPageCard(list, category.title, category.image);
    //   card.render();
    // });
  }
}
