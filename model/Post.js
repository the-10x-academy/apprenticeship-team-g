const mongoose = require('mongoose');
const multer = require('multer');
const POST_PATH = '/uploads/images'

const postSchema = mongoose.Schema({
    owner:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    likes:{
        type:Number,
        required:true
    },
    caption:{
        type:String,
        required:true
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