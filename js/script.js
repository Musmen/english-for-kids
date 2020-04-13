import '../scss/style.scss';

import CARDS_DATA from './data/cards';

import Controller from './controller';
import Model from './model';
import View from './view';

window.onload = () => {
  const model = new Model(CARDS_DATA);
  const view = new View();
  const controller = new Controller(model, view);
  view.init(controller);
  model.init(controller);
  controller.init();
};
