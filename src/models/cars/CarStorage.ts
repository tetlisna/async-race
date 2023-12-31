import Api from "../../api/Api";
import IStorage from '../interfaces/IStorage';

export interface IGarageItem {
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

const autoMakes = [
  ['Audi', ['A1', 'A7 Sportback', 'Q3', 'S6', 'TT']],
  ['BMW', ['M5', 'X1', 'X5', 'X6', 'X7']],
  ['Mercedes', ['E-Class', 'S-Class', 'G-Class', 'M-Class', 'C-Class']],
  ['Toyota', ['Avalon', 'Camry', 'C-HR', 'Corolla', 'Highlander']],
  ['Lexus', ['CT', 'HS', 'LC', 'SC', 'UX']],
  ['Ford', ['Mondeo', 'Mustang', 'Scorpio', 'Sierra', 'Kuga']],
  ['Mazda', ['CX-5', 'CX-7', 'MX-5', 'RX-7', 'RX-8']],
  ['Honda', ['Jazz', 'Odyssey', 'Passport', 'HR-V', 'Pilot']],
  ['Tesla', ['Model 3', 'Model S', 'Model X', 'Model Y', 'Roadster']],
];

const randomColor = () => {
  let color = Math.floor(Math.random() * 16777215).toString(16);
  if (color.length === 5) color += 'f';
  if (color.length === 4) color += 'ff';
  if (color.length === 3) color += 'fff';
  return `#${color}`;
}

const randomAutoMake = () => {
  const [make, models] =
    autoMakes[Math.floor(Math.random() * autoMakes.length)];
  const model = models[Math.floor(Math.random() * models.length)];

  return `${make} ${model}`
};
class CarStorage implements IStorage<IGarageItem> {
  api: Api<IGarageItem>;

  garage: IGarageItem[];

  constructor() {
    const resource = 'garage';
    this.api = new Api<IGarageItem>(resource);
    this.garage = garage;
  }

  async generateCars(amount = 100): Promise<void> {
    let counter = 0;
    const promises = [];

    while (counter < amount) {
      const car: Pick<IGarageItem, 'name' | 'color'> = {
        name: randomAutoMake(),
        color: randomColor(),
      }
      promises.push(this.create(car))

      counter += 1;
    }
    await Promise.all(promises);
  }

  async getAll(query = ''): Promise<IGarageItem[]> {
    // let count = response.headers.get('X-Total-Count'); return {count, this.api.getRequest(query) as Promise<IGarageItem[]>}
    return this.api.getRequest(query) as Promise<IGarageItem[]>;
  }

  async get(id: number): Promise<IGarageItem | undefined> {
    return this.api.getRequest(`/${id}`) as Promise<IGarageItem>;
  }

  async create(car: Pick<IGarageItem, 'name' | 'color'>): Promise<IGarageItem> {
    return this.api.postRequest(JSON.stringify(car));
  }

  async update(id: number, car: Pick<IGarageItem, 'name' | 'color'>): Promise<IGarageItem | undefined> {
    const result = this.api.updateRequest(id, JSON.stringify(car)) as Promise<IGarageItem>;
    return result;
  }

  async delete(id: number): Promise<boolean> {
    const result = await this.api.deleteRequest(id);
    return !!result;
  }
}

export default CarStorage;

