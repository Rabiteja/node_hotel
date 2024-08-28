const mongoose=require('mongoose');
 const { type } = require('os');
 const { boolean } = require('webidl-conversions');

const menuitemschema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    taste:{
        type:String,
        enum:['sweet','spicy','sour'],
        require:true
    },
    is_drink:{
        type:Boolean,
        default:false

    },
    ingridients:{
        type:[String],
        default:[]
    },
    num_sales:{
        type:Number,
        default:0
    }

});
const Menuitem=mongoose.model('menuitem',menuitemschema);
module.exports=Menuitem;