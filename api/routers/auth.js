const router = require("../utils/appRouter");
const { register } = require("../controllers/auth");

router.post("/register", register);

module.exports = router;
