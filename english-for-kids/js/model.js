import { FIRST_CATEGORY_ITEM } from './helper';

export default class Model {
  constructor(CARDS_DATA) {
    this.cardsData = CARDS_DATA;

    this.controller = null;
    this.currentCategory = null;
    this.categoriesData = null;
  }

  getCategoriesList() {
    return Object.keys(this.cardsData);
  }

  getCategoriesImages(categoriesList) {
    return categoriesList
      .map((category) => this.cardsData[category][FIRST_CATEGORY_ITEM].imageSrc);
  }

  getCategoriesData() {
    const categoriesList = this.getCategoriesList();
    const categoriesImagesList = this.getCategoriesImages(categoriesList);

    return categoriesList.map((category, index) => {
      const title = category;
      const imageSrc = categoriesImagesList[index];
      return { title, imageSrc };
    });
  }

  getCategoryData() {
    return this.cardsData[this.currentCategory];
  }

  init(controller) {
    this.controller = controller;
    this.categoriesData = this.getCategoriesData();
  }
}
