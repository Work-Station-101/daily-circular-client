import axios from 'axios';
import { server } from '../../config';
const circularAPIEndpoint = `${server}/api/circular`


const createOrUpdateCircular = async (circular) => {
  try {
    await axios.post(`${circularAPIEndpoint}`, circular);
  }
  catch (err) {
    throw err;
  }
};


const CircularService = {
  createOrUpdateCircular,
};

export default CircularService;
