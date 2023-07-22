import { Endpoint } from "src/models/types/enums";

class Api {
    endpoint: string;
  
    resource: string;
  
    constructor(resource: string) {
      this.endpoint = Endpoint.url;
      this.resource = resource;
    }
  }
  
  export default Api;