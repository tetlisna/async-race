import ElementRender from "src/components/util/ElementRender";
import { Btn, CssClasses } from "../../../../../models/types/enums";
import View from "../../../view";
import { CarInfo, Routes } from "../../../../../models/types/types";
import Router from "../../../../router/router";
import { IrenderView } from "../../../../../models/interfaces/IrenderView";
import getCarTemplate from "./CarTemplate";
import getFlagTemplate from "./FlagTemplate";

interface IRouter {
    navigate(url: string): void;
}

class Car extends View {
    car: CarInfo;

    router!: IRouter;

    header: ElementRender | null = null;

    startBtn: ElementRender | null = null;

    stopBtn: ElementRender | null = null;

    constructor(car: CarInfo) {
        const params: IrenderView = {
            tag: 'arcticle',
            classNames: [CssClasses.CONTAINER_Car],
            callback: null
        }
        super(params);
        this.car = car;
        // this.router = router;
        this.configureView();
    }

    configureView() {
        this.header = new ElementRender({ tag: 'header' });
        this.elementRender.addInnerElement(this.header.getElement() as HTMLElement)
        this.renderHeader();
        this.renderEngineBtns();
        this.generateCar();
    }


    renderHeader() {
        const CARBTN_A: IrenderView = {
            tag: "button",
            classNames: [CssClasses.BTN, CssClasses.BTN_Action],
            textContent: 'A',
            // callback: this.btnAHandler.bind(this)
        }
        const BTN_A = new ElementRender(CARBTN_A);

        const CARBTN_B: IrenderView = {
            tag: "button",
            classNames: [CssClasses.BTN, CssClasses.BTN_Action],
            textContent: 'B',
            // callback: this.btnBHandler.bind(this)
        }
        const BTN_B = new ElementRender(CARBTN_B);
        
        if (this.header) {
            const selectBtn = new ElementRender({
                tag: 'button',
                classNames: [CssClasses.BTN_Action],
                textContent: Btn.SELECT,
                callback: null
            })
            const removeBtn = new ElementRender({
                tag: 'button',
                classNames: [CssClasses.BTN_Action],
                textContent: Btn.REMOVE,
                callback: null
            })

        const titleCreator = new ElementRender({
            tag: "strong",
            textContent: this.car.name,
        })
            this.header.addInnerElement(selectBtn.getElement() as HTMLElement)
            this.header.addInnerElement(removeBtn.getElement() as HTMLElement)
            this.header.addInnerElement(titleCreator.getElement() as HTMLElement)
        }
    }
    renderEngineBtns() {
        this.startBtn = new ElementRender({
            tag: 'button',
            classNames: [CssClasses.BTN, CssClasses.BTN_Action, 'active'],
            textContent: 'A',
            callback: null
        })
        this.stopBtn = new ElementRender({
            tag: 'button',
            classNames: [CssClasses.BTN, CssClasses.BTN_Action],
            textContent: 'B',
            callback: null
        })
    }

    generateCar() {
        const carElement = document.createElement('div');
        carElement.classList.add('car-item');
        carElement.innerHTML = getCarTemplate(this.car.color) + getFlagTemplate();
        this.elementRender.addInnerElement(carElement)
    }

    btnClickHandler(url: string) {
        this.router.navigate(url)
    }

}
export default Car;