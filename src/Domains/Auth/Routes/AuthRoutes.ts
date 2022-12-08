import { Router } from 'express';
import Container from 'typedi';
import AuthController from '../Controllers/AuthController';

const route = Router();

const authController = Container.get<AuthController>(AuthController);

route.post('/teste', authController.singin);
export default route;
