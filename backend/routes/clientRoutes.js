const express= require("express");
const userCtrl= require("../controllers/clientController");
const router =  express.Router();

router.post("/signup", userCtrl.signup);
router.post("/connexion", userCtrl.login);

module.exports = router;