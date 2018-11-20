var redis = require('redis');
var redis_config = require('./config').redis;

var options = { "no_ready_check": true };

var client = redis.createClient(redis_config.port, redis_config.host, options);
client.auth(redis_config.password);

client.on("error", err => {
    console.log("Redis Error : " + err);
});

module.exports = client;