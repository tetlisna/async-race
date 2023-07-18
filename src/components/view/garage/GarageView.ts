import './garage.scss';
import { cssClasses } from '../../../models/types/enums';
import { View } from '../view';
import { IRenderElement } from '../../../models/interfaces/IRenderElement';
import { InputCreator } from '../../util/InputCreator';
import { ElementRender } from '../../util/ElementRender';

export class GarageView extends View {
    static setContent: Function;
    name:string;
    constructor(name:string) {
        const params: IRenderElement = {
            tag: 'section',
            classNames: [cssClasses.GARAGE],
            callback: null,
        }
        super(params);
        this.configureView();
        this.name = name;
    }
    setContent(view: View) {
        const element = this.elementRender.getElement() as HTMLElement;
        const currEl = this.elementRender.getElement() as HTMLElement;
        while (currEl.firstElementChild) {
            currEl.firstElementChild.remove();
        }
        this.elementRender.addInnerElement(element)
    }
    configureView(): void {
        let inputParams: IRenderElement = {
            tag: 'input',
            classNames: [cssClasses.INPUT],
            textContent: '',
            callback: (event: KeyboardEvent) => {}// this.keyupHandler(event, 'firstInput'),
        }
        let creatorInput = new InputCreator(inputParams) as ElementRender;
        
       this.elementRender.addInnerElement(creatorInput.getElement() as HTMLElement);
        
    }
    // keyupHandler(event: KeyboardEvent, btn: string) {
    //     if (event.target instanceof HTMLElement) {
    //        this[btn as keyof GarageView] = (event.target as HTMLInputElement).value;
    //     }
    // }
}