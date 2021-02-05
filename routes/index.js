const express = require("express");
const { post } = require("../app");
const router = express.Router();


/* GET home page. */
router.get("/", function (req, res, next) {
	res.render("satyam", { title: "Leenesh"});
});
router.use('/api',require('./api'))

router.get("/post",function(req,res,next){
	var post = Post.find();
	res.send(post);
});
/* for write db function */
router.post("/", function (req, res) {
    var got = {
        given_name : req.body.owner,
        given_location : req.body.location,
    };
    /*console.log(got,req.body)*/
    var Details = new Post({
        username : got.owner,
        location: got.given_location,
    });
    Details.save();
    res.redirect("/")
})

module.exports = router;
