import { CssClasses } from "../../../models/types/enums"
import { IRenderElement } from "../../../models/interfaces/IRenderElement";
import { carInfo } from "../../../models/types/types";
import { View } from "../view";
import { ElementRender } from "../../util/ElementRender";

const textCar = "hhhh";

export class Car extends View {
    car: carInfo;

    constructor(car: carInfo) {
        const params: IRenderElement = {
            tag: 'article',
            classNames: [CssClasses.CONTAINER_Car],
            textContent: textCar,
            callback: null
        }
        super(params);
        this.car = car;
        this.configureView();
    }

    configureView() {
        const { car } = this
        const carParams: IRenderElement = {
            tag: "div",
            classNames: [],
            textContent: car.name,
            callback: null
        }
        const divCreator = new ElementRender(carParams);

        const carBTN_A: IRenderElement = {
            tag: "button",
            classNames: [CssClasses.BTNA],
            textContent: 'A',
            callback: null
        }
        const BTN_A = new ElementRender(carBTN_A);

        const carBTN_B: IRenderElement = {
            tag: "button",
            classNames: [CssClasses.BTNB],
            textContent: 'B',
            callback: null
        }
        const BTN_B = new ElementRender(carBTN_B);
        this.elementRender.addInnerElement(divCreator.getElement() as HTMLElement)
        this.elementRender.addInnerElement(BTN_A.getElement() as HTMLElement)
        this.elementRender.addInnerElement(BTN_B.getElement() as HTMLElement)

    }
}