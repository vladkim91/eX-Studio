const router = require('express').Router();
const { authenticationMiddleware } = require('../middleware/auth');
const controller = require('../controllers/google_account');

router.post('/googleSignIn', authenticationMiddleware, controller.signIn);

module.exports = router;
