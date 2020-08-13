const authController = {};

authController.setCookie = (req, res, next) => {
  console.log('req.body ', req.body);
  const { id } = res.locals;

  console.log('res.locals.data ', res.locals.data);
  console.log('res.locals', res.locals);
  //if (res.locals.data === undefined) {
  res.cookie('key', id, { expires: new Date(Date.now() + 9000000) });
  // }
  return next();
};
authController.setAuthCookie = (req, res, next) => {
  console.log('req.body in authcookie', req.body);
  const { id } = res.locals;
  console.log('id in authcookie:', id);

  console.log('res.locals.data ', res.locals.data);
  console.log('res.locals', res.locals);
  //if (res.locals.data === undefined) {
  res.cookie('key', id, { expires: new Date(Date.now() + 9000000) });
  // }
  return next();
};

authController.checkCookie = (req, res, next) => {
  const id = req.body.id;
};
module.exports = authController;

// res.cookie('username', 'Flavio')
// This method accepts a third parameter, which contains various options:

// res.cookie('username', 'Flavio', { domain: '.flaviocopes.com', path: '/administrator', secure: true })
