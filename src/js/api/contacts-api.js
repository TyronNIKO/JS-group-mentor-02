import axios from 'axios';

export const BASE_URL = 'https://64859281a795d24810b7146a.mockapi.io/work/';

export async function getUserInfo(params) {
  try {
    const responce = await axios.get(`${BASE_URL}/contacts`);
    return responce.data;
  } catch (err) {
    console.log(err);
  }
}
