import { getFromLS, setToLS } from './localstorage.js';

export function addElement({ id, inputValue, key }) {
  const arrTask = getFromLS(key) || [];
  const obj = { id: id, text: inputValue };
  arrTask.push(obj);
  setToLS(key, arrTask);
}
