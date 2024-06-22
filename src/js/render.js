import { getFromLS } from './helpers/localstorage.js';

export function createLiEl({ text, id }) {
  return `<li id="${id}" class ="task-list-item">${text}<button type="button">X</button></li>`;
}
export function createMarkup(array) {
  return array.map(createLiEl).join('');
}
export function winMarcup(container, key) {
  const arrTask = getFromLS(key);
  if (!arrTask) return;
  container.innerHTML = createMarkup(arrTask);
}
