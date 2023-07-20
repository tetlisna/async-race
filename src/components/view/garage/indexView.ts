import { View } from '../view';
import { cssClasses, btn } from '../../../models/types/enums';
import { Create_BTN, Update_BTN } from '../../../models/State';
import { ElementRender } from '../../util/ElementRender';
import { IRenderElement } from '../../../models/interfaces/IRenderElement';
import { InputCreator } from '../../util/InputCreator';
export class IndexView extends View {
    firstField: string;
    secondField: string;
    btnsContent: string[];
    name = 'Garage';
    page_total = 0;
    page_number = 1;
    constructor() {
        const params: IRenderElement = {
            tag: 'section',
            classNames: [cssClasses.GARAGE],
        }
        super(params);
        this.btnsContent = ['race', 'update', 'generate cars']
        this.configureView();
        this.firstField = '';
        this.secondField = '';

        this.name = 'Garage';
        this.page_total = 0;
        this.page_number = 1;
    }
    configureView() {
        let inputParams: IRenderElement = {
            tag: 'input',
            classNames: [],
            textContent: btn.CREATE,
            callback: (event: KeyboardEvent) => this.keyupHandler(event, 'firstField'),
        }
        let inputCreator = new InputCreator(inputParams) as ElementRender;
        this.elementRender.addInnerElement(inputCreator)

        inputParams = {
            tag: 'input',
            classNames: [],
            textContent: btn.UPDATE,
            callback: (event: KeyboardEvent) => this.keyupHandler(event, 'secondField'),
        }
        inputCreator = new InputCreator(inputParams) as ElementRender;
        this.elementRender.addInnerElement(inputCreator)

        let inputDiv = {
            tag: 'div',
            classNames: [cssClasses.CONTAINER_input],
        }
        const btnsDivCreator = new ElementRender(inputDiv) as ElementRender;
        this.elementRender.addInnerElement(btnsDivCreator);

        this.btnsContent.forEach((btn) => {
            let btnParams = {
                tag: 'button',
                classNames: [cssClasses.BTN, cssClasses.BTNGreen],
                textContent: btn,
                //callback: (event: KeyboardEvent) => this.keyupHandler(event, 'secondField'),
            }
            const btnCreate = new ElementRender(btnParams) as ElementRender;
            btnsDivCreator.addInnerElement(btnCreate);
        })

        let pageParams: IRenderElement = {
            tag: 'h1',
            classNames: [cssClasses.HEADER_page],
            textContent: `${this.name} (${this.page_total})`,
        }
        let pageHeader = new ElementRender(pageParams) as ElementRender;
        this.elementRender.addInnerElement(pageHeader);
        let pageNum: IRenderElement = {
            tag: 'p',
            classNames: [],
            textContent: `Page ${this.page_number}`,
        }
        let pageNumCreate = new ElementRender(pageNum) as ElementRender;
        this.elementRender.addInnerElement(pageNumCreate);
    }
    setContent(view: View) {
        const element = this.elementRender.getElement() as HTMLElement;
        const currEl = this.elementRender.getElement() as HTMLElement;
        while (currEl.firstElementChild) {
            currEl.firstElementChild.remove();
        }
        this.elementRender.addInnerElement(element)
    }
    keyupHandler(event: KeyboardEvent, fieldName: 'firstField' | 'secondField') {
        if (event.target instanceof HTMLInputElement) {
            this as IndexView;
            this[fieldName] = event.target.value;
        }
    }
}