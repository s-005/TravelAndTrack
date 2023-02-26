var mongoose = require('mongoose');
var destinationSchema= new mongoose.Schema({
    namelocation:String,
    uniquename:{type:String,unique:true}, 
    city:String, 
    state:String,
    image:String,
    latitude:Number,
    longitude:Number,
    points:Number
});
module.exports =mongoose.model("Destination", destinationSchema);   