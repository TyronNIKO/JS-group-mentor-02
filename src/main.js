import { nanoid } from 'nanoid';

//TODO-1
// Напишіть логіку обробнику подій по сабміту
// При сабміті треба у змінну записувати значення поля інпута
// Повинна бути перевірка на порожнє поле.
const formEl = document.querySelector('#task-form');
const ulEl = document.querySelector('#task-list');
const localStorageKey = 'task-key';

formEl.addEventListener('submit', fooSubmit);

function fooSubmit(e) {
  e.preventDefault();
  const inputValue = e.target.elements.taskName.value.trim();
  if (!inputValue) {
    return;
  }
  console.log(inputValue);
  const newId = nanoid(); //=> "V1StGXR8_Z5jdHi6B-myT"

  ulEl.insertAdjacentHTML('beforeend', createLiEl(inputValue, newId));
  addTask(inputValue, newId);
  e.target.reset();
}
//TODO-2
// Напишіть логіку яка з сабміта буде брати значення поля інпут
// Генерувати елемент списку LI  з текстом і кнопкою Х, у майбутньому це буде кнопка видалення таски

function createLiEl(inputValue, id) {
  return `<li id="${id}" class ="task-list-item">${inputValue}<button type="button">X</button></li>`;
}

//TODO-3
// Написати функцію, яка при сабміті буде зберігати данні в сховище, в сховище повинні додаватись таски, а не перезаписуватись існуюча

function addTask(inputValue, id) {
  const arrTask = JSON.parse(localStorage.getItem(localStorageKey)) || [];
  const obj = { id: id, text: inputValue };
  arrTask.push(obj);
  localStorage.setItem(localStorageKey, JSON.stringify(arrTask));
}

//TODO-4
//Відформатуйте код таким чином, щоб данні в сховищі зберігались у вигляді об'єкта { id: value, text: value}, розмітка додавалась з айдішніком на елемент списку li, айдішнік генерувати з допомогою бібліотеки nanoid, її треба встановити
