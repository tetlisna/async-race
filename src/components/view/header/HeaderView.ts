import './header.scss';
import { CssClasses } from '../../../models/types/enums';
import ElementRender from '../../util/ElementRender';
import View  from '../view';
import { TagClass, Pages, PagesDisplay } from "../../../models/types/types";
import  ButtonView  from "./ButtonView";
import { IrenderView } from '../../../models/interfaces/IrenderView';
// import { CarBox } from '../section/garage/CarBox';
import Router from '../../router/router';
import { pagesObj } from '../../../models/State';

class HeaderView extends View {
    linksBtnNav: ButtonView[];

    // garageView: GarageView;

    constructor(router: Router) {
        const params: TagClass = {
            tag: 'header',
            classNames: [CssClasses.HEADER],
        }
        super(params);
        this.linksBtnNav = [];
        this.configureView(router);
    }

    configureView(router: Router) {
        const paramsNav: IrenderView = {
            tag: 'nav',
            classNames: [CssClasses.NAV],
            textContent: '',
            callback: null
        }

        const creatorNav = new ElementRender(paramsNav);
        this.elementRender.addInnerElement(creatorNav);

        Object.keys(pagesObj).forEach((key) => {        
            const linkParams: Pages = {
              name: pagesObj[key as keyof PagesDisplay],
              callback: () => router.navigate(pagesObj[key as keyof PagesDisplay]),
            };
            const linkElement = new ButtonView(linkParams, this.linksBtnNav);
            creatorNav.addInnerElement(linkElement.getHtmlElement() as HTMLElement);
            this.linksBtnNav.push(linkElement);      
          });
      
          this.elementRender.addInnerElement(creatorNav);
    }

    setSelected(page: string) {
        const btnItem = this.linksBtnNav.find((btn: ButtonView) => btn.pageParam.name === page);
    
        if (btnItem instanceof ButtonView) {
            btnItem.setSelected();
        }
      }
}
export default HeaderView;


