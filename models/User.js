const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema ({
    username : {
        type : String,
        required : true,
        unique : true,
        min : 5
    },
    password : {
        required : true,
        type : String,
        minlength : 7
    },
    team : String,
    birthday : Date,
    mail : {
        type : String,
        required : true,
        unique : true
    },
    tel : String
});

module.exports = mongoose.model('Users', UserSchema, 'Users');
