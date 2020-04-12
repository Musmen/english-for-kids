export const createMainPageCard = (cardTitle, imageSrc) => `
  <a class="card__link link" href="#" data-category="${cardTitle}">
    <img  class="card__image" src="./app-data/${imageSrc}">
    <h3 class="card__title">${cardTitle.toUpperCase()}</h3>
  </a>
`;

export const createCategoryPageCard = (cardData) => {
  const {
    word,
    translation,
    imageSrc,
    audioSrc,
  } = cardData;

  return `
    <a class="card__link" href="#" data-audio="${audioSrc}">
      <div class="card__front">
        <img class="card__image" src="./app-data/${imageSrc}">
        <p class="card__word">${word.toUpperCase()}</p>
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

export const isDocumentBottomReached = () => {
  const currentScrollY = window.pageYOffset;
  const viewHeight = document.documentElement.clientHeight;
  const maxScrollY = document.documentElement.scrollHeight;

  return (currentScrollY + viewHeight >= maxScrollY);
};
