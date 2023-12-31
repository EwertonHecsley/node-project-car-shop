import { Request, Response } from "express";
import CarService from "../services/Car.service";

class CarController {
    async create(req: Request, res: Response) {
        const car = new CarService();
        const result = await car.create(req.body);
        return res.status(201).json(result)
    }
};

export default CarController;