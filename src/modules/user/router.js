import express from 'express';

import {createUserAndRestaurant} from './controller.js';
import {runAsyncWrapper} from '../../utils/asyncMiddleware.js';

const userRouter = new express.Router();

userRouter.post('/', runAsyncWrapper(createUserAndRestaurant));
userRouter.post('/authenticate', runAsyncWrapper(() => null));

export default userRouter;