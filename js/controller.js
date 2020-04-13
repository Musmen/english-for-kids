import { CLASS_NAMES } from './helper';

export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.onBurgerMenuClick = this.onBurgerMenuClick.bind(this);
    this.onMainCardClick = this.onMainCardClick.bind(this);
    this.onCategoryCardClick = this.onCategoryCardClick.bind(this);
  }

  onBurgerMenuClick(event) {
    const isMenuLinkClicked = event.target.classList.contains('navigation__link');
    const isOutOfMenuClicked = event.target.classList.contains('burger__layout');
    if (!isMenuLinkClicked && !isOutOfMenuClicked) return;

    this.view.burgerMenu.close();
    if (isMenuLinkClicked) {
      const selectedCategory = event.target.closest(`.${CLASS_NAMES.LINK}`).dataset.category; // элементы повторения
      this.model.currentCategory = selectedCategory;
      this.view.currentList.remove();

      switch (selectedCategory) {
        case 'main page': {
          this.view.createMainList(this.model.categoriesData, this.onMainCardClick); // повторение
          this.view.currentList.render();
          break;
        }
        case 'statistics':
          // !todo!
          break;
        default: {
          const categoryData = this.model.getCategoryData(); // элементы повторения
          this.view.createCategoryList(categoryData, this.onCategoryCardClick);
          this.view.currentList.render();
          break;
        }
      }
    }
  }

  onMainCardClick(event) {
    if (!event.target.className.match(CLASS_NAMES.CARD_TARGET)) return;
    event.preventDefault();

    this.view.currentList.remove();
    const selectedCategory = event.target.closest(`.${CLASS_NAMES.LINK}`).dataset.category;
    this.model.currentCategory = selectedCategory;
    const categoryData = this.model.getCategoryData();
    this.view.createCategoryList(categoryData, this.onCategoryCardClick);
    this.view.currentList.render(); // render selected category list
  }

  onCategoryCardClick(event) {
    if (!event.target.className.match(CLASS_NAMES.CARD_TARGET)) return;
    event.preventDefault();

    const selectedCardAudioSrc = event.target.closest(`.${CLASS_NAMES.LINK}`).dataset.audio;
    const audio = new Audio(`./../app-data/${selectedCardAudioSrc}`);
    audio.play(); // play word pronunciation;

    return this; // todo тут еще обработчик кнопки поворота... А это убрать
  }

  init() {
    this.view.createBurgerMenu(this.onBurgerMenuClick);

    this.view.createMainList(this.model.categoriesData, this.onMainCardClick);
    this.view.currentList.render();
    this.model.currentCategory = 'main page';
  }
}
