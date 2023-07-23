import Router from 'src/components/router/router';
import CarStorage from 'src/models/cars/CarStorage';
import '../garage/garage.scss';
import View from '../../view';
import { CssClasses, Btn } from '../../../../models/types/enums';
import { FieldNames } from '../../../../models/types/types';
import ElementRender from '../../../util/ElementRender';
import InputCreator from '../../../util/InputCreator';
import { IrenderView } from '../../../../models/interfaces/IrenderView';
import CarList from './garage-cars/CarViewList';

class IndexView extends View {
  firstField: string;

  secondField: string;

  inputFields = [
    {
      name: 'firstField',
      textContent: Btn.CREATE,
    },
    {
      name: 'secondField',
      textContent: Btn.UPDATE,
    },
  ];

  btnsContent: string[];

  name = 'Garage';

  page_total = 0;

  page_number = 1;
  // state: any;

  constructor(id: string) {
    const params: IrenderView = {
      tag: 'section',
      classNames: [CssClasses.GARAGE],
    }
    super(params);
    this.btnsContent = ['race', 'update', 'generate cars']
    this.firstField = '';
    this.secondField = '';
    // this.state = state;
    this.name = 'Garage';
    // this.car = this.car;
    this.configureView();
    this.page_total = 0;
    this.page_number = 1;
  }

  configureView() {
    this.renderInputFields();
    this.renderButtons();

    const pageParams: IrenderView = {
      tag: 'h1',
      classNames: [CssClasses.HEADER_page],
      textContent: `${this.name} (${this.page_total})`,
    }
    const pageHeader = new ElementRender(pageParams) as ElementRender;
    this.elementRender.addInnerElement(pageHeader);
    const pageNum: IrenderView = {
      tag: 'p',
      classNames: [],
      textContent: `Page ${this.page_number}`,
    }
    const pageNumCreate = new ElementRender(pageNum) as ElementRender;
    this.elementRender.addInnerElement(pageNumCreate);

    const carListView = new CarList();
    this.elementRender.addInnerElement(carListView.getHtmlElement() as HTMLElement);
  }

  renderButtons() {
    const inputDiv = {
      tag: 'div',
      classNames: [CssClasses.CONTAINER_input],
    };
    const btnsDivCreator = new ElementRender(inputDiv) as ElementRender;
    this.elementRender.addInnerElement(btnsDivCreator);

    this.btnsContent.forEach((btn) => {
      const btnParams = {
        tag: 'button',
        classNames: [CssClasses.BTN, CssClasses.BTNGreen],
        textContent: btn,
        callback: (event: KeyboardEvent) =>
          this.keyupHandler(event, 'secondField'),
      };
      const btnCreate = new ElementRender(btnParams) as ElementRender;
      btnsDivCreator.addInnerElement(btnCreate);
    });
  }

  renderInputFields() {
    this.inputFields.forEach((inputField) => {
      const inputParams: IrenderView = {
        tag: 'input',
        classNames: [],
        textContent: inputField.textContent,
        callback: (event: KeyboardEvent) =>
          this.keyupHandler(event, inputField.name as FieldNames),
      };
      const inputCreator = new InputCreator(inputParams) as ElementRender;
      this.elementRender.addInnerElement(inputCreator);
    });
  }

  setContent(view: View) {
    const element = this.elementRender.getElement() as HTMLElement;
    const currEl = this.elementRender.getElement() as HTMLElement;
    while (currEl.firstElementChild) {
      currEl.firstElementChild.remove();
    }
    this.elementRender.addInnerElement(element)
  }

  keyupHandler(event: KeyboardEvent, fieldName: FieldNames) {
    if (event.target instanceof HTMLInputElement) {
      this as IndexView;
      this[fieldName] = event.target.value;
    }
  }
}
export default IndexView;