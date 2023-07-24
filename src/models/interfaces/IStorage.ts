interface IStorage<T> {
  getAll(): Promise<T[]>;
  get(id: number): T | undefined;
  create(car: T): Promise<T>;
  update(id: number, car: T): T | undefined;
  delete(id: number): Promise<boolean> ;
}

export default IStorage;