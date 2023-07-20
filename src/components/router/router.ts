import { Routes } from '../../models/types/types';
import { pages, ID_SELECTOR } from '../../models/types/enums';
import { HistoryRouterHandler } from './history/hash/history-router-handler';
import { HashRouterHandler } from './history/hash/hash-router-handler';
import { IRouterResult } from "../../models/interfaces/IRouterResult";
type resultP = { path: '', resource: '' }
export class Router {
    routes: Routes[];
    handler: HistoryRouterHandler;

    constructor(routes: Routes[]) {
        this.routes = routes;
        this.handler = new HistoryRouterHandler(this.urlChangedHandler.bind(this));
        document.addEventListener('DOMContentLoaded', () => {
            this.handler.navigate('');
            this.navigate('');
        })
    }

    setHashHandler() {
        this.handler.disable();
        this.handler = new HashRouterHandler(this.urlChangedHandler.bind(this));
    }
    navigate(url: string) {
        this.handler.navigate(url);
    }
    urlChangedHandler(requestParams: any) {
        const pathForFind = requestParams.resource === '' 
        ? requestParams.path : `${requestParams.path}/${ID_SELECTOR}`;
        const route = this.routes.find((item) => item.path === pathForFind);

        if (!route) {
            this.redirectToNotFoundPage();
            return;
        }

        route.callback(requestParams.resource);
    }

    redirectToNotFoundPage() {
        const notFoundPage = this.routes.find((item) => item.path === pages.NOT_FOUND);
        if (notFoundPage) {
            this.navigate(notFoundPage.path);
        }
    }
}