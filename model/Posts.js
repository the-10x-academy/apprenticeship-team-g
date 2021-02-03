const mongoose = require('mongoose');
const path = require('path');

const postSchema = mongoose.Schema({
    owner:{
        type: String,
        required: true
    },
    likes:{
        type:Number,
        required: true
    },
    content:{
        type: String,
        required:true
    },
    caption:{
        type:String,
        required: true
    },
    location:{
        type:String,
        required: true
    },
    postedAt:{
        type:String,
        required: true
    }
});

const Post = mongoose.model('Post',postSchema);
module.exports = Post