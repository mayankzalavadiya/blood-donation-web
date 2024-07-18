const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  bloodGroupDetailsController,
} = require("../controllers/analyticsController");

const router = express.Router();

//GET Blood DATA
router.get("/bloodGroups-data", authMiddleware, bloodGroupDetailsController);

module.exports = router;
