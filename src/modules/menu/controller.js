import MenuModel from './models/Menu.js';
import mongoose from 'mongoose';

export const createMenu = async (req, res) => {
    const {name} = req.body;
    if (!name)
        throw new Error('Name is required');

    try {
        const createdMenu = await MenuModel.create({
            name
        });

        res.status(201).json(createdMenu);
    } catch (e) {
        console.log(e);
        res.status(500).send('Something went wrong');
    }
};


export const deleteMenu = async (req, res) => {
    const {id} = req.params;
    if (!id)
        throw new Error('Id field is required');
    try {
        await MenuModel.deleteOne({
            _id: id
        });
        res.status(204).send();
    } catch (e) {
        console.log(e);
        res.status(500).send('Something went wrong');
    }
};

export const getMenus = async (req, res) => {
    const {restaurantName} = req.query;

    const filter = {};
    if (restaurantName) {
        filter.restaurantName = restaurantName
    }
    try {
        const menus = await MenuModel.find(filter);
        res.status(201).json(menus);
    } catch (e) {
        console.log(e);
        res.status(500).send('Something went wrong');
    }
};