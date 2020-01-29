import express from 'express';

import {createOrder} from "./controller.js";
import {runAsyncWrapper} from "../../utils/asyncMiddleware.js";

const orderRouter = new express.Router();

orderRouter.post('/', runAsyncWrapper(createOrder));

export default orderRouter;