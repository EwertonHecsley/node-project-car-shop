import { Request, Response } from "express";
import CarService from "../services/Car.service";

class CarController {
    public async create(req: Request, res: Response) {
        const car = new CarService();
        const result = await car.create(req.body);
        return res.status(201).json(result)
    };

    public async findAllCars(_req: Request, res: Response) {
        const car = new CarService();
        const result = await car.findAllCars();
        return res.json(result);
    };

    public async updateCarController(req: Request, res: Response) {
        const { id } = req.params;
        const car = new CarService();

        try {
            await car.updateCarService(id, req.body);
            return res.status(204).send();
        } catch (error) {
            if (error instanceof Error) return res.status(400).json({ mensagem: error.message });
        }
    };
};

export default CarController;