import express from 'express';

import {createUserAndRestaurant, authenticate, getUser} from './controller.js';
import {runAsyncWrapper} from '../../utils/asyncMiddleware.js';

const userRouter = new express.Router();

userRouter.post('/', runAsyncWrapper(createUserAndRestaurant));
userRouter.post('/authenticate', runAsyncWrapper(authenticate));
userRouter.get('/',runAsyncWrapper(getUser));

export default userRouter;