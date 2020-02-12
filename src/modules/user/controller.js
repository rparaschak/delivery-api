import UserModel from './models/User.js';
import RestaurantModel from '../restaurant/models/Restaurant.js';
import {createAccessTokenForUser} from './tokens.js';
import {extractAuth} from "./extractAuth.js";

/** Creates user and restaurant */
export const createUserAndRestaurant = async (req, res) => {
    const {login, password, restaurantName, restaurantDomain} = req.body;

    if (!login || !password || !restaurantName || !restaurantDomain) {
        res.status(400).json({message: '!login || ! password || !restaurantName || !restaurantDomain'});
        throw new Error('!login || ! password || !restaurantName || !restaurantDomain');
    }

    try {
        const restaurantPromise = RestaurantModel
            .findOne({restaurantDomain});

        const userPromise = UserModel
            .findOne({login: login});

        const [restaurant, user] = await Promise.all([restaurantPromise, userPromise]);

        if (restaurant)
            throw new Error('Such restaurant domain already exists.');

        if (user)
            throw new Error('Such user name already exists.');

        const newRestaurant = await RestaurantModel
            .create({
                displayName: restaurantName,
                domainName: restaurantDomain,
            });

        const newUser = await UserModel
            .create({
                login,
                password,
                restaurant: newRestaurant.id,
            });

        const accessToken = createAccessTokenForUser(newUser.id);

        res.status(201).json({
            user: {
                login: newUser.login,
                restaurant: newUser.restaurant,
            },
            tokens: {
                accessToken
            },
        });

    } catch (e) {
        console.log(e);
        res.status(500).send(e.message);
        return;
    }
};

export const authenticate = async (req, res) => {
    const {login, password} = req.body;

    if (!login || !password) {
        res.status(400).json({message: '!login || ! password'});
        throw new Error('!login || ! password');
    }

    try {
        const user = await UserModel.findOne({login, password});

        if(!user)
            throw new Error('Wrong credentials.');

        const accessToken = createAccessTokenForUser(user.id);

        res.status(201).json({
            user: {
                login: user.login,
                restaurant: user.restaurant
            },
            tokens: {
                accessToken
            },
        });
    } catch(e){
        console.log(e);
        res.status(500).send(e.message);
    }
};

export const getUser = async (req, res) => {
    const {userId} = extractAuth(req);

    try {
        const user = await UserModel.findOne({_id: userId});
        res.status(200).json({
            user: {
                login: user.login,
                restaurant: user.restaurant
            },
            tokens: {
                accessToken: req.headers.authorization
            },
        });
    } catch(e){
        console.log(e);
        res.status(500).send(e.message);
    }
};
