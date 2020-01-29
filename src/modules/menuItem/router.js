import express from 'express';
import {runAsyncWrapper} from "../../utils/asyncMiddleware.js";
import {createMenuItem, getMenuItem, deleteMenuItem, updateMenuItem} from "./controller.js";

const menuItemRouter = new express.Router();

menuItemRouter.post('/', runAsyncWrapper(createMenuItem));
menuItemRouter.put('/:menuItemId', runAsyncWrapper(updateMenuItem));
menuItemRouter.get('/', runAsyncWrapper(getMenuItem));
menuItemRouter.delete('/:menuItemId', runAsyncWrapper(deleteMenuItem));

export default menuItemRouter
