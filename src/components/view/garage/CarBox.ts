import { cssClasses } from "../../../models/types/enums";
import { View } from "../view";
import { carInfo } from "../../../models/types/types";
import { carList} from "./carList";
import { Car } from "./Car";

export class CarBox extends View {
    constructor() {
        const params = {
            tag: 'article',
            classNmes: [cssClasses.CONTAINER_Car],
            textContent: '',
            callback: null
        }
        super(params);
        this.configureView();
    }
    configureView(): void {
        carList.forEach((car: any) => {
            const carView = new Car(car);
            this.elementRender.addInnerElement(carView.getHtmlElement() as HTMLElement);
            console.log(carView, 'carView-------------');
            
        })
    }

}