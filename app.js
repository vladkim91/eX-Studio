require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const logger = require('morgan');
const AppRouter = require('./routes/AppRouter');
const session = require('express-session');
const PORT = process.env.PORT || 3001;

app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true
  })
);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: process.env.SSEC,
    cookie: {
      secure: false,
      maxAge: 1000 * 60 * 1000,
      httpOnly: false
    },
    store: new (require('connect-pg-simple')(session))({
      pruneSessionInterval: false,
      createTableIfMissing: true,
      conObject: {
        database: 'ex_studio_development',
        port: 5432,
        host: 'localhost',
        ssl: false
      }
    }),
    resave: true,
    saveUninitialized: true
  })
);

app.use('/api', AppRouter);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
  app.get('*', (req, res) => {
    console.log('Code is:', req.query.code);
    res.sendFile(path.join(`${__dirname}/client/build/index.html`));
  });
}

app.listen(PORT, () => console.log(`Server Started On Port: ${PORT}`));
