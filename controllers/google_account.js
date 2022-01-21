const { User } = require('../models');
const { createHash } = require('crypto');
const jwt = require('jsonwebtoken');

const signIn = async (req, res) => {
  const { userGOAuthInfo } = req;

  if (!userGOAuthInfo) {
    return res.status(401).send({ message: 'Failed Authentication!' });
  }

  const uuid = createHash('sha256', process.env.HASHSEC)
    .update(userGOAuthInfo.sub + userGOAuthInfo.given_name)
    .digest('hex');

  const sessionToken = jwt.sign(uuid, process.env.JWTSEC);
  req.session.gulid = sessionToken;
  const existingUser = await User.findOne({
    where: {
      uuid
    }
  });

  if (existingUser) {
    return res.redirect('/');
  } else {
    const newUser = await User.create({
      uuid,
      username: userGOAuthInfo.given_name,
      sessionToken
    });

    return res.redirect('/');
  }
};

module.exports = {
  signIn
};
