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

  req.userAuthInfo = payload;
  next();
};

const authorizationMiddleware = async (req, res, next) => {
  const { session } = req;

  if (!session.gulid) return res.redirect('/landing', 401);

  const uuid = jwt.verify(session.gulid, process.env.JWTSEC, {
    complete: false
  });

  const userInfo = await User.findOne({
    where: {
      uuid
    }
  });

  if (!userInfo) {
    return res.redirect('/landing', 401);
  }

  next();
};

module.exports = {
  authenticationMiddleware,
  authorizationMiddleware
};
