const db = require("../models/userModel.js");
const userController = {}
// app.post('/login', userController.login, (req, res) => {
//   return res.status(200).json(res.locals.user);
// })

// app.get('/:users_id', userController.getProfile, (req, res) => {
//   return res.status(200).json(res.locals.id)
// })
 
// TODO: create users

userController.verifyUser = (req, res, next) => {
  let {
    email, 
    password
  } = req.body;
  const userQuery = `SELECT * FROM users WHERE email='${email}' AND password='${password}'`;

  db.query(userQuery).then(data => {
   res.locals.user = data.rows.username;
   return next();
  })
  .catch(err => {
    next({ 
        log: `error found in receiving data ${err}`
    })
  })
}

userController.getProfile = (req, res, next) => {
    let {
      username
    } = req.body;

    // users: username, feeling
    // all events that match user_id 
    // 

    const profileQuery = ``;
  
    db.query(profileQuery).then(data => {
     
        res.locals.user = data.rows.username;
     return next();
    })
    .catch(err => {
      next({ 
          log: `error found in receiving data ${err}`
      })
    })
  }


  //create users
module.exports = userController;