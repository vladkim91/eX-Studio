const { User } = require('../models');
const bcrypt = require('bcrypt');

const signIn = async (req, res) => {
  const { userGOAuthInfo } = req;

  if (!userGOAuthInfo) {
    return res.status(401).send({ message: 'Failed Authentication!' });
  }

  const existingUser = await User.findOne({
    where: {}
  });

  res.status(200).send({ message: 'Success' });
};

module.exports = {
  signIn
};
