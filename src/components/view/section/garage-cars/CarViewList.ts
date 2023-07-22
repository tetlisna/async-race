import { CssClasses } from "../../../../models/types/enums"
import { IRenderElement } from "../../../../models/interfaces/IRenderElement";
import { carInfo } from "../../../../models/types/types";
import { View } from "../../view";
import { ElementRender } from "../../../util/ElementRender";
import Router from "src/components/router/router";
import CarView from "./Car";
import carList from "../garage-cars/carList";
import Car from "./Car";
import CarStorage from "src/models/cars/CarStorage";

const textCar = "hhhh";
const textPrev = "previous";
const textNext = "next";

export class CarList extends View {
    //router: Router;
    carList: carInfo[];
    storage:  CarStorage;
    constructor() {
        const params: IRenderElement = {
            tag: 'div',
            classNames: [CssClasses.CONTAINER_Car],
        }
        super(params);
        this.storage = new CarStorage();
        this.carList = this.storage.getAll();
        this.configureView();
    }

    configureView() {
        this.carList.forEach((car: carInfo) => {
            const carView = new Car(car);
            this.elementRender.addInnerElement(
                carView.getHtmlElement() as HTMLElement
            )
        })
    }
    //     const carParams: IRenderElement = {
    //         tag: "div",
    //         classNames: [],
    //         textContent: '',
    //         // callback: null
    //     }
    //     const carCreator = new ElementRender(carParams);

    //     const carBTN_A: IRenderElement = {
    //         tag: "button",
    //         classNames: [CssClasses.BTNA],
    //         textContent: 'A',
    //         //callback: this.btnAHandler.bind(this)
    //     }
    //     const BTN_A = new ElementRender(carBTN_A);

    //     const carBTN_B: IRenderElement = {
    //         tag: "button",
    //         classNames: [CssClasses.BTNB],
    //         textContent: 'B',
    //         //   callback: this.btnBHandler.bind(this)
    //     }
    //     const BTN_B = new ElementRender(carBTN_B);
    //     this.elementRender.addInnerElement(carCreator.getElement() as HTMLElement)
    //     this.elementRender.addInnerElement(BTN_A.getElement() as HTMLElement)
    //     this.elementRender.addInnerElement(BTN_B.getElement() as HTMLElement)
    //     console.log('_____________________________________');

    // }
    // setCallBack(callback: Function) {
    //     this.callback = callback;
    // }
    // btnAHandler(){
    //     console.log('you clicked on A');

    // }
    // btnBHandler(){
    //     console.log('you clicked on B');
    // }
    // showCar(router: Router, id: number) {
    //     const selectedCar = carList.find((car) => car.id === id);
    //     const carComponent = new CarView(selectedCar as carInfo, router);
    //     this.elementRender.addInnerElement(carComponent.getHtmlElement() as HTMLElement)
    // }
}