interface IGarageItem {
    name: string;
    color: string;
    id: number;
}

interface ICarStorage {
    getAll(): IGarageItem[];
    get(id: number): IGarageItem;
    create(car: IGarageItem): IGarageItem;
    update(id: number, car: IGarageItem): IGarageItem;
    delete(id: number): boolean;
}

class CarStorage implements ICarStorage {
    getAll(): IGarageItem[] {
        throw new Error("Method not implemented.");
    }
    get(id: number): IGarageItem {
        throw new Error("Method not implemented.");
    }
    create(car: IGarageItem): IGarageItem {
        throw new Error("Method not implemented.");
    }
    update(id: number, car: IGarageItem): IGarageItem {
        throw new Error("Method not implemented.");
    }
    delete(id: number): boolean {
        throw new Error("Method not implemented.");
    }

    // make request to jsonServer using fetch
    apiRequest(method: 'GET' | 'POST', ) {

    }
}