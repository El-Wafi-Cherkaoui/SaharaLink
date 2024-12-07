const {Client} = require('pg')
require('dotenv').config()


module.exports = new Client({
    connectionString: process.env.db_connection_str
})