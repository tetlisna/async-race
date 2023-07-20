import './garage.scss';
import { cssClasses } from '../../../models/types/enums';
import { View } from '../view';
import { IRenderElement } from '../../../models/interfaces/IRenderElement';

export class GarageView extends View {
    static setContent: Function;
    constructor(name:string) {
        const params: IRenderElement = {
            tag: 'section',
            classNames: [cssClasses.GARAGE],
        }
        super(params);
    }
    setContent(content: View) {
        const element = this.elementRender.getElement() as HTMLElement;
        while (element.firstElementChild) {
            element.firstElementChild.remove();
        }
        this.elementRender.addInnerElement(content.getHtmlElement() as HTMLElement)
     }

}