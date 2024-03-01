
const {client} = require('./client')




async function getRedisData(element) {
    return new Promise(async (resolve, reject) => {
        if (element) {
            const data = await client.get(element);
            console.log('User data => ', data);
            return data;
        }
    });
}


async function setRedisHmset(user,fields) {
    client.hmset(user, fields, (err, reply) => {
        if(err){
            console.error(err);
        }else{
            console.log(`Set fields in ${user}`);
        }
    });
}


 async function getALLRedisHset(user) {
    client.hgetall(user, (err, fields) => {
        if(err){
            console.error(err);
        }else{
            console.log(`Data in ${fields}`);
            Object.keys(fields).forEach((key) => {
                console.log(`${key}: ${fields[key]}`);
              });

        }
    });
}


function setKeyValue(key, value) {
    client.set(key, value, (err, reply) => {
      if (err) {
        console.error(err);
      } else {
        console.log(`Set ${key} to ${value}`); // Log the key-value pair set operation
      }
    });
  }
  

  function deleteKey(key) {
    client.del(key, (err, reply) => {
      if (err) {
        console.error(err);
      } else {
        console.log(`Deleted ${key}`); // Log the key deletion operation
      }
    });
  }


module.exports.getRedisData = getRedisData;
module.exports.setRedisHmset = setRedisHmset;
module.exports.getALLRedisHset = getALLRedisHset;
module.exports. setKeyValue = setKeyValue;
module.exports.deleteKey = deleteKey;