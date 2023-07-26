import Router from "src/components/router/router";
import { IrenderView } from "../../../../models/interfaces/IrenderView";
import { CssClasses, PagesTitle } from "../../../../models/types/enums";
import View from "../../view";
import CarStorage from "src/models/cars/CarStorage";
import ElementRender from "src/components/util/ElementRender";

class WinnersView extends View {
    name = 'Winners';

    url: string = (window as Window).location.pathname.slice(1);

    pageTotal = 0;

    total = 0;

    pageNumber = 1;

    perPage = 7;

    storage: CarStorage | undefined;

    storageEngine: CarStorage | undefined;

    constructor(public router: Router, public page: string) {
        const params: IrenderView = {
            tag: 'section',
            classNames: [CssClasses.WINNERS]
        }
        super(params);
        //    this.showAllWinners();
        this.pageNumber = +page;
        this.configureView();
        this.renderNavigationButtons();
        this.storageEngine = new CarStorage();

    }
    configureView() {
        console.log("winnners");
        //const allCars = await this.storage.getAll();
        //         // this.total = allCars.length;
        //         // this.pageTotal = Math.ceil(this.total / this.perPage);
        //         // this.renderInputFields();
        //         // this.renderButtons();

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


    // const carViewList = new WinnersList(
    //     this.pageNumber,
    //     this.perPage,
    //     this.storage,
    //     this.router,
    //     this.elementRender
    // );
    //this.elementRender.addInnerElement(carViewList.getHtmlElement() as HTMLElement);
    // this.renderNavigationButtons();

    showAllWinners(): void {
        this.clearView();

    }

    clearView() {
        const element = this.elementRender.getElement() as HTMLElement;
        while (element.firstElementChild) {
            element.firstElementChild.remove();
        }
    }

}

export default WinnersView;