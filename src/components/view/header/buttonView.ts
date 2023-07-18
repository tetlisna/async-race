import View from "../view";
import { cssClasses } from '../../../models/types/enums';
import { IRenderElement } from "../../../models/interfaces/IRenderElement";
import { Pages } from "../../../models/types/types";

export class ButtonView extends View {
    linkElements: ButtonView[];
    pageParam: Pages;
    constructor(pageParam: Pages, linkElements: ButtonView[]) {
        const paramsBtn: IRenderElement = {
            tag: 'a',
            classNames: [cssClasses.BTN],
            // textContent: pageParam.name,
            // callback: pageParam.callback
        }
        super(paramsBtn);
        this.linkElements = linkElements;
        this.pageParam =pageParam;
        this.configureView();

    }
    setSelected() {
        this.linkElements.forEach((linkEl) => linkEl.setSelectedNot());
        const element = this.elementRender.getElement() as HTMLElement;
        element.classList.add(cssClasses.BTN_Selected);
    }
    setSelectedNot() {
        const element = this.elementRender.getElement() as HTMLElement;
        element.classList.remove(cssClasses.BTN_Selected);
    }
    configureView() {
        this.elementRender.setTextContent(this.pageParam.name) as unknown as HTMLElement;
        this.elementRender.setCallback(this.pageParam.callback) as unknown as HTMLElement;
        const element = this.elementRender.getElement() as HTMLElement;

        element.addEventListener('click', () => this.setSelected);

    };

}