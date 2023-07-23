import Router from 'src/components/router/router';
import CarStorage from 'src/models/cars/CarStorage';
import "./garage.scss";
import ElementRender from '../../../util/ElementRender';
import InputCreator from '../../../util/InputCreator';
import View from '../../view';
import CarViewList from './garage-cars/CarViewList';
import { CssClasses, Btn } from '../../../../models/types/enums';
import { FieldNames } from '../../../../models/types/types';
import { IrenderView } from '../../../../models/interfaces/IrenderView';

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

  name = 'Garage';

  pageTotal = 0;

  pageNumber = 1;

  // state: any;
  perPage = 7;

  storage: CarStorage;

  constructor(id: string) {
    const params: IrenderView = {
      tag: 'section',
      classNames: [CssClasses.GARAGE],
    }
    super(params);
    this.firstField = '';
    this.secondField = '';
    // this.state = state;
    // this.car = this.car;
    this.storage = new CarStorage();
    this.configureView();
    this.pageTotal = 0;
    this.pageNumber = 1;
  }

  configureView() {
    this.renderInputFields();
    this.renderButtons();

    const pageParams: IrenderView = {
      tag: 'h1',
      classNames: [CssClasses.HEADER_page],
      textContent: `${this.name} (${this.pageTotal})`,
    }
    const pageHeader = new ElementRender(pageParams) as ElementRender;
    this.elementRender.addInnerElement(pageHeader);
    const pageNum: IrenderView = {
      tag: 'p',
      classNames: [],
      textContent: `Page ${this.pageNumber}`,
    }
    const pageNumCreate = new ElementRender(pageNum) as ElementRender;
    this.elementRender.addInnerElement(pageNumCreate);

    const carViewList = new CarViewList(this.pageNumber,
      this.perPage,
      this.storage);
    this.elementRender.addInnerElement(carViewList.getHtmlElement() as HTMLElement);
  }

  renderButtons() {
    const inputDiv = {
      tag: 'div',
      classNames: [CssClasses.CONTAINER_input],
    };
    const btnsDivCreator = new ElementRender(inputDiv) as ElementRender;
    this.elementRender.addInnerElement(btnsDivCreator);

    ['race', 'update', 'generate cars'].forEach((btn) => {
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