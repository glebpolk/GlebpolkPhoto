const { User } = require('../db/models');

async function getUser(req, res, next) {
  try {
    if (req.session.user_id) {
      const user = await User.findOne({ where: { id: req.session.user_id } });
      res.locals.user = user;
    }
    next();
  } catch ({ message }) {
    res.json(message);
  }
}
module.exports = getUser;
