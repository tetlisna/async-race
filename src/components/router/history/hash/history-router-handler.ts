import { IRouterResult } from "../../../../models/interfaces/IRouterResult";
import { paramsHistory } from "../../../../models/types/types";

export class HistoryRouterHandler {
    params: paramsHistory;

    callback: (params: IRouterResult) => void;

    handler: (event: PopStateEvent | string) => void;

    constructor(callback: (params: IRouterResult) => void) {
        this.params = {
            nameEvent: 'popstate',
            locationField: 'pathname',
        }
        this.callback = callback;
        this.handler = this.navigate.bind(this);

        window.addEventListener(this.params.nameEvent, this.handler as EventListener);
    }

    navigate(url: PopStateEvent| string): void {
        if (typeof url === 'string'){
            this.setHistory(url);
        }
        const urlString: string = (window as Window).location.pathname.slice(1);
        const result = {path: '', resource: ''};
        const path = urlString.split('/');
        [result.path, result.resource] = path;
    }

    disable(): void {
        window.removeEventListener(this.params.nameEvent, this.handler  as EventListener);
    }

    setHistory(url:string): void {
        window.history.pushState(null, '', `/${url}`)
    }

}