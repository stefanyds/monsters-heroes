import axios from 'axios'

export const getMonsters = async () => {
  let response;
  try {
    response = await axios.get('https://jsonplaceholder.typicode.com/users');
    response.statusText = "";
    response.ok = true;
    response.data.monsters = response.data;
  } catch (error) {
    response = error.response;
    response.statusText = 'Lista de monstros indisponível.';
    response.ok = false;
    response.data.monsters = [];
  }
  return response;
};

export const getPeixesPromisse = () => {
  const returnFromAxios = axios.get('http://localhost:3004/peixes')
  .then(response => {
    console.log(response);
    return response;
  })
  .catch(error => {
    console.log(error.response);
    return error.response;
  });
  return returnFromAxios;

};


export const getPeixes = async () => {
  const response = await axios.get('http://localhost:3004/peixes')
  return response.data;
};

export const getUsers = async () => {
  const response = await axios.get('http://localhost:3004/users/');
  return response;
};
