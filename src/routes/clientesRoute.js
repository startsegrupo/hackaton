import express from 'express';
import Router from 'express';
import * as clientesController from '../controllers/clientesController.js';

const clientesRouter = express.Router();

clientesRouter.get('/', clientesController.get);
clientesRouter.get('/:id', clientesController.getById);

export default clientesRouter;