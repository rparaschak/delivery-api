import express from 'express';

import { createOrder, getOrders, markOrderAsRemoved } from './controller.js';
import { runAsyncWrapper } from '../../utils/asyncMiddleware.js';

const orderRouter = new express.Router();

orderRouter.post('/', runAsyncWrapper(createOrder));
orderRouter.get('/', runAsyncWrapper(getOrders));
orderRouter.delete('/:orderId', runAsyncWrapper(markOrderAsRemoved));

export default orderRouter;
