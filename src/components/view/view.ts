import { TagClass } from "../../models/types/types";
import ElementRender from "../util/ElementRender";
class View {
  elementRender: ElementRender;

  params: TagClass;

  constructor(params: TagClass) {
    this.params = params;
    this.elementRender = this.renderView();
  }

  getHtmlElement() {
    return this.elementRender.getElement();
  }

  renderView() {
    this.elementRender = new ElementRender(this.params);
    return this.elementRender;
  }

}

export default View;