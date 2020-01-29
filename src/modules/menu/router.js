import express from 'express';

import {createMenu, deleteMenu, getMenus, updateMenu} from "./controller.js";
import {runAsyncWrapper} from "../../utils/asyncMiddleware.js";

const menuRouter = new express.Router();

menuRouter.post('/', runAsyncWrapper(createMenu));
menuRouter.put('/:id', runAsyncWrapper(updateMenu));
menuRouter.get('/', runAsyncWrapper(getMenus));
menuRouter.delete('/:id', runAsyncWrapper(deleteMenu));

export default menuRouter;