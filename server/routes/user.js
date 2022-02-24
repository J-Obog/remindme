const { Router } = require('express');
const router = Router();
const { getUserData } = require('#controllers/user');
const { verifyAuthToken } = require('#utils/middleware');

router.get('/', verifyAuthToken('token'), getUserData);

module.exports = router;
