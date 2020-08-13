const db = require('../models/userModel.js');
const crawlsController = {};

crawlsController.getAllCrawls = (req, res, next) => {
  const allCrawlsQuery = `SELECT * FROM crawls`;
  //console.log('req.params' , req.params)
  db.query(allCrawlsQuery)
    .then((data) => {
      //console.log('data.rows ', data.rows);
      res.locals.crawls = data.rows;
      return next();
    })
    .catch((err) => {
      next({
        log: `error found in receiving data ${err}`,
      });
    });
};

crawlsController.getUserCrawls = (req, res, next) => {
  //console.log('req.params' , req.params)
  let { users_id } = req.params;
  //console.log('users_id', users_id)
  const crawlsQuery = `SELECT * FROM crawls LEFT JOIN events ON crawls.id = events.crawls_id WHERE users_id = ${users_id};`;

  db.query(crawlsQuery)
    .then((data) => {
      res.locals.userCrawls = data.rows;
      return next();
    })
    .catch((err) => {
      next({
        log: `error found in receiving data ${err}`,
      });
    });
};

crawlsController.getDetails = (req, res, next) => {
  console.log('req.params', req.params);
  let { crawls_id } = req.params;
  //console.log('req.params' , req.params)
  const crawlDetailsQuery = `SELECT * FROM crawls LEFT JOIN events ON crawls.id = events.crawls_id WHERE crawls_id = '${crawls_id}';`;

  db.query(crawlDetailsQuery).then((data) => {
    res.locals.userCrawls = data.rows;
    console.log(res.locals);
    return next();
  });
};
crawlsController.getAttendees = (req, res, next) => {
  let { crawls_id } = req.params;
  const attendeesQuery = `SELECT events.users_id, username FROM events  LEFT JOIN users ON events.users_id = users.id WHERE events.crawls_id = '${crawls_id}';`;

  db.query(attendeesQuery)
    .then((data) => {
      res.locals.attendees = data.rows;
      console.log(res.locals.attendees);
      return next();
    })
    .catch((err) => {
      next({
        log: `error found in receiving data ${err}`,
      });
    });
};

crawlsController.createCrawl = (req, res, next) => {
  let { crawlname, startinglocation, details, schedule, datetime, lat, lon } = req.body;

  // INSERT INTO crawls (crawlName, location, details, schedule, dateTime) VALUES ('name', 'midtown', 'details', 'sched', 'date');

  const createCrawlQuery = `INSERT INTO crawls (crawlname, startinglocation, details, schedule, datetime, lat, lon) VALUES ('${crawlname}', '${startinglocation}', '${details}', '${schedule}', '${datetime}', '${lat}', '${lon}');`;

  console.log('req body', req.body);

  db.query(createCrawlQuery)
    .then((data) => {
      return next();
    })
    .catch((err) => {
      next({
        log: `error found in receiving data ${err}`,
      });
    });
};

module.exports = crawlsController;
