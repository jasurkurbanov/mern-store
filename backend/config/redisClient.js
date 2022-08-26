const Redis = require('redis')
const redisClient = Redis.createClient();

redisClient.connect().then(()=> console.log('Redis Client Connected'))

module.exports = redisClient