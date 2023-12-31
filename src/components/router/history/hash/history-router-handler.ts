import { IRouterResult } from "../../../../models/interfaces/IRouterResult";
import { ParamsHistory } from "../../../../models/types/types";
import { rootPath } from '../../../../models/app-config';


class HistoryRouterHandler {
    params: ParamsHistory;

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

    // navigate(url: PopStateEvent| string | null): void {
    //     if (typeof url === 'string'){
    //         HistoryRouterHandler.setHistory(url);
    //     }
    //     const urlString: string = (window as Window).location.pathname.slice(1);  
    //     const result = {path: '', resource: ''};
    //     const path = urlString.split('/');
    //     [result.path = '', result.resource = ''] = path;

    //     this.callback(result);
    // }
    navigate(url: PopStateEvent | string | null): void {
        if (typeof url === 'string') {
            let navigateUrl = url;
            if (!navigateUrl.startsWith(rootPath)) {
                navigateUrl = `${rootPath}${url}`;
            }
            HistoryRouterHandler.setHistory(navigateUrl);
        }

        let urlString: string = (window as Window).location.pathname.slice(1);
        if (rootPath && urlString.startsWith(rootPath)) {
            urlString = urlString.replace(rootPath, '');
        }
        const result = { path: '', resource: '' };
        const path = urlString.split('/');
        [result.path = '', result.resource = ''] = path;

        this.callback(result);
    }

    disable(): void {
        window.removeEventListener(this.params.nameEvent, this.handler as EventListener);
    }

    static setHistory(url: string): void {
        window.history.pushState(null, '', `/${url}`)
    }
}

export default HistoryRouterHandler;
