import { getUserInfo } from './js/api/contacts-api';
async function allContacts() {
  console.log(await getUserInfo());
}
allContacts();
