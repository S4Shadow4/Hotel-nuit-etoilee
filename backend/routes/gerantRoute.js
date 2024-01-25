const express= require("express");
const gerantCtrl= require("../controllers/gerantController");
const router =  express.Router();

router.post("/signup", gerantCtrl.signup);
router.post("/connexion", gerantCtrl.login); 
router.get("/informations", gerantCtrl.getInformations); 
module.exports = router;            