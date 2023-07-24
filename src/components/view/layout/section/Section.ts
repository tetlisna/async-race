import View from '../../view';
import { TagClass } from '../../../../models/types/types';

class Section extends View {
    constructor() {
        const params: TagClass = {
            tag: 'section',
            classNames: []
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
export default Section;