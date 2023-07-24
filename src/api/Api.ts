import { Endpoint } from "src/models/types/enums";

class Api<T>{
  endpoint: string;

  resource: string;

  constructor(resource: string) {
    this.endpoint = Endpoint.url;
    this.resource = resource;
  }

  async getRequest(query = ''): Promise<T[] | T> {
    const url = `${this.endpoint}/${this.resource}${query}`;
    console.log(url, 'url');

    const response = await fetch(url, { method: 'get' });
    const result = await response.json();

    return result;
  }
  async deleteRequest(id: number): Promise<T[] | T> {
    const response = await fetch(`${this.endpoint}/${this.resource}${id}`,{ 
      method: 'delete', 
    });
    const result = await response.json();
    return result;
  }

  async postRequest(data: string) {
    const url = `${this.endpoint}/${this.resource}`;
    const response = await fetch(url, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: data
    });
    const result = await response.json();

    return result;
  }
}

export default Api;