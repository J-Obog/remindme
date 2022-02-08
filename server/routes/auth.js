const { Router } = require("express");
const router = Router();
const { logUserIn, registerNewUser } = require("#controllers/auth");

router.post("/login", logUserIn);
router.post("/register", registerNewUser);
router.post("/logout", logUserIn);

module.exports = router;
