import express from 'express';
import {runAsyncWrapper} from "../../utils/asyncMiddleware.js";
import {createMenuItem, getMenuItem} from "./controller.js";

const menuItemRouter = new express.Router();

menuItemRouter.post('/', runAsyncWrapper(createMenuItem));
// menuItemRouter.put('/:id', runAsyncWrapper());
menuItemRouter.get('/', runAsyncWrapper(getMenuItem));
// menuItemRouter.delete('/:id', runAsyncWrapper());

export default menuItemRouter
