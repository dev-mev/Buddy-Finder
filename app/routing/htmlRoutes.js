const express = require("express");

// accesses all files in the public folder
const router = express.Router();
router.use("/", express.static("app/public"));

module.exports = router;
