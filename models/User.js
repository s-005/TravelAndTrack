var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');

var UserSchema = new mongoose.Schema({
    fullname:String,
    username: String,
    password: String,
    points:Number,
    role: String,
    bucketlist:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Destination"
    }],
    visited:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Destination"
    }]
}, {
    timestamps: true
})

UserSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("User", UserSchema);