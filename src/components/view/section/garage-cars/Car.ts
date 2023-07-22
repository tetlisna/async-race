import { CssClasses } from "../../../../models/types/enums";
import { View } from "../../view";
import { carInfo } from "../../../../models/types/types";
// import { CarStorage } from "../../../../models/cars/CarStorage";
import Router from "../../../router/router";
import { Routes } from "../../../../models/types/types";
import { IRenderElement } from "../../../../models/interfaces/IRenderElement";
import { ElementRender } from "src/components/util/ElementRender";

export default class CarView extends View {
    // router: Router;
    car: carInfo;
    //  elementHTML: any;
    constructor(car: carInfo) {
        const params: IRenderElement = {
            tag: 'arcticle',
            classNames: [CssClasses.CONTAINER_Car],
            textContent: '',
            callback: null
        }
        super(params);
        this.car = car;
        //this.router = router;
        this.configureView();
    }

    configureView() {
        const { car } = this;
        const carParams: IRenderElement = {
            tag: "div",
            classNames: [],
            textContent: car.name,
            callback: null
        }
        const carCreator = new ElementRender(carParams);

        const carBTN_A: IRenderElement = {
            tag: "button",
            classNames: [CssClasses.BTNA],
            textContent: 'A',
            //callback: this.btnAHandler.bind(this)
        }
        const BTN_A = new ElementRender(carBTN_A);

        const carBTN_B: IRenderElement = {
            tag: "button",
            classNames: [CssClasses.BTNB],
            textContent: 'B',
            //callback: this.btnBHandler.bind(this)
        }
        const BTN_B = new ElementRender(carBTN_B);
        this.elementRender.addInnerElement(carCreator.getElement() as HTMLElement)
        this.elementRender.addInnerElement(BTN_A.getElement() as HTMLElement)
        this.elementRender.addInnerElement(BTN_B.getElement() as HTMLElement)
        console.log('_____________________________________');

    }
    // addCars(route:Router){
    //     carList.forEach((car:any) => {
    //         const carView = new ElementRender(car);
    //         this.elementRender.addInnerElement(carView);
    //         console.log(car, 'carView-------------');

    //     })
    // }
    // btnClickHandler(url: string) {
    //     this.router.navigate(url)
    // }

}