interface ICar {
    id: string;
}
export default class CarModel {
    car: ICar;

    constructor(car: ICar) {
        this.car = car;
    }
}