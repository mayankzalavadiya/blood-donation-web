const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  createInventoryContoller,
  getInventoryContoller,
  getDonarsController,
  getHospitalController,
  getOrganisationController,
  getOrganisationForHospitalController,
  getInventoryHospitalContoller,
  getRecentInventoryController,
} = require("../controllers/inventoryController");

const router = express.Router();

//routes
//ADD INVENTORY || POST
router.post("/create-inventory", authMiddleware, createInventoryContoller);

//GET ALL RECORD || GET
router.get("/get-inventory", authMiddleware, getInventoryContoller);

//GET RECENT RECORD || GET
router.get(
  "/get-recent-inventory",
  authMiddleware,
  getRecentInventoryController
);

//GET HOSPITAL BLOOD RECORD || GET
router.post(
  "/get-inventory-hospital",
  authMiddleware,
  getInventoryHospitalContoller
);

//GET RECORD || GET
router.get("/get-donars", authMiddleware, getDonarsController);

//GET HOSPITAL RECORD || GET
router.get("/get-hospitals", authMiddleware, getHospitalController);

//GET  ORGANISATION RECORD || GET
router.get("/get-organisation", authMiddleware, getOrganisationController);

//GET  ORGANISATION RECORD || GET
router.get(
  "/get-organisation-for-hospital",
  authMiddleware,
  getOrganisationForHospitalController
);

module.exports = router;
