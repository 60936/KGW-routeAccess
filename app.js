const express = require('express')
const app = express()
const auth = require('./auth')

// Middleware to parse incoming req bodies
app.use(express.urlencoded({extended:true}));

//using template engines
app.set('view engine','ejs');

// route to load login page                                                                  
app.get('/', (req, res)=>{
  res.render('login');
  
});

app.post('/authenticate', (req, res) => {
  const { username, password } = req.body;

  if (username === 'admin' && password === 'secret') {
    // If authentication is successful, redirect to route1
    res.redirect('/views/route1');
  } else if(username === 'user' && password === '12345') {
    res.redirect('/views/route2');

  }
  
  
  else {
    res.status(401).send('Unauthorized');
  }
});


// getting routes 
app.get('/views/route1', auth.admin, (req, res) => {
  res.render('route1');
});

app.get('/views/route2', auth.user, (req, res) => {
  res.render('route2');
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('App listening on port: ' + port)
});