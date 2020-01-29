import express from 'express';

import {createUserAndRestaurant} from './controller.js';

const userRouter = new express.Router();

userRouter.post('/', createUserAndRestaurant);
userRouter.post('/authenticate');

export default userRouter;