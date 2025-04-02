const express = require("express");
const router = express.Router();
const {
  sendDataToUsers,
  createUser,
} = require("../controllers/userController");

router.get("/send-data", sendDataToUsers);
router.post("/add-user", createUser);

module.exports = router;
