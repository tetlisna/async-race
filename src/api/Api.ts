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
    const response = await fetch(url, { method: 'get' });
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
  async updateRequest(id: number, data: string) {
    const url = `${this.endpoint}/${this.resource}/${id}`;
    const response = await fetch(url, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: data
    });
    const result = await response.json();

    return result;
  }
  async raceRequest(id: number, status: string) {
    const url = `${this.endpoint}/${this.resource}/?id=${id}&status=${status}`;
    console.log(url);
    try {
      const response = await fetch(url, {
        method: 'patch'
      });
      const result = await response.json();
      return result;
    } catch (err) {}
    // return fetch(url, {
    //   method: 'patch'
    // }).then((response) => response.json())
    //   .then((json) => (json))
    //   .catch((err) => console.error(err));
    // try {
    //   const response = await fetch(url, {
    //     method: 'patch'
    //   });
    //   const result = await response.json();
    //   return result;
    // } catch (err) {

    // }
  }

  async deleteRequest(id: number) {
    const response = await fetch(`${this.endpoint}/${this.resource}/${id}`, {
      method: 'delete',
    });
    const result = await response.json();
    return result;
  }

}

export default Api;
