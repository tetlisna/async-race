import Car from "src/components/view/pages/garage/cars/Car";
import Api from "../../api/Api";
import IStorage from '../interfaces/IStorage';

type EngineStatus = 'started' | 'stopped';
export interface IEngineItem {
  id: number;
  started: string;
  stopped: string;
}
class EngineStorage {

  api: Api<IEngineItem>;

 // engine: IGarageItem[];

  constructor() {
    const resource = 'engine';
    this.api = new Api<IEngineItem>(resource);
  }

  async race(id: number, status: EngineStatus): Promise<IEngineItem | undefined>  {
    console.log(status, 'race function');
    const result = await this.api.raceRequest(id, status) as Promise<IEngineItem>;
    
    return result;
  }

  async animate(id:string) {
    let start: number,
        stopId: number,
        progress: number;

    let toggle: boolean = false;
console.log(id,'------------------------');

   //const carSelected = document.getElementById('element') as HTMLElement;
    // car.setAttribute("style",
    //     "background: blue; position: absolute; width: 50px; height: 50px; top: 50px;");

    function step(timestamp: number) {
        if (!start || progress > 400) start = timestamp;
        progress = (timestamp - start) / 10 + 50;
      //  car.style.top = progress + 'px';
        stopId = window.requestAnimationFrame(step);
    }

    function toggleAnimation(id: string) {
        if (!toggle) {
            toggle = true;
            window.requestAnimationFrame(step);
        } else {
            toggle = false;
            cancelAnimationFrame(stopId);
        }
    }

}

}

export default EngineStorage;

