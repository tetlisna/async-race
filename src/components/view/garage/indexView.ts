import { View } from '../view';
import { cssClasses, btn } from '../../../models/types/enums';
import { Create_BTN, Update_BTN } from '../../../models/State';
import { ElementRender } from '../../util/ElementRender';
import { IRenderElement } from '../../../models/interfaces/IRenderElement';
import { InputCreator } from '../../util/InputCreator';
import { ButtonView } from '../header/buttonView';

export class IndexView extends View {
    firstField: string;
    secondField: string;
    btnsGame: [];
    constructor() {
        const params: IRenderElement = {
            tag: 'section',
            classNames: [cssClasses.GARAGE],
            // textContent: '',
            // callback: null,
        }
        super(params);
        this.configureView();
        this.firstField = '';
        this.secondField = '';
        this.btnsGame = []
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

        let btnsDiv = {
            tag: 'div',
            classNames: [cssClasses.CONTAINER_input],
            textContent: '',
            // callback: {},
        }
        const btnsDivCreator = new ElementRender(btnsDiv) as ElementRender;
        this.elementRender.addInnerElement(btnsDivCreator)

        let btnParamsUpdate = {
            tag: 'button',
            classNames: [cssClasses.BTN, cssClasses.BTNGreen],
            textContent: btn.UPDATE,
            //callback: (event: KeyboardEvent) => this.keyupHandler(event, 'secondField'),
        }
        const btnCreator = new ElementRender(btnParamsUpdate) as ElementRender;
        
        let btnParamsRace = {
            tag: 'button',
            classNames: [cssClasses.BTN, cssClasses.BTNGreen],
            textContent: btn.RACE,
           // callback: (event: KeyboardEvent) => this.keyupHandler(event, 'secondField'),
        }
        const btnRace = new ElementRender(btnParamsRace) as ElementRender;
        this.elementRender.addInnerElement(btnRace);

        let btnParamsGenerate = {
            tag: 'button',
            classNames: [cssClasses.BTN, cssClasses.BTNGreen],
            textContent: btn.GENERATE_CARS,
            //callback: (event: KeyboardEvent) => this.keyupHandler(event, 'secondField'),
        }

        const btnGenerate = new ElementRender(btnParamsGenerate) as ElementRender;
        this.elementRender.addInnerElement(btnGenerate);
        btnsDivCreator.addInnerElement(btnCreator);
        btnsDivCreator.addInnerElement(btnRace);
       btnsDivCreator.addInnerElement(btnGenerate);

       //this.btnsGame.push(btnCreator) 
    }

    keyupHandler(event: KeyboardEvent, fieldName: 'firstField' | 'secondField') {
        if (event.target instanceof HTMLInputElement) {
            console.log(this, "this indexview config");
            this as IndexView;
            this[fieldName] = event.target.value;
        }
    }
}