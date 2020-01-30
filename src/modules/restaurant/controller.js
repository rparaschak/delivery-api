import RestaurantModel from './models/Restaurant.js';

export const getRestaurantId = async (req, res) => {
  const { name } = req.query;

  if (!name) {
    return res.status(400).send('name is required');
  }

  try {
    const restaurant = await RestaurantModel.findOne({ name });
    if (restaurant) {
      res.status(200).send(restaurant._id);
    } else {
      res.status(404).send('Restaurant not found');
    }
  } catch (e) {
    res.status(500).send('Something went wrong');
  }
};
