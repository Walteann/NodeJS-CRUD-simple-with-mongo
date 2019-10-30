const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
// mongoosePaginate plugin instalado via npm para fazer paginate do mongo
const ProductSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    createdAt: {
        type: String,
        default: Date.now
    } 

});

// Nesse momento você informa ao mongoose que você quer usar esse plugin para paginacao
ProductSchema.plugin(mongoosePaginate);

mongoose.model('Product', ProductSchema);
