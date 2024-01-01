import CarDB from '../database/schemaModel/schema.car';
import { Icar } from '../interfaces/car.interface';


class CarModel {
    public async create(carData: Icar) {
        const car = new CarDB(carData);
        const result = await car.save();
        return result;
    };

    public async findAllCars() {
        return await CarDB.find();
    };

    public async findOneCar(id: string) {
        return await CarDB.findById(id);
    }

    public async updateCars(id: string, data: Icar) {
        return await CarDB.findByIdAndUpdate(id, { $set: data });
    };
};

export default CarModel;