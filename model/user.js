var mongoose = require('mongoose');

var user = new mongoose.Schema({
    avatar: String,
    username: String,
    email: {
        type: String,
        unique: true,
        require: true
    },
    password: String,
    desc: String
},{versionKey:false , timestamps: { createdAt: 'createdTime',updateAt: 'updateTime' } });
 
module.exports = mongoose.model('user',user)