const auth = require('basic-auth')

const getAuthorizer = (name, pass) => (req, res, next) => {
  const user = auth(req)
  if (!user || user.name !== name || user.pass !== pass) {
    next()
  } else {
    res.status(401).send('Unauthorized')
    
  }
}

const admin = getAuthorizer('admin', 'secret')
const user = getAuthorizer('user', '12345')

module.exports = { admin, user, getAuthorizer }