import MenuItem from "./models/MenuItem.js";

export const createMenuItem = async (req, res) => {
    const {name, price, description, menuId} = req.body;
    if (!name || !price || !description || !menuId)
        throw new Error('name, price, description and menuId are required fields');
    try {
        const menuItem = await MenuItem.create({
            name,
            price,
            description,
            menuId: menuId
        });
        res.status(201).json(menuItem);
    } catch (e) {
        console.log(e);
        res.status(500).send('Something went wrong');
    }
};