import View from "../view";
import { CssClasses } from '../../../models/types/enums';
import { IRenderElement } from "../../../models/interfaces/IRenderElement";
import { Pages } from "../../../models/types/types";

class ButtonView extends View {
    linkElements: ButtonView[];

    pageParam: Pages;

    constructor(pageParam: Pages, linkElements: ButtonView[]) {
        const paramsBtn: IRenderElement = {
          tag: 'a',
          classNames: [CssClasses.BTN],
          // textContent: pageParam.name,
          // callback: pageParam.callback
        };
        super(paramsBtn);
        this.linkElements = linkElements;
        this.pageParam = pageParam;
        this.configureView();

    }

    setSelected() {
        this.linkElements.forEach((linkEl) => linkEl.setSelectedNot());
        const element = this.elementRender.getElement() as HTMLElement;
        element.classList.add(CssClasses.BTN_Selected);
    }

    setSelectedNot() {
        const element = this.elementRender.getElement() as HTMLElement;
        element.classList.remove(CssClasses.BTN_Selected);
    }

    configureView() {
        this.elementRender.setTextContent(this.pageParam.name) as unknown as HTMLElement;
        this.elementRender.setCallback(this.pageParam.callback) as unknown as HTMLElement;
        const element = this.elementRender.getElement() as HTMLElement;

        element.addEventListener('click', this.setSelected.bind(this));
    }

}

export default ButtonView;
