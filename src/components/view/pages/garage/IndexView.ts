import Router from 'src/components/router/router';
import CarStorage from 'src/models/cars/CarStorage';
import "./garage.scss";
import ElementRender from '../../../util/ElementRender';
import InputCreator from '../../../util/InputCreator';
import View from '../../view';
import CarViewList from './cars/CarViewList';
import { CssClasses, Btn, PagesTitle } from '../../../../models/types/enums';
import { IrenderView } from '../../../../models/interfaces/IrenderView';
import { IGarageItem } from 'src/models/cars/CarStorage';
import EngineStorage from 'src/models/cars/EngineStorage';

type FieldNames = 'createField' | 'updateField';

class IndexView extends View {

  inputFields = [
    {
      name: 'createField',
      textContent: Btn.CREATE,
      callback: (event: MouseEvent) => {
        this.clickHandler(event, 'createField')
      },
    },
    {
      name: 'updateField',
      textContent: Btn.UPDATE,
      callback: (event: MouseEvent) => {
        this.clickHandler(event, 'updateField')
      },
    },
  ];

  updateInput: InputCreator | null;

  name = 'Garage';

  createField = '';

  updateField = '';

  raceField = '';

  url: string = (window as Window).location.pathname.slice(1);

  pageTotal = 0;

  total = 0;

  pageNumber = 1;

  perPage = 7;

  storage: CarStorage;

  storageEngine: EngineStorage;

  constructor(public router: Router, public page: string) {
    const params: IrenderView = {
      tag: 'section',
      classNames: [CssClasses.GARAGE],
    }
    super(params);

    this.updateInput = null;
    this.pageNumber = +page;
    this.storage = new CarStorage();
    this.storageEngine = new EngineStorage();
    this.configureView();
    this.eventListeners();
  }

  async configureView() {
    const allCars = await this.storage.getAll();
    this.total = allCars.length;
    this.pageTotal = Math.ceil(this.total / this.perPage);
    this.renderInputFields();
    this.renderButtons();

    const pageParams: IrenderView = {
      tag: 'h1',
      classNames: [CssClasses.HEADER_page],
      textContent: `${this.name} (${this.total})`,
    }
    const pageHeader = new ElementRender(pageParams) as ElementRender;
    this.elementRender.addInnerElement(pageHeader);
    const pageNum: IrenderView = {
      tag: 'p',
      textContent: `Page ${this.pageNumber}`,
    }
    const pageNumCreator = new ElementRender(pageNum) as ElementRender;
    this.elementRender.addInnerElement(pageNumCreator);

    const carViewList = new CarViewList(
      this.pageNumber,
      this.perPage,
      this.storage,
      this.router,
      this.elementRender
    );
    this.elementRender.addInnerElement(carViewList.getHtmlElement() as HTMLElement);
    this.renderNavigationButtons();
  }

  renderButtons() {
    const inputDiv = {
      tag: 'div',
      classNames: [CssClasses.CONTAINER_Btns],
    };
    const btnsDivCreator = new ElementRender(inputDiv) as ElementRender;
    this.elementRender.addInnerElement(btnsDivCreator);

    ['race', 'update', 'generate cars'].forEach((btn) => {
      const btnParams = {
        tag: 'button',
        classNames: [CssClasses.BTN, CssClasses.BTNGreen],
        textContent: btn,
        callback: (event: MouseEvent) =>
          this.clickHandler(event, 'createField'),
      };
      const btnCreate = new ElementRender(btnParams) as ElementRender;
      btnsDivCreator.addInnerElement(btnCreate);
    });
  }

  private renderNavigationButtons(): void {

    if (this.pageTotal === 1) {
      return;
    }
    const footer = new ElementRender({ tag: 'footer' }) as ElementRender;
    this.elementRender.addInnerElement(footer);

    if (this.pageNumber !== 1) {
      const prevBtn = new ElementRender({
        tag: 'button',
        classNames: ['prev-btn'],
        textContent: 'Previous',
        callback: (event: MouseEvent) => this.navigationHandler(event, 'prev'),
      }) as ElementRender;
      footer.addInnerElement(prevBtn)
    }
    if (this.pageTotal !== this.pageNumber) {
      const nextBtn = new ElementRender({
        tag: 'button',
        classNames: ['next-btn'],
        textContent: 'Next',
        callback: (event: MouseEvent) => this.navigationHandler(event, 'next')
      }) as ElementRender;
      footer.addInnerElement(nextBtn)
    }
  }

  renderInputFields() {
    this.inputFields.forEach((inputField) => {
      const inputParams: IrenderView = {
        tag: 'input',
        classNames: [CssClasses.INPUT],
        textContent: inputField.textContent,
        callback: (event: MouseEvent) =>
          this.clickHandler(event, inputField.name as FieldNames),
      };
      const inputCreator = new InputCreator(inputParams, this.elementRender)
      if (inputField.name === 'updateField') {
        this.updateInput = inputCreator;
      }
      this.elementRender.addInnerElement(inputCreator as ElementRender);
    });
  }

  clickHandler(event: MouseEvent, fieldName: FieldNames) {
    if (event.target instanceof HTMLButtonElement) {
      this as IndexView;

      if (event.target.innerText === 'GENERATE CARS') {
        this.storage.generateCars().then(() => {
          this.router.navigate(this.url);
        });
      }
      if (event.target.innerText === 'RACE') {
        //const { id } = event.detail;
console.log(fieldName, 'fieldName');

        // this.storageEngine.toggleAnimation(id).then(() => {
        //   this.router.navigate(this.url);
        // });

      }

    }

    if (event.target instanceof HTMLInputElement) {
      this as IndexView;
      this[fieldName] = event.target.value;
    }
  }

  navigationHandler(event: MouseEvent, direction: string) {
    if (direction === 'next') {
      this.pageNumber += 1;
    } else {
      this.pageNumber -= 1;
    }
    const url = `${PagesTitle.INDEX}/${this.pageNumber}`;
    this.router.navigate(url);
  }

  eventListeners() {
    (this.elementRender.getElement() as HTMLElement).addEventListener(
      'delete_car',
      this.removeCar.bind(this) as EventListener
    );

    (this.elementRender.getElement() as HTMLElement).addEventListener(
      'create_car',
      this.createCar.bind(this) as EventListener
    );

    (this.elementRender.getElement() as HTMLElement).addEventListener(
      'select_car',
      this.selectCar.bind(this) as EventListener
    );

    (this.elementRender.getElement() as HTMLElement).addEventListener(
      'update_car',
      this.updateCar.bind(this) as EventListener
    );
  }

  removeCar(event: CustomEvent) {
    this.storage.delete(event.detail).then(() => {
      this.router.navigate(this.url);
    });
  }

  createCar(event: CustomEvent) {
    this.storage.create(event.detail).then(() => {
      this.router.navigate(this.url);
    });
  }

  selectCar(event: CustomEvent) {
    this.storage.get(event.detail).then((result) => {
      const { id, name, color } = result as IGarageItem;
      this.updateInput!.setValueToUpdate(id, color, name);
    });
  }

  updateCar(event: CustomEvent) {
    const { id, name, color } = event.detail;
    this.storage.update(id, { name, color }).then((result) => {
      this.router.navigate(this.url);
    });
  }
}
export default IndexView;
