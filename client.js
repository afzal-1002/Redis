// import {Redis} from 'ioredis';
const { Redis } = require('ioredis');

const client = new Redis();



module.exports = { client };