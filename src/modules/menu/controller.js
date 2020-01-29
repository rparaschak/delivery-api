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
    const {id} = req.body;
    if (!id)
        throw new Error('Id field is required');
    try {
        const _id = mongoose.Types.ObjectId(id);
        await MenuModel.deleteOne({
            _id
        });
        res.status(201).json('menu deleted successfully');
    } catch (e) {
        console.log(e);
        res.status(500).send('Something went wrong');
    }
};