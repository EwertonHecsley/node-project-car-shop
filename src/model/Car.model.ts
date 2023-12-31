import CarDB from '../database/schemaModel/schema.car';
import { Icar } from '../interfaces/car.interface';


class CarModel {
    async create(carData: Icar) {
        const car = new CarDB(carData);
        const result = await car.save();
        return result;
    };

    async findAllCars() {
        return await CarDB.find();
    };
};

export default CarModel;