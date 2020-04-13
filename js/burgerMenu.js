import { disableTab, disableDocumentScroll, enableDocumentScroll } from './utils';

export default class BurgerMenu {
  constructor(container = null, onBurgerMenuClick) {
    this.container = container;
    this.onBurgerMenuClick = onBurgerMenuClick;

    this.isOpen = false;
    this.burgerMenuButton = null;

    this.disableTabBined = disableTab.bind(this);
    this.onBurgerMenuButtonClick = this.onBurgerMenuButtonClick.bind(this);

    this.init();
  }

  open() {
    const { container } = this;

    const layout = container.querySelector('.burger__layout');
    layout.classList.toggle('open');
    layout.focus();
    layout.addEventListener('keydown', this.disableTabBined);
    layout.addEventListener('click', this.onBurgerMenuClick);

    disableDocumentScroll('overflow-hidden-burger');
    this.isOpen = true;
    this.rotateBurgerMenuIcon();
  }

  close() {
    const { container } = this;
    const layout = container.querySelector('.burger__layout');
    layout.classList.toggle('open');

    enableDocumentScroll('overflow-hidden-burger');
    this.isOpen = false;
    this.rotateBurgerMenuIcon();

    layout.removeEventListener('keydown', this.disableTabBined);
    layout.removeEventListener('click', this.onBurgerMenuClick);
  }

  rotateBurgerMenuIcon() {
    this.burgerMenuButton.classList.toggle('burger-rotate');
  }

  onBurgerMenuButtonClick() {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }

  init() {
    this.burgerMenuButton = document.querySelector('#burger');
    this.burgerMenuButton.addEventListener('click', this.onBurgerMenuButtonClick); // ToDo remove Listener before unload
  }
}
