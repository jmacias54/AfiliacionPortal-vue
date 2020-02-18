import axios from 'axios';
axios.defaults.baseURL = 'http://172.16.48.199:7080/mb';


export default function executeRequest({
  path, data = {}, method = 'GET', mocky = false, responseType, headers, params,
}) {
  function setQueryString(queryStringObj, methodReq) {
    if (methodReq === 'GET') {
      let queryString = '';
      const firstKeyProp = Object.keys(queryStringObj)[0];
      Object.keys(queryStringObj)
        .forEach((prop) => {
          queryString += `${(prop === firstKeyProp) ? '?' : '&'}${prop}=${queryStringObj[prop]}`;
        });
      return queryString;
    }
    return '';
  }
  const url = `${path}${setQueryString(data, method)}`;
  if (mocky) {
    // axios.defaults.baseURL = `http://localhost:8080/bolsatrabajoprivado/`;
    console.log(mocky);
  }
  return axios({
    method,
    url,
    data,
    responseType,
    headers,
    params,
  })
    .then(res => Promise.resolve(res))
    .catch(error => Promise.reject(error));
}