import express from 'express';
import {runAsyncWrapper} from "../../utils/asyncMiddleware.js";
import {createMenuItem} from "./controller.js";

const menuItemRouter = new express.Router();

menuItemRouter.post('/', runAsyncWrapper(createMenuItem));
// menuRouter.put('/:id', runAsyncWrapper());
// menuRouter.get('/', runAsyncWrapper());
// menuRouter.delete('/:id', runAsyncWrapper());

export default menuItemRouter
