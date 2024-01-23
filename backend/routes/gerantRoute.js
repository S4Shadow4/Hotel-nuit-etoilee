const express= require("express");
const verifyjwts = require("../middleware/verifyjwts");
profilCtrl = require("../Controllers/profilController");

const router = express.Router();

router.get("/select",verifyjwts, profilCtrl.getALLprofil) 
module.exports = router;