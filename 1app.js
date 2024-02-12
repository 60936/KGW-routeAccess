const express = require('express');
const mysql = require('mysql2'); // Import MySQL library
const app = express();
const auth = require('./1auth');
const User = require('./1user'); // Import the User model

// Middleware to parse incoming req bodies
app.use(express.urlencoded({ extended: true }));

// Using template engines
app.set('view engine', 'ejs');

// Route to load login page
app.get('/', (req, res) => {
  res.render('login');
});

app.post('/authenticate', (req, res) => {
  const { username, password } = req.body;

  // Query the database for the user's credentials using the User model
  User.findOne({ username, password }, (err, foundUser) => {
    if (err || !foundUser) {
      return res.status(401).send('Unauthorized');
    }

    // Proceed with authentication logic based on user data
    if (user.password === password) {
        if (user.role === 'admin') {
          res.redirect('/views/route1');
        } else if (user.role === 'user') {
          res.redirect('/views/route2');
        } else {
        res.status(401).send('Unauthorized');
      }
    }
  });
});

// Getting routes
app.get('/views/route1', auth.admin, (req, res) => {
  res.render('route1');
});

app.get('/views/route2', auth.user, (req, res) => {
  res.render('route2');
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('App listening on port: ' + port);
});