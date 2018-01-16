// auth.js
const auth = require('basic-auth');
module.exports = (req, res, next) => {
  var user = auth(req);
  if (typeof user === 'undefined' || user.name !== 'dark_force' || user.pass !== 'Qwerty1') {
    // We will discuss this line later in this section.
    res.header('WWW-Authenticate', 'Basic realm="Access to the API"');
    return res.status(401).send({ error: 'Empire is stronger than you!' });
  }
  next();
};
