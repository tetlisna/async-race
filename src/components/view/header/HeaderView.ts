import './header.scss';
import { cssClasses, pages } from '../../../models/types/enums';
import { ElementRender } from '../../util/ElementRender';
import { View } from '../view';
import { tagClass, Pages, pagesDisplay } from "../../../models/types/types";
import { ButtonView } from "./buttonView";
import { GarageView } from '../garage/GarageView';
import { IRenderElement } from '../../../models/interfaces/IRenderElement';
import { CarBox } from '../garage/CarBox';
import { Router } from '../../router/router';
// import { WinnersView } from '../winner/winnersView';
import { pagesObj } from '../../../models/State';

export class HeaderView extends View {
 //   linksBtnNav1: Map <ButtonView [],string>;
    linksBtnNav: ButtonView[];
    garageView: GarageView;
    constructor(garageView: GarageView) {
        const params: tagClass = {
            tag: 'header',
            classNames: [cssClasses.HEADER],
        }
        super(params);
        this.garageView = garageView;
       // this.linksBtnNav1 = new Map();
        this.linksBtnNav = [];
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

        Object.keys(pagesObj).forEach((key) => {
            const linkParams: Pages = {
                name: pagesObj[key as keyof pagesDisplay],
                callback: () => Router.navigate(pagesObj[key as keyof pagesDisplay])
            }
            const linkElement = new ButtonView(linkParams, this.linksBtnNav);
            creatorNav.addInnerElement(linkElement.getHtmlElement() as HTMLElement);
            this.linksBtnNav.push(linkElement);
          //  this.linksBtnNav1.set(pagesObj[key as keyof pagesDisplay], linkElement);
        })
    }
    setSelected(pagesObj:any){

        pagesObj.forEach((el:HTMLElement) => {
                if(el instanceof ButtonView){
                    el.setSelected();
                }})

    
    }
}


