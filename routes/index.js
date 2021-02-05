const express = require("express");
const { post, path } = require("../app");
const router = express.Router();
const Post=require('../model/Posts')
const path=require('path')

/* const Post=require("../"); */ /* add the path to post schema model */


/* GET home page. */
router.get("/", function (req, res, next) {
	res.render("index", { title: "Express" });
});

router.get("/post",function(req,res,next){
	  Post.find()
	.then(()=>res.send(post));
});
/* for write db function */
module.exports.addPost = function(req,res){
    Post.uploadedPost(req,res,function(err){
        if (err){
            console.log(err);
            return
        }
        let date = new Date()
        date = date.toString()
        date = date.split(' ')
        let currDate = date[2]+' '+date[1]+' '+date[3]
        Post.create({
            owner:req.body.owner,
            caption:req.body.caption,
            location:req.body.location,
            content:path.join(__dirname,'..',Post.postPath,req.file),
            likes:0,
            createdAt:currDate,
            updatedAt:Date.now()
        })
    })
}

module.exports = router;
