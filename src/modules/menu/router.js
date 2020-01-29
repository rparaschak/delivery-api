import express from 'express';

import {createMenu} from "./controller.js";

const menuRouter = new express.Router();

menuRouter.post('/menu', createMenu);

export default menuRouter;