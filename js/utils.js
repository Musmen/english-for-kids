export const createMainCard = (categoryData) => `
  <a class="card__link link" href="#" data-category="${categoryData.title}">
    <img  class="card__image" src="./app-data/${categoryData.imageSrc}">
    <h3 class="card__title">${categoryData.title.toUpperCase()}</h3>
  </a>
`;

export const createCategoryCard = (cardData) => {
  const {
    word,
    translation,
    imageSrc,
    audioSrc,
  } = cardData;

  return `
    <a class="card__link link" href="#" data-audio="${audioSrc}">
      <div class="card__front">
        <img class="card__image" src="./app-data/${imageSrc}">
        <p class="card__word">${word.toUpperCase()}</p>
        <button class="card__button button">R</button>
      </div>
      <div class="card__back">
        <img class="card__image" src="./app-data/${imageSrc}">
        <p class="card__translation">${translation.toUpperCase()}</p>
      </div>
    </a>
 `;
};

export const disableDocumentScroll = (className = 'overflow-hidden') => {
  document.body.classList.add(className);
};

export const enableDocumentScroll = (className = 'overflow-hidden') => {
  document.body.classList.remove(className);
};

export const disableTab = (event) => {
  if (event.key === 'Tab') event.preventDefault();
};
