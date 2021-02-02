const express = require("express");
const router = express.Router();


/* GET home page. */
router.get("/", function (req, res, next) {
	res.render("satyam", { title: "Leenesh"});
});
router.use('/api',require('./api'))

module.exports = router;
