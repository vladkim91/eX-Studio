const signIn = async (req, res) => {
  console.log('Signing in with:');
  console.log(req.payload);
};

module.exports = {
  signIn
};
