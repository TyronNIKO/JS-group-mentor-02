import { winMarcup } from './js/render';
import refs from './js/refs';
import { LS_KEY } from './js/constants';
import { deleteElement } from './js/deleteElement';
winMarcup(refs.favouriteList, LS_KEY);
deleteElement(refs.favouriteList, LS_KEY);
