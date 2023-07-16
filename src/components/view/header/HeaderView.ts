import { IRenderElement } from '../../../models/interfaces/IRenderElement';
import './header.scss';
import { cssClasses } from '../../../models/types/enums';
import { ElementRender } from '../../util/ElementRender';
import { View } from '../view';
import { tagClass } from "../../../models/types/types";

export class HeaderView extends View {
    constructor() {
        console.log('in HeaderView constructor');
        
        const params: tagClass = {
            tag: 'header',
            classNames: [cssClasses.HEADER],
        }
        super(params);
    }
}