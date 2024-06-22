import { getFromLS, setToLS } from './helpers/localstorage.js';

export function deleteElement(elem, key) {
  elem.addEventListener('click', e => {
    if (!e.target.closest('button')) return;
    const li = e.target.closest('li');
    const arrTask = getFromLS(key);
    if (!arrTask) return;
    const newArr = arrTask.filter(({ id }) => id !== li.id);
    setToLS(key, newArr);
    li.remove();
  });
}
