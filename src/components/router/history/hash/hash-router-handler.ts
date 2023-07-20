import { HistoryRouterHandler } from './history-router-handler';
import { paramsHistory } from '../../../../models/types/types';
import { IRouterResult } from '../../../../models/interfaces/IRouterResult';

export class HashRouterHandler extends HistoryRouterHandler {
    params: paramsHistory;

    constructor(callbackRouter: (params: IRouterResult) => void) {
        super(callbackRouter);
        this.params = {
            nameEvent: 'hashchange',
            locationField: 'hash',
        };

        window.addEventListener(this.params.nameEvent, this.handler as EventListener);
    }

    setHistory(url: string) {
        window.location.href = `${window.location.href.replace(/#(.*)$/, '')}#${url}`;
    }
}