import mongoose from 'mongoose';

const RestaurantSchema = new mongoose.Schema({
    displayName: String,
    domainName: String,
});

export default mongoose.model('Restaurant', RestaurantSchema);