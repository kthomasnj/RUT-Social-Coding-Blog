const  User = require('../models/User');

module.exports = {
  getUser(req, res) {
    User.find()
      .then(async (user) => {
        const userObj = {
          user
        };
        return res.json(userObj);
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  }
};