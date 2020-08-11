const db = require("../models/userModel.js");
const crawlsController = {}

crawlsController.getUserCrawls = (req, res, next) => {
  console.log('req.params' , req.params)
  let {
    id
  } = req.params;


  const crawlsQuery = `SELECT crawls_id, crawlName, location, dateTime FROM crawls LEFT JOIN events ON crawls.id = events.crawls_id WHERE users_id = ${id};`;

  db.query(crawlsQuery).then(data => {
  
  res.locals.userCrawls = data.rows.userCrawls;
  return next();
  })
  .catch(err => {
    next({ 
        log: `error found in receiving data ${err}`
    })
  })
}
module.exports = crawlsController;