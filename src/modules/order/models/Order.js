import mongoose from 'mongoose';

const {Types} = mongoose;

const OrderSchema = new mongoose.Schema({
    restaurant: Types.ObjectId,
    description:  String,
    customerName:  String,
    phoneNumber: String,
    items: [{
        itemId: Types.ObjectId,
        count: Number,
    }],
    dateCreated:  { type: Date, default: Date.now },
});

OrderSchema.index({ restaurant: 1, dateCreated: 1 });

export default mongoose.model('Order', OrderSchema);