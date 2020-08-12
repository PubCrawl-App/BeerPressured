const express = require("express");
const app = express();
const path = require("path");
const userController = require("./controllers/userController.js");
const crawlsController = require("./controllers/crawlsController.js");
const authController = require("./controllers/authController.js");
const cookieParser = require("cookie-parser");

// async function getAccessToken(code) {
//   const res = await fetch(" google's access token ", {
//     method: "POST",
//     headers: {
//       "Content-type": "application/json",
//     },
//     body: JSON.stringify({
//       // client_id,
//       // client_secret,
//       // code,
//     }),
//   });
//   const data = await res.text();
//   const params = new URLSearchParams(data);
//   return params.get("access_token");
// }

// after user verification, send cookie

/* 
login : /login
oauth: /auth/user
crawl list: /
crawl details: /:crawls_id
create crawl: /create
profile: /:users_id
map: /map
*/

app.use("/build", express.static(path.join(__dirname, "../build")));

app.use(cookieParser());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// create crawl page
app.get('/create', (req, res) => {
  return res.status(200).redirect('/')
})

//GOOD
app.post('/createCrawl', crawlsController.createCrawl, (req, res) => {
  return res.status(200).json(res.locals)
})

//GOOD
app.post('/createUser', userController.createUser, authController.setCookie, (req, res) => {
  return res.status(200).json(res.locals.user)
  .redirect('/home');
})
//GOOD
app.post('/login', userController.verifyUser, authController.setCookie, (req, res) => {
  if (res.locals.data === true) {
  return res.status(200).json(res.locals.user)
  .redirect('/home');
  }
  return res.status(400).json(res.locals.data)
  .redirect('/createUser');
})

//good
app.get('/users/:users_id', userController.getProfile, crawlsController.getUserCrawls, (req, res) => {
  return res.status(200).json(res.locals)
})

//good
// app.get('/home', crawlsController.getAllCrawls, (req, res) => {
//   console.log(res.locals.crawls)
//   return res.status(200).json(res.locals.crawls);
// })

app.get('/home', crawlsController.getAllCrawls, (req, res) => {
  console.log(res.locals.crawls)
  return res.status(200).json(res.locals.crawls);
})

//good
app.get('/crawls/:crawls_id', crawlsController.getDetails, crawlsController.getAttendees, (req, res) => {
  console.log(res);
  return res.status(200).json(res.locals)
})

//
// app.post('/createCrawl', crawlsController.createCrawl, (req, res) => {
//   return res.status(200).json(res.locals)
// })

// app.get('/map', crawlsController.getMap, (req, res) => {
//   return res.status(200).json(res.locals.map)
//   //how do we get this mappppp???
// })

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../index.html"));
});

app.listen(3000);
