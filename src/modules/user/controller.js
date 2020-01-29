import mongoose from 'mongoose';

import UserModel from './models/User.js';
import RestaurantModel from '../restaurant/models/Restaurant.js';

/** Creates user and restaurant */
export const createUserAndRestaurant = async (req, res) => {
    const {login, password, restaurantName} = req.body;

    if (!login || !password || !restaurantName) {
        res.status(400).json({message: '!login || ! password || restaurantName'});
        throw new Error('!login || ! password || restaurantName');
    }

    try {
        const restaurantPromise = RestaurantModel
            .findOne({name: restaurantName});

        const userPromise = UserModel
            .findOne({login: login});

        const [restaurant, user] = await Promise.all([restaurantPromise, userPromise]);

        if (restaurant)
            throw new Error('Such restaurant name already exists.');

        if (user)
            throw new Error('Such user name already exists.');

        const newRestaurant = await RestaurantModel
            .create({
                name: restaurantName,
            });

        const newUser = await UserModel
            .create({
                login,
                password,
                restaurant: newRestaurant.id,
            });

        res.status(201).json(newUser);

    } catch (e) {
        console.log(e);
        res.status(500).send(e.message);
        return;
    }
};
