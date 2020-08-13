const db = require('../models/userModel.js');
const userController = {};
// app.post('/login', userController.login, (req, res) => {
//   return res.status(200).json(res.locals.user);
// })

// app.get('/:users_id', userController.getProfile, (req, res) => {
//   return res.status(200).json(res.locals.id)
// })

// TODO: create users

userController.createUser = (req, res, next) => {
  let { email, username, password } = req.body;
  console.log('req body', req.body);
  //   const createUserQuery = `INSERT INTO users (email, username, password) VALUES ('${email}', '${username}', '${password}')`;
  const createUserQuery = `INSERT INTO users (email, username, password) VALUES ('${email}', '${username}', '${password}')`;

  db.query(createUserQuery)
    .then((data) => {
      return next();
    })
    .catch((err) => {
      next({
        log: `error found in receiving data ${err}`,
      });
    });
};

userController.verifyUser = (req, res, next) => {
  let { email, password } = req.body;
  const userQuery = `SELECT * FROM users WHERE email='${email}' AND password='${password}'`;

  db.query(userQuery)
    .then((data) => {
      // if no data
      // throw new Error('theres no data')
      if (!data.rows.length) {
        res.locals.data = false;
        //return next(new Error('error: no user found'));
      }
      res.locals.data = true;
      res.locals.user = data.rows;
      console.log('data.rows in verify', data.rows);
      return next();
    })
    .catch((err) => {
      next({
        log: `error found in receiving data ${err}`,
      });
    });
};

userController.getProfile = (req, res, next) => {
  let { users_id } = req.params;
  console.log('params: ', req.params);
  const profileQuery = `SELECT * FROM users WHERE id = '${users_id}'`;

  db.query(profileQuery)
    .then((data) => {
      console.log('data.rows ', data.rows);
      res.locals.user = data.rows;
      return next();
    })
    .catch((err) => {
      next({
        log: `error found in receiving data ${err}`,
      });
    });
};

//create users
module.exports = userController;
