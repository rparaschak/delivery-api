import mongoose from 'mongoose';

const {Types} = mongoose;

const UserSchema = new mongoose.Schema({
    userName: String,
    password: String,
    restaurant: Types.ObjectId,
});

export default mongoose.model('User', UserSchema);