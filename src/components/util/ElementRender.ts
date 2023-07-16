import { IRenderElement } from "../../models/interfaces/IRenderElement";

export class ElementRender {
    element: HTMLElement | string | null;
    parent: HTMLElement;
    constructor(params: IRenderElement, parent: HTMLElement) {
        this.element = null;
        this.parent = parent;
        this.renderEl(params);
    }
    renderEl(params: IRenderElement) {
        console.log(params);
        const { tag, classNames, textContent, callback } = params;
        this.element = document.createElement(tag);
        this.setCssClasses(classNames!);
        this.setTextContent(textContent!);
        this.setCallback(callback!);
       // this.setButtonSubmit(tag);
        this.parent.appendChild(this.element)
    }
    // setButtonSubmit(data: IRenderElement) {
    //    if (data.target) data.type = "submit";
    // }
    setCssClasses(cssClasses: string[]) {
        cssClasses.forEach((className): void => (this.element as HTMLElement).classList.add(className))
    }
    setTextContent(text: string) {
        (this.element as HTMLElement).textContent = text;
    }
    setCallback(callback: Function) {
        (this.element as HTMLElement).addEventListener('click', (event): void => callback(event));
    }
    getElement() {
        return this.element;
    }
} 