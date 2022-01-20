import axios from 'axios';
import { BASE_API_URI } from '../../globals';

const Client = axios.create({
  baseURL: BASE_API_URI
});
export default Client;
