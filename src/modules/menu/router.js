import express from 'express';

import {createMenu, deleteMenu} from "./controller.js";
import {runAsyncWrapper} from "../../utils/asyncMiddleware.js";

const menuRouter = new express.Router();

menuRouter.post('/', runAsyncWrapper(createMenu));
menuRouter.delete('/', runAsyncWrapper(deleteMenu));

export default menuRouter;