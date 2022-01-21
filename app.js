require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const logger = require('morgan');
const AppRouter = require('./routes/AppRouter');
const session = require('express-session');

const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: process.env.SSEC,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.NODE_ENV === 'production',
      maxAge: 1000 * 60 * 5
    }
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
