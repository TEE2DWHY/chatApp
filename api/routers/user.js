const { getUser, sendMessage, getMessages } = require("../controllers/user");
const router = require("../utils/appRouter");

router.get("/get-user", getUser);
router.post("/new-message/:senderId/:receiverId", sendMessage);
router.get("/get-message/:senderId/:receiverId", getMessages);

module.exports = router;
