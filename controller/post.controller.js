const Post = require("../model/Post");

// create new post
module.exports.createPost = (req, res, next) => {
  const post = new Post({
    author: req.body.author,
    location: req.body.location,
    imageUrl: req.body.imageUrl,
    // createdAt: req.body.createdAt,
    numberOfLikes: req.body.numberOfLikes,
    description: req.body.description,
  });
  post
    .save()
    .then(() => {
      res.status(201).json({
        message: "Post saved successfully!",
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};

// get all post list
module.exports.getPosts = (req, res, next) => {
  Post.find()
    .then((posts) => {
      console.log(posts)
      res.status(200).json(posts);
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
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
