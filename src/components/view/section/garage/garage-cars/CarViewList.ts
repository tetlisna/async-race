import '../garage.scss';
import Router from "src/components/router/router";
import CarStorage from "src/models/cars/CarStorage";
import { CssClasses } from "../../../../../models/types/enums"
import { IrenderView } from "../../../../../models/interfaces/IrenderView";
import { CarInfo } from "../../../../../models/types/types";
import View from "../../../view";
import Car from "./Car";

const textPrev = "previous";
const textNext = "next";

class CarViewList extends View {
    // router: Router;
    carList: CarInfo[];

    storage: CarStorage;

    constructor() {
        const params: IrenderView = {
            tag: 'div',
            classNames: [CssClasses.CAR_List]
        }
        super(params);
        this.storage = new CarStorage();
        this.carList = this.storage.getAll();
        this.configureView();
    }

    configureView() {
        this.carList.forEach((car: CarInfo) => {
            const carView = new Car(car);
            this.elementRender.addInnerElement(
                carView.getHtmlElement() as HTMLElement
            );
        });
    }
}
export default CarViewList;