import mongoose from 'mongoose';

const RestaurantSchema = new mongoose.Schema({
    name: String,
});

export default mongoose.model('Restaurant', RestaurantSchema);