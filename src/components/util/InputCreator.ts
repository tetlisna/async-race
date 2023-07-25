import { IrenderView } from "../../models/interfaces/IrenderView";
import ElementRender from "./ElementRender";
import { CssClasses } from "../../models/types/enums";

class InputCreator extends ElementRender {
    inputElementText!: HTMLInputElement;

    inputElementColor!: HTMLInputElement;

    btnElement!: HTMLElement;

    idToUpdate: number | null;


    constructor(params: IrenderView, public indexView: ElementRender) {
        super(params);
        this.idToUpdate = null;
    }

    renderView(params: IrenderView) {
        const { classNames, textContent, callback } = params;
        this.element = document.createElement('div') as HTMLElement;
        this.inputElementText = document.createElement('input') as HTMLInputElement;
        this.inputElementText.setAttribute('type', 'text')
        this.inputElementColor = document.createElement('input') as HTMLInputElement;
        this.inputElementColor.setAttribute('type', 'color')

        this.btnElement = document.createElement('button') as HTMLElement;
        this.btnElement.classList.add(CssClasses.BTN);
        this.setCallback(callback!);
        classNames?.forEach(name => (this.element as HTMLElement).classList.add(name));

        this.setTextContent(textContent!)
        this.element.append(this.inputElementText, this.inputElementColor, this.btnElement)

    }

    setValue(value: string) {
        this.inputElementText.value = value;
    }

    setTextContent(text: string): void {
        this.btnElement.textContent = text;
    }

    setCallback(callback: CallableFunction): void {
        if (typeof callback === 'function') {
            (this.element as HTMLElement).addEventListener('keyup', (event: Event) => callback(event))
        }

        this.btnElement.addEventListener('click', (event: MouseEvent) => {
            if (event.target instanceof HTMLButtonElement) {
                const name = this.inputElementText.value;
                const color = this.inputElementColor.value;

                if (event.target.innerText === 'CREATE') {
                    const createCarEvent = new CustomEvent('create_car', { detail: { name, color } });
                    (this.indexView.getElement() as HTMLElement).dispatchEvent(createCarEvent)
                }

                if (event.target.innerText === 'UPDATE') {
                    const createCarEvent = new CustomEvent('update_car', { detail: { id: this.idToUpdate, name, color } });
                    (this.indexView.getElement() as HTMLElement).dispatchEvent(createCarEvent)
                }
            }
        });
    }
    setValueToUpdate(id: number, color: string, name: string) {
        this.idToUpdate = id;
        this.inputElementText.value = name;
        this.inputElementColor.value = color;

        console.log('kjbvkjbdkjfcajksbkasbh');
        
    }
    setCssClasses(cssParam: string[]) {
        cssParam.forEach((className): void => (this.element as HTMLElement).classList.add(CssClasses.INPUT))
    }


}
export default InputCreator;