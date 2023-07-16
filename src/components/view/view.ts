import { tagClass } from "../../models/types/types";
import { IRenderElement } from "../../models/interfaces/IRenderElement";
import { ElementRender } from "../util/ElementRender";

export class View {
  elementRender: ElementRender;
  params: tagClass;
  
  constructor(params: tagClass) {
    this.params = params;
    this.elementRender = this.renderEl();
  }

  getHtmlElement() {
    return this.elementRender.getElement();
  }
  renderEl() {
    const elementRender = new ElementRender(this.params, document.body);
    return elementRender;
  }
}

export default View;