import Api from "../../api/Api";
import IStorage from '../interfaces/IStorage';

interface IGarageItem {
  name: string;
  color: string;
  id: number;
}

export const garage: IGarageItem[] = [
  {
    name: 'Tesla',
    color: '#e6e6fa',
    id: 1,
  },
  {
    name: 'BMW',
    color: '#fede00',
    id: 2,
  },
  {
    name: 'Mersedes',
    color: '#6c779f',
    id: 3,
  },
  {
    name: 'Ford',
    color: '#ef3c40',
    id: 4,
  },
];

class CarStorage implements IStorage<IGarageItem> {
  api: Api;

  garage: IGarageItem[];

  constructor() {
    const resource = 'garage';
    this.api = new Api(resource);
    this.garage = garage;
  }

  getAll(): IGarageItem[] {
    return this.garage;
  }

  get(id: number): IGarageItem | undefined {
    return this.garage.find((car) => car.id === id);
  }

  create(car: IGarageItem): IGarageItem {
    console.log(this.garage);
    
    return {
      name: 'BMW',
      color: '#fede00',
      id: 2,
    };
  }

  update(id: number, data: IGarageItem): IGarageItem | undefined {
    const carIdx = this.garage.findIndex(car => car.id === id);

    if (carIdx === -1) {
        return undefined;
    }

    this.garage[carIdx] = data;
    return this.garage[carIdx];
  }

  delete(id: number): boolean {
    console.log(this.garage);
    return true;
  }
}

export default CarStorage;

