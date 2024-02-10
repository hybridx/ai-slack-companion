const axios = require('axios');

const axiosConfigInstance = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    rejectUnauthorized: 'false',
  },
});

module.exports = { axiosConfigInstance };
