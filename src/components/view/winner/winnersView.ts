import { IRenderElement } from "../../../models/interfaces/IRenderElement";
import { cssClasses } from "../../../models/types/enums";
import { View } from "../view";

export class WinnersView extends View {
    // pageNumber:number;
    // winnersTotal: number;
    constructor(id:string) {
        // this.pageNumber = pageNumber;
        // this.winnersTotal = winnersTotal;
        
        const params: IRenderElement = {
            tag: 'section',
            classNames: [cssClasses.WINNERS]
            //textContent: 'Hello winners',
            // callback: null
        }
        super(params);
        this.configureView();
    }
    configureView(): void {
    }

}