export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.categorySwitchHandler = this.categorySwitchHandler.bind(this);
  }

  categorySwitchHandler(selectedCategory) {
    // this.view.container.innerHTML = '';

    const categoryData = this.model.getCategoryData(selectedCategory);
    this.view.createCategoryPageCardsList(categoryData);
  }

  cardAudioPlay(selectedCardAudioSrc) {
    const audio = new Audio(`./../app-data/${selectedCardAudioSrc}`);
    audio.play();
  }

  init() {
  }
}
