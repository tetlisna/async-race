import ElementRender from "src/components/util/ElementRender";
import { Btn, CssClasses } from "../../../../../models/types/enums";
import View from "../../../view";
import { CarInfo } from "../../../../../models/types/types";
import { IrenderView } from "../../../../../models/interfaces/IrenderView";
import getCarTemplate from "./CarTemplate";
import getFlagTemplate from "./FlagTemplate";


class Car extends View {
    car: CarInfo;

    header: ElementRender | null = null;

    startBtn: ElementRender | null = null;

    stopBtn: ElementRender | null = null;

    constructor(car: CarInfo, public indexView: ElementRender) {
        const params: IrenderView = {
            tag: 'arcticle',
            classNames: [CssClasses.CONTAINER_Car],
            callback: null
        }
        super(params);
        this.car = car;
        this.configureView();
    }

    configureView() {
        this.header = new ElementRender({ tag: 'header' });
        this.elementRender.addInnerElement(this.header.getElement() as HTMLElement)
        this.renderHeader();
        this.renderEngineBtns();
        this.renderCar();
    }

    renderHeader() {
        if (this.header) {
            const selectBtn = new ElementRender({
                tag: 'button',
                classNames: [CssClasses.BTN_Action],
                textContent: Btn.SELECT,
                callback: (event: MouseEvent) => this.selectCar(event)
            })
            const removeBtn = new ElementRender({
                tag: 'button',
                classNames: [CssClasses.BTN_Action],
                textContent: Btn.REMOVE,
                callback: (event: MouseEvent) => this.deleteCar(event),
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

    deleteCar(event: MouseEvent) {
        if (event.target instanceof HTMLButtonElement) {
            const deleteCarEvent = new CustomEvent('delete_car', {
                detail: this.car.id,
            });
            (this.indexView.getElement() as HTMLElement).dispatchEvent(deleteCarEvent)
        }
    }

    selectCar(event: MouseEvent){
        if (event.target instanceof HTMLButtonElement) {
            const selectCarEvent = new CustomEvent('select_car', {
                detail: this.car.id,
            });
            (this.indexView.getElement() as HTMLElement).dispatchEvent(selectCarEvent)
        }
    }

    renderCar() {
        const carElement = new ElementRender({
            tag: 'div',
            classNames: [CssClasses.CAR_Item],
        });
        (carElement.getElement() as HTMLElement).id = `car-${this.car.id}`;

        if (this.startBtn) {
            carElement.addInnerElement(this.startBtn.getElement() as HTMLElement);
        }

        if (this.stopBtn) {
            carElement.addInnerElement(this.stopBtn.getElement() as HTMLElement);
        }
        (carElement.getElement() as HTMLElement).innerHTML += getCarTemplate(this.car.color);
        (carElement.getElement() as HTMLElement).innerHTML += getFlagTemplate();
        this.elementRender.addInnerElement(carElement);
    }

}
export default Car;