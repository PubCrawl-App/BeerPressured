const authController = {};

authController.setCookie = (req, res, next) => {
  const {username, password} = req.body;
  console.log(`password ${password}`);

  res.cookie("pass", Math.random());
  res.cookie(username, { expires: new Date(Date.now() + 900000), httpOnly: true })
  res.send("cookie sent");
  return next();
};

authController.checkCookie = (req,res,next)=>{
  const id = req.body.id;

}
module.exports = authController;


// res.cookie('username', 'Flavio')
// This method accepts a third parameter, which contains various options:

// res.cookie('username', 'Flavio', { domain: '.flaviocopes.com', path: '/administrator', secure: true })

