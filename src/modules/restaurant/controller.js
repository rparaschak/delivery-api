import RestaurantModel from './models/Restaurant.js';

export const getRestaurantId = async (req, res) => {
  const { domainName } = req.query;

  if(!domainName) {
    return res.status(400).send('domainName is required');
  }

  try {
    const restaurant = await RestaurantModel.findOne({ domainName });
    if(restaurant) {
      res.status(200).send(restaurant);
    } else {
      res.status(404).send('Restaurant not found');
    }
  } catch (e) {
    res.status(500).send('Something went wrong');
  }
};
