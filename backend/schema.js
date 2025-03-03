const {Schema, model}= require('mongoose');

const restaurantSchema= new Schema({
    name : {
        type : String,
        required: true
    },
    location : {
        type : String,
        required : true
    },
    menuItems : [String]
})

const menuItemSchema= new Schema({
    dishName : {
        type : String,
        required : true
    },
    cost : {
        type : Number,
        required : true
    }
})

module.exports = model('restaurant',restaurantSchema);
module.exports= model('menu',menuItemSchema);