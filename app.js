const  client  = require('./client.js');
const redisOperation = require('./redisfunction.js');

const element = 'user:name \"AFZAL\"';



// addRedisStringData(name, "AFZAL");
// const user = getRedisData('user:name');
// console.log(user);

var user = 'user:name';
var userName = 'AKRAM';

redisOperation.setKeyValue(user, userName);
redisOperation.deleteKey(user);


// const newUser = 'user1:name "AKRAM';

// getRedisData(name);
// // saveRedisData(newUser);
// // getRedisData(newUser);




/** Hash Set Function hset ***/


var user_data = {
    name: 'Afzal',
    class: 'Computer Science',
    fee: '1150',
    salary: '1500'
} 

var user = 'user:data'


redisOperation.setRedisHmset(user, user_data);
const getUser = redisOperation.getALLRedisHset(user);
console.log(getUser);

// console.log("Application Running ");