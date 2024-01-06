const getUser = require("../controllers/user");
const router = require("../utils/appRouter");

router.get("/get-user", getUser);

module.exports = router;
