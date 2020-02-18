import axios from 'axios';

const baseDomain = 'http://172.16.48.199:7080/mb';
const baseURL = `${baseDomain}`;



export default axios.create({
  baseURL,
  headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
});


