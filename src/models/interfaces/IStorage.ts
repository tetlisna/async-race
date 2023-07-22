interface IStorage<T> {
    getAll(): T[];
    get(id: number): T | undefined;
    create(car: T): T;
    update(id: number, car: T): T | undefined;
    delete(id: number): boolean;
  }
  
  export default IStorage;