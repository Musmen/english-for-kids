export const createMainPageCard = (cardTitle, imageSrc) => {
  return `
      <a class="card__link link" href="#" data-category="${cardTitle}">
        <img  class="card__image" src="./app-data/${imageSrc}">
        <h3 class="card__title">${cardTitle.toUpperCase()}</h3>
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
