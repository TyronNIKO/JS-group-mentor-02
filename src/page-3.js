import { getUsersInfo, getUserInfo, deleteUser, createUser,resetUser } from './js/api/contacts-api';


async function allContacts() {
  const usersData = await getUsersInfo();
  console.log(usersData);
}

async function contactById(id) {
  const userData = await getUserInfo(id);
  console.log(userData);
}

// contactById('22');

// deleteUser('22');
createUser({ name: "Vaska", phone: "1232243546" });
resetUser('21', {name: 'Sharik', phone: "1232243546" })

allContacts();

