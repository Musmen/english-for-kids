import '../scss/style.scss';

import Controller from './controller';
import Model from './model';
import View from './view';

window.onload = () => {
  const model = new Model();
  const view = new View();
  const controller = new Controller(model, view);
  view.init(controller);
  model.init(controller);
};
