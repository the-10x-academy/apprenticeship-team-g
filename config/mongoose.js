const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/insta_developement')


const db = mongoose.connection

db.on('error',console.error.bind(console,'Error Connecting to db'))

db.once('open',function(){
    console.log('Database is sucessfully connected');
})

module.exports = db;