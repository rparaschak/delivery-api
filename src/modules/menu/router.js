import express from 'express';

import {createMenu, deleteMenu, getMenus, updateMenu} from "./controller.js";
import {runAsyncWrapper} from "../../utils/asyncMiddleware.js";

const menuRouter = new express.Router();

menuRouter.post('/', runAsyncWrapper(createMenu));
menuRouter.put('/:menuId', runAsyncWrapper(updateMenu));
menuRouter.get('/', runAsyncWrapper(getMenus));

// todo: remove all menu items from deleted menu as well
menuRouter.delete('/:menuId', runAsyncWrapper(deleteMenu));

export default menuRouter;