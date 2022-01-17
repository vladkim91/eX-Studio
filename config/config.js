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
    database: 'd4lfdvpt6be2qq',
    url: process.env.DATABASE_URL,
    host: 'ec2-34-199-200-115.compute-1.amazonaws.com',
    username: 'cntwejzmzppuxa',
    password:
      '060a41bbfbe383c1f931195cb02ff856598455941d5b4271e6f253c05f4fee74',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
};
