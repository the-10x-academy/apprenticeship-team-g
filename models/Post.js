const mongoose = require('mongoose');
const multer = require('multer');
const POST_PATH = '/uploads/images'

const postSchema = mongoose.Schema({
    owner:{
        type:String,
        required
    },
    location:{
        type:String,
        required
    },
    content:{
        type:String,
        required
    },
    date:{
        type:String,
        required
    },
    likes:{
        type:Number,
        required
    },
    caption:{
        type:String,
        required
    }

})
let storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, POST_PATH)
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now())
    }
  })
//statics

postSchema.statics.uploadedAvatar = multer({storage:storage}).single('content')
postSchema.statics.avatarPath = POST_PATH;
const Post = mongoose.model('Post',postSchema);
module.exports = Post