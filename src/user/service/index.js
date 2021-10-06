import axios from 'axios';
import { server } from '../../config';

const findUserByEmail = async (email) => {
  const response = await axios.get(`${server.userAPIBaseUrl}/${email}`);
  return response.data;
};

const createUser = async (user) => {
  try {
    await axios.post(`${server.userAPIBaseUrl}/`, user);
  } catch (err) {
    throw err;
  }
};

export default {
  findUserByEmail,
  createUser,
};
