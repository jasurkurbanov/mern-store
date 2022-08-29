const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    _id: mongoose.ObjectId,
    name: {
        type: String,
        required: true,
        trim: true
    },
    type:{
        type: String,
        required: true
    },
    price:{
        type: String,
        required: true
    },
    cover:{
        type: String,
        required: true
    },
    longDesc:{
        type: String,
        required: true
    },
    shortDesc:{
        type: String,
        required: true
    }
},
{
    timestamps: true
})


module.exports = mongoose.model('Product', productSchema)