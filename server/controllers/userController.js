const db = require("../models/userModel.js");
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
  console.log("req body", req.body);
  //   const createUserQuery = `INSERT INTO users (email, username, password) VALUES ('${email}', '${username}', '${password}')`;
  const createUserQuery = `INSERT INTO users (email, username, password, feeling) VALUES ('${email}', '${username}', '${password}', '5') RETURNING id`;

  db.query(createUserQuery)
    .then(data => {
      console.log("data.rows[0] ", data.rows[0]);
      console.log("data.rows[0].id ", data.rows[0].id);
      console.log("res.locals ", res.locals);
      res.locals = data.rows[0];
      return next();
    })
    .catch(err => {
      next({
        log: `error found in receiving data ${err}`,
      });
    });
};
userController.createOauthUser = (req, res, next) => {
  const { email, username } = req.body;
  console.log("req body", req.body);
  //   const createUserQuery = `INSERT INTO users (email, username, password) VALUES ('${email}', '${username}', '${password}')`;
  const createUserQuery = `INSERT INTO users (email, username, password, feeling) VALUES ('${email}','${username}', '0000', 5) RETURNING id`;

  if (res.locals.data === false) {
    db.query(createUserQuery)
      .then(data => {
        // console.log('data.rows[0] ', data.rows[0]);
        // console.log('data.rows[0].id ', data.rows[0].id);
        // console.log('res.locals ', res.locals);
        // console.log('123123123', data);
        // res.locals.id = data.rows[0].id; //{id:48}
        // // data.rows[0]  { id: 48 }
        // // data.rows[0].id  48
        // // res.locals  [Object: null prototype] { data: false }
        // return next();
        if (data.rows[0].id) {
          res.locals.id = data.rows[0].id;
          return next();
        } else {
          return next();
        }
      })
      .catch(err => {
        next({
          log: `error found in receiving data ${err}`,
        });
      });
  }
};

userController.oauthCheck = (req, res, next) => {
  let { email } = req.body;
  console.log("oauthCheck ");
  const oauthQuery = `SELECT id FROM users WHERE email='${email}'`;

  db.query(oauthQuery)
    .then(data => {
      // throw new Error('theres no data')
      console.log("oauthCheck data.rows ", data.rows);

      //if the email doesn't exist, create new User
      if (!data.rows[0]) {
        console.log("inside line 68");
        console.log("data.rows[0]", data.rows[0]);
        res.locals.data = false;
        return next();
      }
      //if the email does exist, set cookie
      res.locals.data = true;
      console.log("data.rows ", data.rows);
      console.log("data.rows in verify", data.rows[0]);
      res.locals.id = data.rows[0];
      console.log("res.locals in oauth check", res.locals);
      return next();
    })
    .catch(err => {
      next({
        log: `error found in receiving data ${err}`,
      });
    });
};

userController.verifyUser = (req, res, next) => {
  let { email, password } = req.body;
  const userQuery = `SELECT id FROM users WHERE email='${email}' AND password='${password}'`;

  db.query(userQuery)
    .then(data => {
      // if no data
      // throw new Error('theres no data')
      console.log("data.rows ", data.rows);
      if (!data.rows.length) {
        res.locals.data = false;

        //return next(new Error('error: no user found'));
      }
      res.locals.data = true;
      console.log("data.rows ", data.rows);
      console.log("data.rows in verify", data.rows[0]);
      res.locals = data.rows[0];
      return next();
    })
    .catch(err => {
      next({
        log: `error found in receiving data ${err}`,
      });
    });
};

userController.getProfile = (req, res, next) => {
  let { users_id } = req.params;
  console.log("params: ", req.params);
  const profileQuery = `SELECT * FROM users WHERE id = '${users_id}'`;

  db.query(profileQuery)
    .then(data => {
      console.log("data.rows ", data.rows);
      res.locals.user = data.rows;
      return next();
    })
    .catch(err => {
      next({
        log: `error found in receiving data ${err}`,
      });
    });
};

//create users
module.exports = userController;
