import '../scss/style.scss';

import MainPageCardsList from './mainPageCardsList';
import Controller from './controller';

import mainPage from './mainPage';
import categoryPage from './categoryPage';
import BurgerMenu from './burgerMenu';

window.onload = () => {
  // debugger;
  const controller = new Controller();

  const container = document.querySelector('.cards__container');
  const mainPageCardsList = new MainPageCardsList(container, controller.categorySwitch);
  mainPageCardsList.render();
  // container.append(mainPageCardsList);

  mainPage();
  categoryPage();

  const burger = new BurgerMenu(document.body);
  burger.init();
};
