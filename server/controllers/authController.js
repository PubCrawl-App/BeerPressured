const authController = {};

authController.setCookie = (req, res, next) => {
  const { email } = req.body;
  if (res.locals.data === true) {
  res.cookie('key', email, { expires: new Date(Date.now() + 900000), httpOnly: true })
  }
  return next();
};

authController.checkCookie = (req,res,next)=>{
  const id = req.body.id;

}
module.exports = authController;


// res.cookie('username', 'Flavio')
// This method accepts a third parameter, which contains various options:

// res.cookie('username', 'Flavio', { domain: '.flaviocopes.com', path: '/administrator', secure: true })

