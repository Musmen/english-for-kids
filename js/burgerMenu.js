import { disableTab, disableDocumentScroll, enableDocumentScroll } from './utils';
import { ELEMENTS } from './helper';
import Popup from './popup';

export default class BurgerMenu extends Popup {
  constructor(container = null) {
    super(container);
    this.isOpen = false;
    this.burgerMenuButton = null;
    this.disableTabBined = disableTab.bind(this);
  }

  // build() {
  //   // const logo = ELEMENTS.HEADER.querySelector('.logo').cloneNode(true);
  //   // const navigation = ELEMENTS.HEADER.querySelector('#navigation').cloneNode(true);
  //   // navigation.classList.add('display-flex');

  //   const popup = document.querySelector('#burger__template').content.cloneNode(true);
  //   const layout = popup.querySelector('.burger__layout');
  //   const wrapper = popup.querySelector('.burger__wrapper');
  //   // wrapper.append(logo);
  //   // wrapper.append(navigation);

  //   layout.addEventListener('click', this.burgerMenuClickHandler.bind(this));

  //   return popup;
  // }

  open() {
    const { container } = this;
    // const popup = this.build();

    // container.append(popup);

    const popupLayout = container.querySelector('.burger__layout');
    popupLayout.classList.toggle('open');
    popupLayout.focus();
    popupLayout.addEventListener('keydown', this.disableTabBined);
    popupLayout.addEventListener('click', this.burgerMenuClickHandler);

    disableDocumentScroll('overflow-hidden-burger');
    this.isOpen = true;
    this.rotateBurgerMenuButtonIcon();
  }

  close() {
    const { container } = this;
    const popup = container.querySelector('.burger__layout');
    popup.classList.toggle('open');
    // popup.left = '-100vw';
    // popup.remove();

    enableDocumentScroll('overflow-hidden-burger');
    this.isOpen = false;
    this.rotateBurgerMenuButtonIcon();

    popup.removeEventListener('keydown', this.disableTabBined);
    popup.removeEventListener('click', this.burgerMenuClickHandler);
  }

  rotateBurgerMenuButtonIcon() {
    this.burgerMenuButton.classList.toggle('burger-rotate');
  }

  burgerMenuButtonClickHandler() {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }

  burgerMenuClickHandler(event) {
    // debugger;
    if (!event.target.classList.contains('navigation__link')
      && !event.target.className.includes('logo')
      && !event.target.classList.contains('burger__layout')) return;
    this.close();
  }

  init() {
    // debugger;
    this.burgerMenuButtonClickHandler = this.burgerMenuButtonClickHandler.bind(this);
    this.burgerMenuClickHandler = this.burgerMenuClickHandler.bind(this);

    this.burgerMenuButton = document.querySelector('#burger');
    this.burgerMenuButton.addEventListener('click', this.burgerMenuButtonClickHandler);
  }
}
