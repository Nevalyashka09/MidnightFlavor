const models = require("../models");

const createUser = (req, res) => {
  const user = req.body;
  if (user.is_admin === true) {
    user.is_admin = 1;
  } else {
    user.is_admin = 0;
  }

  models.user
    .addUser(user)
    .then(([result]) => {
      res.location(`/users/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getUserByEmailWithPasswordAndPassToNext = (req, res, next) => {
  models.user
    .findUserByEmail(req.body)
    .then(([users]) => {
      if (users[0] != null) {
        [req.user] = users;
        next();
      } else {
        res.sendStatus(401);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};

module.exports = {
  createUser,
  getUserByEmailWithPasswordAndPassToNext,
};
