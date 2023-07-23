import { IrenderView} from "../../models/interfaces/IrenderView";

class ElementRender {
    element: HTMLElement | string | null;

    constructor(params: IrenderView) {
        this.element = null;
        this.renderView(params);
    }

    renderView(params: IrenderView) {
        const { tag, classNames, textContent, callback } = params;
        this.element = document.createElement(tag);
        this.setCssClasses(classNames);
        this.setTextContent(textContent!);
        this.setCallback(callback!);
    }

    setCssClasses(CssClasses: string[] = []) {
        CssClasses.forEach((className): void => (this.element as HTMLElement).classList.add(className))
    }

    setTextContent(text: string) {
        (this.element as HTMLElement).textContent = text;
    }

    setCallback(callback: CallableFunction) {
        if (typeof callback === 'function') {
            (this.element as HTMLElement).addEventListener('click', (event) => callback(event));
        }
    }

    getElement() {
        return this.element;
    }

    addInnerElement(element: ElementRender | HTMLElement) {
        if (element instanceof ElementRender) {
            (this.element as HTMLElement).append(element.getElement() as HTMLElement);
        } else {
            (this.element as HTMLElement).append(element as HTMLElement);
        }
    }
} 
export default ElementRender;