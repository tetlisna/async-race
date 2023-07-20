import { Routes } from '../../models/types/types';
import { pages, ID_SELECTOR } from '../../models/types/enums';
import { HistoryRouterHandler } from './history/hash/history-router-handler';
import { HashRouterHandler } from './history/hash/hash-router-handler';
import { IRouterResult } from "../../models/interfaces/IRouterResult";

export class Router {
    routes: Routes[];
    static navigate: Function;
    //handler: HistoryRouterHandler;

    constructor(routes: Routes[]) {
        this.routes = routes;
       // this.handler = new HistoryRouterHandler();
        document.addEventListener('DOMContentLoaded', () => {
          //this.handler.navigate('');
          Router.navigate('');
        })
    }
    setHashHandler() {
        //this.handler.disable();
       // this.handler = new HashRouterHandler(this.urlChangedHandler.bind(this));
    }
    navigate(url: string) {
        const req = this.parseUrl(url);
        const pathNotFound = req.resource === '' ? req.path : `${req.path}/ ${req.resource}`;
        const route = this.routes.find((item) => item.path === pathNotFound);

    }
    parseUrl(url: string) {
        const result = { path: '', resource: '' };
        const path = url.split('/');
        [result.path = '', result.resource = ''] = path;
        return result;
    }
    redirectToNotFoundPage() {
        const notFoundPage = this.routes.find((item) => item.path === pages.NOT_FOUND);
        if (notFoundPage) {
           // this.navigate(notFoundPage.path);
           Router.navigate(notFoundPage.path);
        }
    }
}