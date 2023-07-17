const axios = require('axios');

const url = 'https://api.chucknorris.io/jokes/random';

axios.get(url)
  .then(response => {
    console.log(response.data); 
  });