import express from 'express';

import {createUserAndRestaurant, authenticate} from './controller.js';
import {runAsyncWrapper} from '../../utils/asyncMiddleware.js';

const userRouter = new express.Router();

userRouter.post('/', runAsyncWrapper(createUserAndRestaurant));
userRouter.post('/authenticate', runAsyncWrapper(authenticate));

export default userRouter;