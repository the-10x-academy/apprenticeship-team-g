const mongoose = require('mongoose');
const path = require('path');

const postSchema = mongoose.Schema({
    owner:{
        type: String,
        required: true
    },
    likes:{
        type:Number
    },
    content:{
        type: String,
        required:true
    },
    caption:{
        type:String
    },
    location:{
        type:String
    },
    postedAt:{
        type:String
    }
});

const Post = mongoose.model('Post',postSchema);
module.exports = Post