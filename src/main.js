import { nanoid } from 'nanoid';
import { createLiEl, winMarcup } from './js/render.js';
import refs from './js/refs.js';
import { LS_KEY } from './js/constants.js';
import { deleteElement } from './js/deleteElement.js';
import { addElement } from './js/addElement.js';

//TODO-1
// Напишіть логіку обробнику подій по сабміту
// При сабміті треба у змінну записувати значення поля інпута
// Повинна бути перевірка на порожнє поле.
//TODO-2
// Напишіть логіку яка з сабміта буде брати значення поля інпут
// Генерувати елемент списку LI  з текстом і кнопкою Х, у майбутньому це буде кнопка видалення таски
//TODO-3
// Написати функцію, яка при сабміті буде зберігати данні в сховище, в сховище повинні додаватись таски, а не перезаписуватись існуюча
//TODO-4
//Відформатуйте код таким чином, щоб данні в сховищі зберігались у вигляді об'єкта { id: value, text: value}, розмітка додавалась з айдішніком на елемент списку li, айдішнік генерувати з допомогою бібліотеки nanoid, її треба встановити
//TODO-4
// Написати функцію, яка буде при завантаженні сторінки відмальовувати розмітку беручи данні з ЛС
//TODO-5
//Створити логіку видалення елементів з сховища та розмітки

refs.formEl.addEventListener('submit', fooSubmit);

function fooSubmit(e) {
  e.preventDefault();
  const inputValue = e.target.elements.taskName.value.trim();
  if (!inputValue) {
    return;
  }
  console.log(inputValue);
  const id = nanoid(); //=> "V1StGXR8_Z5jdHi6B-myT"

  refs.ulEl.insertAdjacentHTML(
    'beforeend',
    createLiEl({ text: inputValue, id })
  );
  addElement({ inputValue, id, key: LS_KEY });
  e.target.reset();
}
winMarcup(refs.ulEl, LS_KEY);
deleteElement(refs.ulEl, LS_KEY);
