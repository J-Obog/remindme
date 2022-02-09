const { Router } = require("express");
const router = Router();
const { logUserIn, registerNewUser, logUserOut } = require("#controllers/auth");
const { authenticateUser } = require("#utils/middleware");

router.post("/login", logUserIn);
router.post("/register", registerNewUser);
router.post("/logout", authenticateUser, logUserOut);

module.exports = router;
