import { IAppClass } from "../models/interfaces/IAppClass";
import '../style.scss';
import { HeaderView } from "./view/header/HeaderView";
import { GarageView } from "./view/garage/GarageView";

export class App implements IAppClass {
    constructor() {
        this.renderEl();
    }
    renderEl(){
        const headerView = new HeaderView();
        const garageView = new GarageView();
        // document.body.append(
        //     headerView.getHtmlElement() as HTMLElement, 
        //     garageView.getHtmlElement() as HTMLElement
        // )
    }
}
