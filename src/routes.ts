import { Router } from 'express';
import CarController from './controllers/Car.controller';

const router = Router();

const car_route = new CarController();

router.post('/cars', car_route.create);
router.get('/cars', car_route.findAllCars);

export default router;