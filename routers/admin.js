var express = require("express");
//创建一个router对象
var router = express.Router();

router.get("/",function(req,res,next){
	res.send("admin");
})

module.exports = router;