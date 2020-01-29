import express from 'express';

import {createMenu} from "./controller.js";
import {runAsyncWrapper} from "../../utils/asyncMiddleware.js";

const menuRouter = new express.Router();

menuRouter.post('/menu', runAsyncWrapper(createMenu));

export default menuRouter;