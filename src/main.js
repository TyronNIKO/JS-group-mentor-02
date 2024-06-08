//TODO-1
// Напишіть логіку обробнику подій по сабміту
// При сабміті треба у змінну записувати значення поля інпута
// Повинна бути перевірка на порожнє поле.
const formEl = document.querySelector('#task-form');
const localStorageKey = "task-key";


console.log();

formEl.addEventListener('submit', fooSubmit);
const ulEl = document.querySelector('#task-list');

function fooSubmit(e) {
  e.preventDefault();
  const inputValue = e.target.elements.taskName.value.trim();
  if (!inputValue) {
    return;
  }
  console.log(inputValue);

  ulEl.insertAdjacentHTML('beforeend', createLiEl(inputValue));
  addTask(inputValue);
  e.target.reset();
}
//TODO-2
// Напишіть логіку яка з сабміта буде брати значення поля інпут
// Генерувати елемент списку LI  з текстом і кнопкою Х, у майбутньому це буде кнопка видалення таски

function createLiEl(inputValue) {
  return `<li class ="task-list-item">${inputValue}<button type="button">X</button></li>`
}

//TODO-3
// Написати функцію, яка при сабміті буде зберігати данні в сховище, в сховище повинні додаватись таски, а не перезаписуватись існуюча

function addTask(inputValue) {
  const arrTask = JSON.parse(localStorage.getItem(localStorageKey)) || [];
  arrTask.push(inputValue);
  localStorage.setItem(localStorageKey, JSON.stringify(arrTask));

}