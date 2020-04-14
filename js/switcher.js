export default class Switcher {
  constructor(onSwitcherChange) {
    this.element = null;
    this.onSwitcherChange = onSwitcherChange;

    this.init();
  }

  addHandlers() {
    this.element.addEventListener('change', this.onSwitcherChange);
  }

  removeHandlers() {
    this.element.removeEventListener('change', this.onSwitcherChange);
  }

  remove() {
    this.removeHandlers();
  }

  init() {
    this.element = document.querySelector('.switcher');
    this.addHandlers();
  }
}
