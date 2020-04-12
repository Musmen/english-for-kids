import CARDS_DATA from './data/cards';

export default class Model {
  constructor() {
    this.controller = null;
  }

  getCategoryData(selectedCategory) {
    return CARDS_DATA[selectedCategory];
  }

  init(controller) {
    this.controller = controller;
  }
};
