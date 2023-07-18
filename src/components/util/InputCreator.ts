import { IRenderElement } from "../../models/interfaces/IRenderElement";
import { ElementRender } from "./ElementRender";
import { cssClasses } from "../../models/types/enums";

export class InputCreator extends ElementRender {
    // constructor(){
    //     super(params)
    // }
    inputElement!: HTMLInputElement;    
    btnElement!: HTMLElement;
    renderEl(params: IRenderElement) {
        const { classNames, textContent, callback } = params;
        this.element = document.createElement('div') as HTMLElement;
        this.inputElement = document.createElement('input') as HTMLInputElement;
        this.btnElement = document.createElement('button') as HTMLElement;
        this.btnElement.classList.add(cssClasses.BTN);
        this.setCallback(callback!);
        classNames?.forEach(name => (this.element as HTMLElement).classList.add(name));
       
        this.setTextContent(textContent!)
        this.element.append(this.inputElement, this.btnElement)
        
    }
    setValue(value:string){
        this.inputElement.value = value;
    }
    setTextContent(text: string): void {
        this.btnElement.textContent = text
    }
    setCallback(callback: CallableFunction): void {
        if(typeof callback === 'function'){
            (this.element as HTMLElement).addEventListener('keyup', (event:Event)=> callback(event))
        }
    }
    setCssClasses(cssParam: string[]) {
        cssParam.forEach((className): void => (this.element as HTMLElement).classList.add(cssClasses.INPUT))
    }
    
}