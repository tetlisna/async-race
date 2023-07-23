import IStorage from '../interfaces/IStorage';

interface ICar {
    id: string;
}
export default class CarModel {
    car: ICar;

    constructor(car: ICar) {
        this.car = car;
    }
}