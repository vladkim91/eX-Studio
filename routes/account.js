const router = require('express').Router();
const { authenticationMiddleware } = require('../middleware/auth');
const controller = require('../controllers/google_account');

router.post('/googleLogin', authenticationMiddleware, controller.signIn);

module.exports = router;
