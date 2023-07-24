import '../garage.scss';
import Router from "src/components/router/router";
import CarStorage from "src/models/cars/CarStorage";
import View from "../../../view";
import Car from "./Car";
import { CssClasses } from "../../../../../models/types/enums"
import { IrenderView } from "../../../../../models/interfaces/IrenderView";
import { CarInfo } from "../../../../../models/types/types";
import ElementRender from 'src/components/util/ElementRender';

class CarViewList extends View {
    carList: CarInfo[] = [];

    constructor(
        public pageNumber: number,
        public perPage: number,
        public storage: CarStorage,
        public router:Router,
        public IndexView: ElementRender
    ) {
        
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
            const carView = new Car(car, this.IndexView);
            this.elementRender.addInnerElement(
                carView.getHtmlElement() as HTMLElement
            );
        });
    }
}
export default CarViewList;