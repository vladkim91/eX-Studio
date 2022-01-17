require('dotenv').config();

module.exports = {
  development: {
    database: 'ex_studio_development',
    host: '127.0.0.1',
    dialect: 'postgres'
  },
  test: {
    database: 'ex_studio_test',
    host: '127.0.0.1',
    dialect: 'postgres'
  },
  production: {
    database: 'ex_studio_production',
    url: process.env.DATABASE_URL,
    dialect: 'postgres',
    dialectOptions: {
      ssl: true
    }
  }
};
