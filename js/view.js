import MainList from './mainList';
import CategoryList from './categoryList';
import BurgerMenu from './burgerMenu';

import mainPage from './mainPage'; // todo
import categoryPage from './categoryPage'; // todo

export default class View {
  constructor() {
    this.controller = null;

    this.container = null;
    this.currentList = null;
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

  init(controller) {
    this.controller = controller;
    this.container = document.querySelector('.cards__container');

    mainPage(); // todo
    categoryPage(); // todo
  }
}
