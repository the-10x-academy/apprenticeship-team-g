const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/instaClone_developement_new')

const db = mongoose.connection

db.on('error',console.error.bind(console,'Error connecting to DB'));
db.once('open',()=>{
    console.log('Database connection is successful')
})

module.exports = db;