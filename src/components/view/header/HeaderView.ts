import './header.scss';
import { cssClasses, pages } from '../../../models/types/enums';
import { ElementRender } from '../../util/ElementRender';
import { View } from '../view';
import { tagClass, Pages } from "../../../models/types/types";
import { Page_INDEX } from "../../../models/State";
import { ButtonView } from "./buttonView";
import { GarageView } from '../garage/GarageView';
import { IndexView } from '../garage/indexView';
import { CarBox } from '../garage/CarBox';
import { IRenderElement } from '../../../models/interfaces/IRenderElement';
import { WinnersView } from '../winner/winnersView';

export class HeaderView extends View {
    public linkElements: ButtonView[];
    garageView: GarageView;

    constructor(garageView: GarageView) {
        const params: tagClass = {
            tag: 'header',
            classNames: [cssClasses.HEADER],
        }
        super(params);
        this.garageView = garageView;
        this.linkElements = [];
        this.configureView();
    }
    configureView() {
        const paramsNav: IRenderElement = {
            tag: 'nav',
            classNames: [cssClasses.NAV],
            textContent: '',
            callback: null

        }
        const creatorNav = new ElementRender(paramsNav);
        this.elementRender.addInnerElement(creatorNav);

        const pagesApp = this.getPages(this.garageView);
        pagesApp.forEach((item, index) => {
            const linkEl = new ButtonView(item, this.linkElements);
            creatorNav.addInnerElement(linkEl.getHtmlElement() as HTMLElement);
            this.linkElements.push(linkEl);

            if (index === Page_INDEX) {
                item.callback();
                linkEl.setSelected();
            }
        })
    }
    getPages(garageView: GarageView) {
        //  const indexView = new IndexView();
        // const winnersView = new WinnersView();
        //const carBox = new CarBox();

        const pagesApp: Pages[] = [{
            name: pages.INDEX,
            callback: () => {},// GarageView.setContent(indexView),
        }, 
        {
            name: pages.WINNERS,
            callback: () => {} //GarageView.setContent(winnersView),
        }
        ]
        return pagesApp;
    }

}
