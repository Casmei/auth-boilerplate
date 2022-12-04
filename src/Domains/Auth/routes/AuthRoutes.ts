import { Router } from 'express';
import AuthController from '../controller/AuthController';

const route = Router();

route.post('/teste', AuthController.singin);
export default route;
