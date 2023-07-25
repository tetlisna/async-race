interface IStorage<T> {
  getAll(): Promise<T[]>;
  get(id: number): Promise<T | undefined>;
  create(car: T): Promise<T>;
  update(id: number, data: T): Promise<T | undefined>;
  delete(id: number): Promise<boolean> ;
}

export default IStorage;