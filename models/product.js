const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: {
        type:String,
                requires:true,

    },
    description:{
            type:String,
            require:true,
    },
    richDescription:{
        type:String,
        default:''
    },
    image:{
        type:String,
        default:''
    },
    images:[{
        trype:String
    }],
    brand:{
        type:String,
        default:''
    },
    price:{
        type:Number,
        default:0
    },
        category:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Category',
            required:true
        },

    countInStock: {
        type: Number,
        required: true,
        min:0,
        max:255
    },
    rating:{
        type:Number,
        default:0
    },
    numReviews:{
        type:Number,
        default:0
    },
    idFeatured:{
        type:Boolean,
        default:false,
    },
    dateCreated:{
        type:Date,
        default:Date.now,
    },

})
   
exports.Product = mongoose.model('Product', productSchema);
