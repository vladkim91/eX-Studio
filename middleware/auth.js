const jwt = require('jsonwebtoken');
const google = require('../google_api');
const { User } = require('../models');

const authenticationMiddleware = async (req, res, next) => {
  const { credential } = req.body;

  if (!credential) return res.send({ message: 'Auth Failed' });

  const token = await google.verifyIdToken({
    idToken: credential,
    audience: process.env.GCID
  });

  const payload = token.getPayload();

  req.userAuthInfo = payload;
  next();
};

const authorizationMiddleware = async (req, res, next) => {
  const { session } = req;

  if (!session.gulid) {
    res.send({ message: 'Failed Authorization' });
    return;
  }

  const uuid = jwt.verify(session.gulid, process.env.JWTSEC, {
    complete: false
  });

  const user = await User.findOne({
    nest: true,
    raw: true,
    where: {
      uuid
    }
  });

  req.user = user;

  if (!user) {
    res.send({ message: 'Failed Authorization' });
    return;
  }

  next();
};

module.exports = {
  authenticationMiddleware,
  authorizationMiddleware
};
