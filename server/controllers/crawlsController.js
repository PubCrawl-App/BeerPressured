const db = require("../models/userModel.js");
const crawlsController = {}

crawlsController.getAllCrawls = (req, res, next) => {

  const allCrawlsQuery = `SELECT * FROM crawls`;

  db.query(allCrawlsQuery).then(data => {
  
  res.locals.crawls = data.rows.crawls;
  return next();
  })
  .catch(err => {
    next({ 
        log: `error found in receiving data ${err}`
    })
  })
}

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

crawlsController.getDetails = (req, res, next) => {
  console.log('req.params' , req.params)
  let {
    id
  } = req.params;

  const crawlDetailsQuery = `SELECT * FROM crawls LEFT JOIN events ON crawls.id = events.crawls_id WHERE crawls_id = '${id}';`;
  
  db.query(detailQuery).then(data => {
      
      res.locals.userCrawls = data.rows.userCrawls;
    })
    
    const attendeesQuery = `SELECT events.users_id, username FROM events  LEFT JOIN users ON events.users_id = users.id WHERE events.crawls_id = ${id};`;

  db.query(attendeesQuery).then(data => {
  
  res.locals.attendees = data.rows.usernames;
  return next();
    })
  .catch(err => {
    next({ 
        log: `error found in receiving data ${err}`
    })
  })
}

crawlsController.createCrawl = (req, res, next) => {

    let { crawlName, location, details, schedule, dateTime } = req.body;
    
    const createCrawlQuery = `INSERT INTO users (crawlName, location, details, schedule, dateTime) VALUE (${crawlName}, ${location}, ${details}, ${schedule}, ${dateTime} )`;

  db.query(createCrawlQuery).then(data => {
   res.locals.newCrawl = data.rows;
   return next();
  })
  .catch(err => {
    next({ 
        log: `error found in receiving data ${err}`
    })
  })
}
module.exports = crawlsController;