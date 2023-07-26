import ElementRender from "src/components/util/ElementRender";
import { Btn, CssClasses } from "../../../../../models/types/enums";
import View from "../../../view";
import { CarInfo } from "../../../../../models/types/types";
import { IrenderView } from "../../../../../models/interfaces/IrenderView";
import getCarTemplate from "./CarTemplate";
import getFlagTemplate from "./FlagTemplate";
import EngineStorage from 'src/models/cars/EngineStorage';

class Car extends View {
    car: CarInfo;

    header: ElementRender | null = null;

    startBtn: ElementRender | null = null;

    stopBtn: ElementRender | null = null;

    id: number;

    storageEngine: EngineStorage;

    constructor(car: CarInfo, public indexView: ElementRender) {
        const params: IrenderView = {
            tag: 'arcticle',
            classNames: [CssClasses.CONTAINER_Car],
            callback: null
        }
        super(params);
        this.car = car;
        this.id = car.id;
        this.storageEngine = new EngineStorage();
        this.configureView();
    }

    configureView() {
        this.header = new ElementRender({ tag: 'header' });
        this.elementRender.addInnerElement(this.header.getElement() as HTMLElement)
        this.renderHeader();
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
            const startBtn = new ElementRender({
                tag: 'button',
                classNames: [CssClasses.BTN, CssClasses.BTN_Action, 'active'],
                textContent: 'A',
                callback: (event: MouseEvent) => this.carControlHandler(event),
            })
            const stopBtn = new ElementRender({
                tag: 'button',
                classNames: [CssClasses.BTN, CssClasses.BTN_Action],
                textContent: 'B',
                callback: null,
            })

            const titleCreator = new ElementRender({
                tag: 'strong',
                textContent: this.car.name,
            })
            this.header.addInnerElement(selectBtn.getElement() as HTMLElement)
            this.header.addInnerElement(removeBtn.getElement() as HTMLElement)
            this.header.addInnerElement(startBtn.getElement() as HTMLElement)
            this.header.addInnerElement(stopBtn.getElement() as HTMLElement)
            this.header.addInnerElement(titleCreator.getElement() as HTMLElement)
        }
    }

    carControlHandler(event: MouseEvent) {
        
        this.storageEngine.race(this.id, 'started')
        //console.log('this.id', this.storageEngine.race);
    }

    deleteCar(event: MouseEvent) {
        if (event.target instanceof HTMLButtonElement) {
            const deleteCarEvent = new CustomEvent('delete_car', {
                detail: this.car.id,
            });
            (this.indexView.getElement() as HTMLElement).dispatchEvent(deleteCarEvent)
        }
    }

    selectCar(event: MouseEvent) {
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
        (carElement.getElement() as HTMLElement).innerHTML += getCarTemplate(this.car.color);
        (carElement.getElement() as HTMLElement).innerHTML += getFlagTemplate();
        this.elementRender.addInnerElement(carElement);
    }

    startEngine(event: MouseEvent) {
        let start: number,
            stopId: number,
            progress: number;

        let toggle: boolean = false;
        console.log('------------------------');

        const carSelected = document.getElementById('element') as HTMLElement;
        carSelected.setAttribute("style",
            "background: blue; position: absolute; width: 50px; height: 50px; top: 50px;");

        function step(timestamp: number) {
            if (!start || progress > 400) start = timestamp;
            progress = (timestamp - start) / 10 + 50;
            carSelected.style.top = progress + 'px';
            stopId = window.requestAnimationFrame(step);
        }

        function toggleAnimation() {
            if (!toggle) {
                toggle = true;
                window.requestAnimationFrame(step);
            } else {
                toggle = false;
                cancelAnimationFrame(stopId);
            }
        }

    }

}
export default Car;