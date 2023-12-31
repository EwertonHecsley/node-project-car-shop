import { Icar } from "../interfaces/car.interface";
import CarModel from "../model/Car.model";

class CarService {
    async create(carData: Icar) {
        const car = new CarModel();
        const result = await car.create(carData);
        return result;
    };

    async findAllCars() {
        const car = new CarModel();
        return await car.findAllCars();
    };
};

export default CarService;