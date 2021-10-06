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


const CircularService = {
  createOrUpdateCircular,
};

export default CircularService;
