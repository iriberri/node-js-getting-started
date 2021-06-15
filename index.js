const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

console.log('.'.repeat(100));
console.log(process.env);

var url   = require('url');
var Redis = require('ioredis');

redis_uri = url.parse(process.env.REDIS_TLS_URL);
var redis = new Redis({
  port: Number(redis_uri.port),
  host: redis_uri.hostname,
  password: redis_uri.auth.split(':')[1],
  db: 0,
  tls: {
    rejectUnauthorized: false,
    requestCert: true,
    agent: false
  }
});

console.log(redis);

redis.set("foo", "bar"); 


sleep(10000);
console.log("slept");
console.log(redis.get("foo")); 


function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
} 


console.log(process.env.GATSBY_TELEMETRY_DISABLED);
console.log('.'.repeat(100));

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
