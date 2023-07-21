import { IRenderElement } from "../../../models/interfaces/IRenderElement";
import { CssClasses } from "../../../models/types/enums";
import { View } from "../view";
//import { carList } from "../../../components/view/section/garage/carList";
//import { CarBox } from "../section/garage/CarBox";
//import { carInfo } from "../../../models/types/enums";
export class WinnersView extends View {
    // pageNumber:number;
    // winnersTotal: number;
    constructor(id: string = '') {
        // this.pageNumber = pageNumber;
        // this.winnersTotal = winnersTotal;

        const params: IRenderElement = {
            tag: 'section',
            classNames: [CssClasses.WINNERS]
        }
        super(params);
        this.showAllWinners();
    }

    showAllWinners(): void {
        this.clearView();
        // carList.forEach(car => {
        //     const smallCardComponent = new CarBox();
        //     this.elementRender.addInnerElement(smallCardComponent.getHtmlElement() as HTMLElement);
        // })
    }
    clearView() {
        const element = this.elementRender.getElement() as HTMLElement;
        while (element.firstElementChild) {
            element.firstElementChild.remove();
        }
    }

}
