import MenuModel from './models/Menu.js';

export const createMenu = async (req, res) => {
    if (!req.body.name)
        throw new Error('Name is required');

    try {
        const createdMenu = await MenuModel.create({
            name
        });

        res.status(201).json(createdMenu);
    } catch (e) {
        console.log(e);
        res.send('Something went wrong');
    }
};
