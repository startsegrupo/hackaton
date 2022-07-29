import express from 'express';
import { Router } from 'express';
import pkg from 'http-status-code';
const { StatusCode } = pkg;


const indexRouter = express.Router();

indexRouter.get('/', (req, res, next) => {
    res.status(200).send('Server running');
});

//export { router };
//ou
export default indexRouter;