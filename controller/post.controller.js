const Post = require("../model/Post");
const path = require('path')
// create new post
module.exports.createPost = (req, res, next) => {
  
  Post.uploadedAvatar(req,res,function(err){
    
    console.log(req.file)
        if (err){
            console.log(err);
        }
        
        
        Post.create({
            owner:req.body.owner,
            likes:0,
            content:path.join(Post.avatarPath + '/' + req.file.filename),
            caption:req.body.caption,
            location:req.body.location,
            date: new Date().toDateString().toString(),
            
          
        },function(err,data){
            if (err){
                console.log(err);
            }
            
            res.send({
                owner:req.body.owner,
                likes:0,
                content:path.join(Post.POST_PATH + '/' + req.file.filename),
                caption:req.body.caption,
                location:req.body.location,
                date:new Date().toDateString().toString(),
                id:data._id,
                
                
                
            });
        })
  })
  // const post = new Post({
  //   author: req.body.author,
  //   location: req.body.location,
  //   imageUrl: req.body.imageUrl,
  //   // createdAt: req.body.createdAt,
  //   numberOfLikes: req.body.numberOfLikes,
  //   description: req.body.description,
  // });
  // post
  //   .save()
  //   .then(() => {
  //     res.status(201).json({
  //       message: "Post saved successfully!",
  //     });
  //   })
  //   .catch((error) => {
  //     res.status(400).json({
  //       error: error,
  //     });
  //   });
};

// get all post list
module.exports.getPosts = (req, res, next) => {
  Post.find({})
  .sort({'_id':-1})
  .exec(function(err,data){
    if (err){
      console.log(err)
      res.json(500,{'message':'error'})
    }
    res.json(200,data)
  })
};

// get post by id
module.exports.getPostById = (req, res, next) => {
  Post.findOne({
    _id: req.params.id, // pass param
    // _id: req.query.id, // using query param
  })
    .then((post) => {
      res.status(200).json(post);
    })
    .catch((error) => {
      res.status(404).json({
        error: error,
      });
    });
};

module.exports.addLike = async function(req,res){
  console.log(req.body.id)
  try{
      let doc = await Post.findOne({_id:req.body.id})
      console.log(doc)
      doc.likes += 1
      doc.save()
      res.json({
          message:'Sucessfull'
      })
      
  }catch(error){
      console.log(error)
  }
  
}
