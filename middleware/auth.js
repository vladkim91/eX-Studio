const jwt = require('jsonwebtoken');
const google = require('../google_api');
const { User } = require('../models');

const authenticationMiddleware = async (req, res, next) => {
  const { credential } = req.body;

  if (!credential) return res.status(400).send({ message: 'Auth Failed!' });

  const token = await google.verifyIdToken({
    idToken: credential,
    audience: process.env.GCID
  });

  const payload = token.getPayload();

  req.payload = payload;
  next();
};

module.exports = {
  authenticationMiddleware
};
