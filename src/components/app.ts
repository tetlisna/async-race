import '../style.scss';
import { IAppClass } from "../models/interfaces/IAppClass";
import { ID_SELECTOR } from "../models/types/enums";
import { HeaderView } from "./view/header/HeaderView";
import { GarageView } from "./view/garage/GarageView";
import { IndexView } from "./view/garage/indexView";
import { Router } from './router/router';
import { pages } from "../models/types/enums";
import { WinnersView } from './view/winner/WinnersView';
import NotFound from './view/garage/not found/not-found-view';
import View from './view/view';
import { ButtonView } from './view/header/buttonView';
//import { Router } from './router/router';
export class App implements IAppClass {
    router: Router;
    header: HeaderView | null;
    index: IndexView | null;
    //routes: Router[];
    constructor() {
        this.header = null;
        this.index = null;
        const routes = this.createRoutes();
        this.router = new Router(routes);
        this.renderEl();

    }
    renderEl() {
        const garageView = new GarageView('Page');
        this.header = new HeaderView(garageView);
        this.index = new IndexView();
        //garageView.setContent()
        document.body.append(
            this.header.getHtmlElement() as HTMLElement,
            //   garageView.getHtmlElement() as HTMLElement,
            this.index.getHtmlElement() as HTMLElement
        )
    }
    createRoutes() {
        return [
            {
                path: `${pages.INDEX}`,
                callback: () => {
                    this.setContent(pages.INDEX, new IndexView());
                },
            },
            {
                path: `${pages.WINNERS}`,
                callback: (id:string): void => {
                    this.setContent(pages.WINNERS, new WinnersView(id));
                }
            },
            {
                path: `${pages.WINNERS}/${ID_SELECTOR}}`,
                callback: (id:string): void => {
                    this.setContent(pages.WINNERS, new WinnersView(id));
                }
            },
            {
                path: `${pages.NOT_FOUND}`,
                callback: (): void => {
                    this.setContent(pages.NOT_FOUND, new NotFound());
                }
            },
        ]
    }
    setContent(pageName: string, view:View) {
        this.header!.setSelected(pageName)
        this.index!.setContent(view)

    }
}
