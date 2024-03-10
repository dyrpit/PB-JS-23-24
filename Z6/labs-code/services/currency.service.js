import axios from 'axios';
import { BASE_CURRENCY, CURRENCY_API_URL } from '../config.js';

async function getExchangeRate(currency) {
  try {
    const response = await axios.get(
      `${CURRENCY_API_URL}?base=${currency}&symbol=${BASE_CURRENCY}`
    );
    return response.data.rate;
  } catch (e) {
    console.error('Error while fetching currency rate: ', e.message);
    return 3.9;
  }
}

export { getExchangeRate };
export default getExchangeRate;
