const  { Router }=require ("express");
const router = Router();

const getResult =require("../controller/controller.js");
router.route('/result').get(getResult)  
module.exports = router;
