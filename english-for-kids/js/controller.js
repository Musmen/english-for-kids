import { CLASS_NAMES } from './helper';

export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.onBurgerMenuClick = this.onBurgerMenuClick.bind(this);
    this.onSwitcherChange = this.onSwitcherChange.bind(this);
    this.onCardMouseLeave = this.onCardMouseLeave.bind(this);
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
      this.view.burgerMenu.toggleStates(event.target.closest(`.${CLASS_NAMES.LINK}`));

      this.model.currentCategory = selectedCategory;
      this.view.currentCategoryTitle.innerText = this.model.currentCategory;
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

  onSwitcherChange() {
    document.body.classList.toggle('play');
  }

  onCardMouseLeave({ target }) {
    this.view.returnCard(target);
  }

  onMainCardClick(event) {
    if (!event.target.closest(`.${CLASS_NAMES.LINK}`)) return;
    event.preventDefault();

    this.view.currentList.remove();
    const selectedCategory = event.target.closest(`.${CLASS_NAMES.LINK}`).dataset.category;
    this.view.burgerMenu.toggleStates(this.view.burgerMenu.container.querySelector(`[data-category="${selectedCategory}"]`));
    this.model.currentCategory = selectedCategory;
    this.view.currentCategoryTitle.innerText = this.model.currentCategory;
    const categoryData = this.model.getCategoryData();
    this.view.createCategoryList(categoryData, this.onCategoryCardClick);
    this.view.currentList.render(); // render selected category list
  }

  onCategoryCardClick(event) {
    if (!event.target.closest(`.${CLASS_NAMES.LINK}`)) return;
    event.preventDefault();

    if (event.target.closest('.card__button')) {
      this.view.turnCard(event.target.closest(`.${CLASS_NAMES.LINK}`));
      return;
    }

    const selectedCardAudioSrc = event.target.closest(`.${CLASS_NAMES.LINK}`).dataset.audio;
    const audio = new Audio(`./../app-data/${selectedCardAudioSrc}`);
    audio.play(); // play word pronunciation;
  }

  init() {
    this.view.initSwitcher(this.onSwitcherChange);
    this.view.createBurgerMenu(this.onBurgerMenuClick);

    this.view.createMainList(this.model.categoriesData, this.onMainCardClick);
    this.view.currentList.render();

    this.model.currentCategory = 'main page'; // элементы повторения
    this.view.currentCategoryTitle.innerText = this.model.currentCategory;
  }
}
