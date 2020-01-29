import mongoose from 'mongoose';

import UserModel from './models/User.js';

/** Creates user and restaurant */
export const createUserAndRestaurant = async (req, res) => {
    const { login, password, restaurantName } = req.body;

    if(!login || ! password || restaurantName){
        res.status(400).json({message: '!login || ! password || restaurantName'});
        throw new Error('!login || ! password || restaurantName');
    }

    const session = await mongoose.startSession();

    /** Creating a restaurant */


};
