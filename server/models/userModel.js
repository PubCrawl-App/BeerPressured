const { Pool } = require('pg');

const PG_URI= 

'postgres://qihmvatb:mYxUFjCKKsNN7dXMGTR09QmuUvaKjEVA@ruby.db.elephantsql.com:5432/qihmvatb';


const pool = new Pool({
    connectionString: PG_URI,
});


module.exports ={
    query:( text, params, callback)=>{
        console.log('executed query', text);
        return pool.query(text,params,callback);
    },
}

