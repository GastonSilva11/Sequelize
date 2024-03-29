const express = require("express");
const router = express.Router();
const commentController = require("../controllers/commentController");

router.post("/create", commentController.store);

module.exports = router;
