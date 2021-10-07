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

const authentication = async (credential) => {
  const response = await axios.post(`${server.userAPIBaseUrl}/login`, credential);
  if (!response.data) {
    throw new Error();
  }
  return response;
};

export default {
  authentication,
  createUser,
  findUserByEmail,
};
