const { Router } = require('express');
const router = Router();
const { logUserIn, registerNewUser, logUserOut, verifyAuthTokens } = require('#controllers/auth');
const { verifyAuthToken } = require('#utils/middleware');

router.post('/login', logUserIn);
router.post('/register', registerNewUser);
router.post('/logout', verifyAuthToken('access'), verifyAuthToken('refresh'), logUserOut);

module.exports = router;
