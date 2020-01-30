import express from 'express';

import { getRestaurantId } from './controller.js';
import { runAsyncWrapper } from '../../utils/asyncMiddleware.js';

const restaurantRouter = new express.Router();

restaurantRouter.get('/', runAsyncWrapper(getRestaurantId));

export default restaurantRouter;
