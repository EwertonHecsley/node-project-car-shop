import { Icar } from "../interfaces/car.interface";
import CarModel from "../model/Car.model";

class CarService {

    constructor(private carModel = new CarModel) { }

    public async create(carData: Icar) {
        const result = await this.carModel.create(carData);
        return result;
    };

    public async findAllCars() {
        return await this.carModel.findAllCars();
    };

    public async updateCarService(id: string, data: Icar) {
        const carExist = await this.carModel.findOneCar(id);
        if (!carExist) throw new Error('Carro não encontrado.');

        return await this.carModel.updateCars(id, data);
    };

};

export default CarService;