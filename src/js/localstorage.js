export function getFromLS(key) {
  return JSON.parse(localStorage.getItem(key));
}

export function setToLS(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
