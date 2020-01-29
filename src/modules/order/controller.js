import OrderModel from '../order/models/Order.js';

import {extractAuth} from '../user/extractAuth.js';


export const createOrder = async (req, res) => {
    console.log(req.body);
    const {customerName, phoneNumber, items, restaurantId, description} = req.body;
    if (!customerName || !phoneNumber || !items || !restaurantId || !description)
        throw new Error('!customerName || !phoneNumber || !items || !restaurantId || !description');

    try {
        const newOrder = await OrderModel
            .create({
                customerName,
                phoneNumber,
                items,
                restaurantId,
                description,
            });


        res.status(201).json(newOrder);
    } catch (e) {
        console.log(e);
        res.status(500).send(e.message || 'Something went wrong');
    }
};

export const getOrders = async (req, res) => {
    console.log(req.body);
    const {customerName, phoneNumber, items, restaurantId, description} = req.body;
    if (!customerName || !phoneNumber || !items || !restaurantId || !description)
        throw new Error('!customerName || !phoneNumber || !items || !restaurantId || !description');

    try {
        const newOrder = await OrderModel
            .create({
                customerName,
                phoneNumber,
                items,
                restaurantId,
                description,
            });


        res.status(201).json(newOrder);
    } catch (e) {
        console.log(e);
        res.status(500).send(e.message || 'Something went wrong');
    }
};
