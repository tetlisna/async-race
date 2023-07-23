import HistoryRouterHandler from './history-router-handler';
import { ParamsHistory } from '../../../../models/types/types';
import { IRouterResult } from '../../../../models/interfaces/IRouterResult';

class HashRouterHandler extends HistoryRouterHandler {
    params: ParamsHistory;

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

export default HashRouterHandler;
