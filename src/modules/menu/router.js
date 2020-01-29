import express from 'express';

import {createMenu, deleteMenu, getMenus} from "./controller.js";
import {runAsyncWrapper} from "../../utils/asyncMiddleware.js";

const menuRouter = new express.Router();

menuRouter.post('/', runAsyncWrapper(createMenu));
menuRouter.get('/', runAsyncWrapper(getMenus));
menuRouter.delete('/:id', runAsyncWrapper(deleteMenu));

export default menuRouter;