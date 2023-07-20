import { tagClass } from "../../models/types/types";
import { ElementRender } from "../util/ElementRender";
import { Router } from "../router/router";

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
    this.elementRender = new ElementRender(this.params);
    return this.elementRender;
  }

}

export default View;