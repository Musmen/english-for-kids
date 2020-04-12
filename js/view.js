import MainPageCardsList from './mainPageCardsList';
import CategoryPageCardsList from './categoryPageCardsList';
import mainPage from './mainPage';
import categoryPage from './categoryPage';
import BurgerMenu from './burgerMenu';

export default class View {
  constructor() {
    this.controller = null;

    this.container = null;
    this.mainPageCardsList = null;
    this.categoryPageCardsList = null;
  }

  createCategoryPageCardsList(categoryData) {
    this.categoryPageCardsList = new CategoryPageCardsList(this.container, categoryData, this.controller.cardAudioPlay);
    this.categoryPageCardsList.render();
  }

  init(controller) {
    this.controller = controller;

    this.container = document.querySelector('.cards__container');
    this.mainPageCardsList = new MainPageCardsList(this.container, this.controller.categorySwitchHandler);
    this.mainPageCardsList.render();

    mainPage();
    categoryPage();

    const burger = new BurgerMenu(document.body);
    burger.init();
  }
};
