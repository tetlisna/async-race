import '../style.scss';
import { IAppClass } from "../models/interfaces/IAppClass";
import { HeaderView } from "./view/header/HeaderView";
import { GarageView } from "./view/garage/GarageView";
import { IndexView } from "./view/garage/indexView";
import { Router } from './router/router';
//import { Page } from "./models/";

export class App implements IAppClass {
    //router: Function;
    constructor() {
       // this.router = new Router();
        this.renderEl();
    }
    renderEl(){
        const garageView = new GarageView('Page');
        const headerView = new HeaderView(garageView);
        const indexView = new IndexView();
       //garageView.setContent()
        document.body.append(
            headerView.getHtmlElement() as HTMLElement, 
         //   garageView.getHtmlElement() as HTMLElement,
            indexView.getHtmlElement() as HTMLElement
        )
    }
}
