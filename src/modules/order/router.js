import express from 'express';

import {createOrder, getOrders} from "./controller.js";
import {runAsyncWrapper} from "../../utils/asyncMiddleware.js";

const orderRouter = new express.Router();

orderRouter.post('/', runAsyncWrapper(createOrder));
orderRouter.get('/', runAsyncWrapper(getOrders));

export default orderRouter;