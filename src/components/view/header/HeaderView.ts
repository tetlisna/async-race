import './header.scss';
import { cssClasses, pages } from '../../../models/types/enums';
import { ElementRender } from '../../util/ElementRender';
import { View } from '../view';
import { tagClass, Pages, pagesDisplay } from "../../../models/types/types";
import { ButtonView } from "./buttonView";
import { IRenderElement } from '../../../models/interfaces/IRenderElement';
import { CarBox } from '../garage/CarBox';
import { Router } from '../../router/router';
import { pagesObj } from '../../../models/State';

export class HeaderView extends View {
 //   linksBtnNav1: Map <ButtonView [],string>;
    linksBtnNav: ButtonView[];

    // garageView: GarageView;

    constructor(router: Router) {
        const params: tagClass = {
            tag: 'header',
            classNames: [cssClasses.HEADER],
        }
        super(params);
        // this.garageView = garageView;
       // this.linksBtnNav1 = new Map();
        this.linksBtnNav = [];
        this.configureView(router);
    }

    configureView(router:Router) {
        const paramsNav: IRenderElement = {
            tag: 'nav',
            classNames: [cssClasses.NAV],
            textContent: '',
            callback: null
        }
        const creatorNav = new ElementRender(paramsNav);
        this.elementRender.addInnerElement(creatorNav);

        Object.keys(pagesObj).forEach((key) => {
            const linkParams: Pages = {
                name: pagesObj[key as keyof pagesDisplay],
                callback: () => router.navigate(pagesObj[key as keyof pagesDisplay])
            }
            const linkElement = new ButtonView(linkParams, this.linksBtnNav);
            creatorNav.addInnerElement(linkElement.getHtmlElement() as HTMLElement);
            this.linksBtnNav.push(linkElement);
        })
    }

    setSelected(pagesObj: Pages []){
        pagesObj.forEach((el) => {
            if(el instanceof ButtonView){
                el.setSelected();
            }})
    }
}


