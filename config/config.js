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
    host: process.env.SEQUELIZER_HOST,
    username: process.env.SEQUELIZER_USERNAME,
    password: process.env.SEQUELIZER_PASSWORD,
    dialect: 'postgres'
  }
};
