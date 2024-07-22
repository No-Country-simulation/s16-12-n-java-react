import axios from 'axios';
import { getBaseUrl } from '../utils/getUrl';

const BASE_URL = getBaseUrl();
export const axiosClient = axios.create({ baseURL: BASE_URL });
