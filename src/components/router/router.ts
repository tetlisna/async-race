import { Routes } from '../../models/types/types';
import { PagesTitle, ID_SELECTOR } from '../../models/types/enums';
import HistoryRouterHandler from './history/hash/history-router-handler';
import HashRouterHandler from './history/hash/hash-router-handler';
// import { IRouterResult } from "../../models/interfaces/IRouterResult";
// type resultP = { path: '', resource: '' }

export class Router {
  routes: Routes[];

  handler: HistoryRouterHandler | HashRouterHandler;

  constructor(routes: Routes[]) {
    this.routes = routes;
    this.handler = new HistoryRouterHandler(this.urlChangedHandler.bind(this));

    document.addEventListener('DOMContentLoaded', () => {
      (this.handler as HistoryRouterHandler).navigate(null);
    });
  }

  setHashHandler() {
    (this.handler as HistoryRouterHandler).disable();
    this.handler = new HashRouterHandler(this.urlChangedHandler.bind(this));
  }

  navigate(url: string) {
    (this.handler as HistoryRouterHandler).navigate(url);
  }

  urlChangedHandler(requestParams: { resource: string; path: string }) {
    const pathForFind = requestParams.resource === '' ? requestParams.path : `${requestParams.path}/${ID_SELECTOR}`;
    const route = this.routes.find((item) => item.path === pathForFind);
    
    if (!route) {
      this.redirectToNotFoundPage();
      return;
    }

    route.callback(requestParams.resource);
  }

  redirectToNotFoundPage() {
    const notFoundPage = this.routes.find( (item) => item.path === PagesTitle.NOT_FOUND );
    
    if (notFoundPage) {
      this.navigate(notFoundPage.path);
    }
  }
}

export default Router;
