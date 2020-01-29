import MenuModel from './models/Menu.js';
import UserModel from '../user/models/User.js';

import {extractAuth} from '../user/extractAuth.js';


export const createMenu = async (req, res) => {
    const {userId} = extractAuth(req);

    const {name} = req.body;
    if (!name)
        throw new Error('Name is required');

    try {
        const user = await UserModel.findById(userId);
        const createdMenu = await MenuModel.create({
            name,
            restaurant: user.restaurant,
        });

        res.status(201).json(createdMenu);
    } catch (e) {
        console.log(e);
        res.status(500).send('Something went wrong');
    }
};


export const deleteMenu = async (req, res) => {
    const {menuId} = req.params;
    if (!menuId)
        throw new Error('Id field is required');
    try {
        await MenuModel.deleteOne({
            _id: menuId
        });
        res.status(204).send();
    } catch (e) {
        console.log(e);
        res.status(500).send('Something went wrong');
    }
};

export const getMenus = async (req, res) => {
    const {restaurantId} = req.query;

    const filter = {};
    if (restaurantId) {
        filter.restaurant = restaurantId
    }
    try {
        const menus = await MenuModel.find(filter);
        res.status(200).json(menus);
    } catch (e) {
        console.log(e);
        res.status(500).send('Something went wrong');
    }
};

export const updateMenu = async (req, res) => {
    const {menuId} = req.params;
    const {name} = req.body;

    try {
        const menu = await MenuModel.findOneAndUpdate({_id:menuId},{name},{new: true});
        if (!menu)
            return res.status(404).send(`menus with id ${menuId} not found`);
        res.status(200).json(menu);
    } catch (e) {
        console.log(e);
        res.status(500).send('Something went wrong');
    }
};