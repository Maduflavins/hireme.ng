const mongoose = require('mongoose');
const deepPopulate = require('mongoose-deep-populate')(mongoose);
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    buyer:{ type:Schema.Types.ObjectId, ref: 'User'},
    seller:{ type:Schema.Types.ObjectId, ref: 'User'},
    dev:{ type:Schema.Types.ObjectId, ref: 'Dev'},
    messages: [{
        type: Schema.Types.ObjectId, ref: 'Message'
        
    }],
    created: { type: Date, default: Date.now }
})

OrderSchema.plugin(deepPopulate);



module.exports = mongoose.model('Order', OrderSchema);