import Axios from 'axios';

const axios = Axios.create({
  baseURL: 'https://64859281a795d24810b7146a.mockapi.io/work/'
})
// export const BASE_URL = 'https://64859281a795d24810b7146a.mockapi.io/work/';

export async function getUsersInfo() {
  try {
    const responce = await axios.get(`/contacts`);
    return responce.data;
  } catch (err) {
    console.log(err);
  }
}

export async function getUserInfo(id) {
  try {
    const response = await axios.get(`/contacts/${id}`);
  return response.data;
  } catch (e) {
    console.log(e);
  }

}

export async function deleteUser(id) {
  try {
    const response = await axios.delete(`/contacts/${id}`);
  return response.data;
  } catch (e) {
    console.log(e);
  }

}

export async function createUser(user) {
  try {
    const response = await axios.post('/contacts/', user);
  return response.data;
  } catch (e) {
    console.log(e);
  }
}

export async function resetUser(id, user) {
  try {
    const response = await axios.put(`/contacts/${id}`, user);
  return response.data;
  } catch (e) {
    console.log(e);
  }
}
