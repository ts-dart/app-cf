require('dotenv').config();

module.exports = {
  development: {
    username: process.env.HOSTNAME || 'root',
    password: process.env.DB_PASSWORD || 'minhasenhaA1$',
    database: process.env.DB_NAME || 'cashforce',
    host: '127.0.0.1',
    dialect: 'mysql'
  }
}
