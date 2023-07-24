import Router from "src/components/router/router";
import { IrenderView } from "../../../../models/interfaces/IrenderView";
import { CssClasses } from "../../../../models/types/enums";
import View from "../../view";

class WinnersView extends View {
    constructor(id = '') {
        // this.pageNumber = pageNumber;
        // this.winnersTotal = winnersTotal;

        const params: IrenderView = {
            tag: 'section',
            classNames: [CssClasses.WINNERS]
        }
        super(params);
        this.showAllWinners();
    }

    showAllWinners(): void {
        this.clearView();

    }

    clearView() {
        const element = this.elementRender.getElement() as HTMLElement;
        while (element.firstElementChild) {
            element.firstElementChild.remove();
        }
    }

}

export default WinnersView;