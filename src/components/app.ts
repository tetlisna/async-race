import '../style.scss';
import { IAppClass } from "../models/interfaces/IAppClass";
import { ID_SELECTOR, PagesTitle } from "../models/types/enums";
import HeaderView from "./view/header/HeaderView";
import IndexView from "./view/section/garage/IndexView";
import Section from "./view/section/Section";
import Router from './router/router';
import WinnersView from './view/winner/WinnersView';
import NotFound from './view/section/not found/not-found-view';
import View from './view/view';
import CarView from './view/section/garage/garage-cars/Car';
// import state from './state/state';
class App implements IAppClass {
    router: Router;

    header: HeaderView | null;

    section: Section | null;

    index: IndexView | null;

    constructor() {
        this.header = null;
        // const state = new State();
        this.section = null;
        this.index = null;
        const routes = this.createRoutes();
        this.router = new Router(routes);
    }

    renderView() {
        this.header = new HeaderView(this.router);
        this.section = new Section();
        // this.index = new IndexView('1');
        document.body.append(
            this.header.getHtmlElement() as HTMLElement,
            this.section.getHtmlElement() as HTMLElement,
        )
    }

    createRoutes() {
        return [
            {
                path: ``,
                callback: () => {
                    this.setContent(PagesTitle.INDEX, new IndexView('1'));
                },
            },
            {
                path: `${PagesTitle.INDEX}`,
                callback: (id: string): void => {
                    this.setContent(PagesTitle.WINNERS, new IndexView(''));
                }
            },
            {
                path: `${PagesTitle.WINNERS}`,
                callback: (id: string): void => {
                    this.setContent(PagesTitle.WINNERS, new WinnersView(id));
                }
            },
            {
                path: `${PagesTitle.WINNERS}/${ID_SELECTOR}`,
                callback: (id: string): void => {
                    this.setContent(PagesTitle.WINNERS, new WinnersView(id));
                }
            },
            {
                path: `${PagesTitle.NOT_FOUND}`,
                callback: (): void => {
                    this.setContent(PagesTitle.NOT_FOUND, new NotFound());
                },
            },
        ];
    }

    setContent(pageName: string, view: View) {
        if (this.header) {
            this.header.setSelected(pageName);
        }
        if (this.section) {
            this.section.setContent(view);
        }
    }
}

export default App;