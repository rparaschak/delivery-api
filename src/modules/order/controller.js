import mongoose from 'mongoose';

import OrderModel from './models/Order.js';
import UserModel from '../user/models/User.js';
import {extractAuth} from '../user/extractAuth.js';


export const createOrder = async (req, res) => {
    console.log(req.body);
    const {customerName, phoneNumber, items, restaurantId, description} = req.body;
    if (!customerName || !phoneNumber || !items || !restaurantId || !description)
        throw new Error('!customerName || !phoneNumber || !items || !restaurantId || !description');

    try {
        const newOrder = await OrderModel
            .create({
                restaurant: mongoose.Types.ObjectId(restaurantId),
                customerName,
                phoneNumber,
                items,
                description,
            });


        res.status(201).json(newOrder);
    } catch (e) {
        console.log(e);
        res.status(500).send(e.message || 'Something went wrong');
    }
};

export const getOrders = async (req, res) => {
    const {userId} = extractAuth(req);
    const user = await UserModel.findById(userId);

    const dateFrom = new Date(req.query.dateFrom || 0);
    const dateTo = new Date(req.query.dateTo || Date.now());

    const filter = {
        restaurant: user.restaurant,
        dateCreated: {
            $gte: dateFrom,
            $lte: dateTo,
        },
    };

    if(!user)
        throw new Error('User not found');

    try {
        const orders = await OrderModel.find(filter);

        res.status(200).json(orders);
    } catch (e) {
        console.log(e);
        res.status(500).send(e.message || 'Something went wrong');
    }
};
