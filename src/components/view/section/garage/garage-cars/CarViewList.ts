import '../garage.scss';
import Router from "src/components/router/router";
import CarStorage from "src/models/cars/CarStorage";
import View from "../../../view";
import Car from "./Car";
import { CssClasses } from "../../../../../models/types/enums"
import { IrenderView } from "../../../../../models/interfaces/IrenderView";
import { CarInfo } from "../../../../../models/types/types";

const textPrev = "previous";
const textNext = "next";

class CarViewList extends View {
    // router: Router;
    carList: CarInfo[] = [];

    constructor(public pageNumber: number, public perPage: number, public storage: CarStorage) {
        console.log(storage);
        
        const params: IrenderView = {
            tag: 'div',
            classNames: [CssClasses.CAR_List]
        }
        super(params);
        this.configureView();
    }

    async configureView(): Promise<void> {
        this.carList = await this.storage.getAll(`?_page=${this.pageNumber}&_limit=${this.perPage}`)
        this.carList.forEach((car: CarInfo) => {
            const carView = new Car(car);
            this.elementRender.addInnerElement(
                carView.getHtmlElement() as HTMLElement
            );
        });
    }
}
export default CarViewList;