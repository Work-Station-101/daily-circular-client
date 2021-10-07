import axios from 'axios';
import { server } from '../../config';

const createOrUpdateCircular = async (circular) => {
  try {
    await axios.post(`${server.circularAPIBaseUrl}/`, circular);
  }
  catch (err) {
    throw err;
  }
};

const getCirculars = async (tagList) => {
  const response = await axios.post(`${server.circularAPIBaseUrl}/circulars`, { tagList });
  return response.data;
};

const getCircularsByUserGUID = async (userGUID) => {
  const response = await axios.get(`${server.circularAPIBaseUrl}/circulars/${userGUID}`);
  return response.data;
};

const CircularService = {
  createOrUpdateCircular,
  getCirculars,
  getCircularsByUserGUID,
};

export default CircularService;
