const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

console.log('.'.repeat(100));
console.log(process.env);

console.log(process.env.GATSBY_TELEMETRY_DISABLED);
console.log('.'.repeat(100));

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
