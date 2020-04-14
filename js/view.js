import Switcher from './switcher';
import MainList from './mainList';
import CategoryList from './categoryList';
import BurgerMenu from './burgerMenu';

import mainPage from './mainPage'; // todo
import categoryPage from './categoryPage'; // todo

export default class View {
  constructor() {
    this.controller = null;

    this.container = null;
    this.switcher = null; // todo удаление событий продумать;
    this.currentList = null;
    this.currentCategoryTitle = null;
  }

  createMainList(categoriesData, onMainCardClick) {
    this.currentList = new MainList(this.container, categoriesData, onMainCardClick);
  }

  createCategoryList(categoryData, onCategoryCardClick) {
    this.currentList = new CategoryList(this.container, categoryData, onCategoryCardClick);
  }

  createBurgerMenu(onBurgerMenuLinkClick) {
    this.burgerMenu = new BurgerMenu(document.body, onBurgerMenuLinkClick);
  }

  initSwitcher() {
    this.switcher = new Switcher(this.controller.onSwitcherChange);
  }

  turnCard(card) {
    card.classList.toggle('rotate');
    card.addEventListener('mouseleave', this.controller.onCardMouseLeave);
  }

  returnCard(card) {
    card.classList.toggle('rotate');
    card.removeEventListener('mouseleave', this.controller.onCardMouseLeave);
  }

  init(controller) {
    this.controller = controller;
    this.container = document.querySelector('.cards__container');
    this.currentCategoryTitle = document.querySelector('.cards__current_category_title');

    mainPage(); // todo
    categoryPage(); // todo
  }
}
