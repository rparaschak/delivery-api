import mongoose from 'mongoose';

const {Types} = mongoose;

const UserSchema = new mongoose.Schema({
    login: String,
    password: String,
    restaurant: Types.ObjectId,
});

export default mongoose.model('User', UserSchema);