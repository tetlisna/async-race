import { View } from '../../view';
import { CssClasses, Btn } from '../../../../models/types/enums';
import { ElementRender } from '../../../util/ElementRender';
import { IRenderElement } from '../../../../models/interfaces/IRenderElement';
import { InputCreator } from '../../../util/InputCreator';

export class IndexView extends View {
    firstField: string;

    secondField: string;

    btnsContent: string[];

    name = 'Garage';

    page_total = 0;

    page_number = 1;
   // state: any;

    constructor() {
        const params: IRenderElement = {
            tag: 'section',
            classNames: [CssClasses.GARAGE],
        }
        super(params);
        this.btnsContent = ['race', 'update', 'generate cars']
        this.firstField = '';
        this.secondField = '';
       // this.state = state;
        this.name = 'Garage';
        this.configureView();
        this.page_total = 0;
        this.page_number = 1;
    }

    configureView() {
        let inputParams: IRenderElement = {
            tag: 'input',
            classNames: [],
            textContent: Btn.CREATE,
            callback: (event: KeyboardEvent) => this.keyupHandler(event, 'firstField'),
        }
        let inputCreator = new InputCreator(inputParams) as ElementRender;
        this.elementRender.addInnerElement(inputCreator)

        inputParams = {
            tag: 'input',
            classNames: [],
            textContent: Btn.UPDATE,
            callback: (event: KeyboardEvent) => this.keyupHandler(event, 'secondField'),
        }
        inputCreator = new InputCreator(inputParams) as ElementRender;
        this.elementRender.addInnerElement(inputCreator)

        const inputDiv = {
            tag: 'div',
            classNames: [CssClasses.CONTAINER_input],
        }
        const btnsDivCreator = new ElementRender(inputDiv) as ElementRender;
        this.elementRender.addInnerElement(btnsDivCreator);

        this.btnsContent.forEach((btn) => {
            const btnParams = {
                tag: 'button',
                classNames: [CssClasses.BTN, CssClasses.BTNGreen],
                textContent: btn,
                callback: (event: KeyboardEvent) => this.keyupHandler(event, 'secondField'),
            }
            const btnCreate = new ElementRender(btnParams) as ElementRender;
            btnsDivCreator.addInnerElement(btnCreate);
        })

        const pageParams: IRenderElement = {
            tag: 'h1',
            classNames: [CssClasses.HEADER_page],
            textContent: `${this.name} (${this.page_total})`,
        }
        const pageHeader = new ElementRender(pageParams) as ElementRender;
        this.elementRender.addInnerElement(pageHeader);
        const pageNum: IRenderElement = {
            tag: 'p',
            classNames: [],
            textContent: `Page ${this.page_number}`,
        }
        const pageNumCreate = new ElementRender(pageNum) as ElementRender;
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

    keyupHandler(event: KeyboardEvent, fieldName:  'firstField' | 'secondField') {
        if (event.target instanceof HTMLInputElement) {
            this as IndexView;
            this[fieldName] = event.target.value;
        }
    }
}