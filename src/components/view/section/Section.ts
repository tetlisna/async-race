import { View } from '../view';
import { tagClass } from '../../../models/types/types';

export class Section extends View {
    constructor() {
        const params: tagClass = {
            tag: 'section',
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