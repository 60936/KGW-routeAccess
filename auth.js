const auth = require('basic-auth')

const getAuthorizer = (name, pass) => (req, res, next) => {
  const user = auth(req)
  if (!user || user.name !== name || user.pass !== pass) {
    res.status(401).send('Unauthorized')
  } else {
    next()
  }
}

const admin = getAuthorizer('admin', 'supersecret')
const user = getAuthorizer('user', '12345')

module.exports = { admin, user }