const express = require('express')
const app = express()
const auth = require('./auth')

app.set('view engine','ejs');

app.get('/route1', auth.admin, (req, res) => {
  res.render('pages/route1.ejs')
})

app.get('/route2', auth.user, (req, res) => {
  res.render('pages/route2')
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('App listening on port: ' + port)
})