const router = require('express').Router();
const authController = require('./controllers/authController.js');
const userController = require('./controllers/userController.js');

router.post('/verify', userController.verifyUser, authController.setCookie, (req, res) => {
  res.status(200).redirect('/');
});

module.exports = router;
