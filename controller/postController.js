const Post = require('../models/Post');

module.exports.getPosts = function(req,res){
    Post.find({},(err,data)=>{
        if (err){
            res.send('Error Occoured');
            console.log('Error Occured!!!!!!',err);
        }
        res.json(200,{
            posts:data,
            message:'success'
        });
    })
}
// module.exports.addPost = function(req,res){
//     Post.create({

//     })
// }