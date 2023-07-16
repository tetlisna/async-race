import './garage.scss';
import { cssClasses } from '../../../models/types/enums';
import { View } from '../view';
import { tagClass } from "../../../models/types/types";

//const TEXT = `Hello garage`;

export class GarageView extends View {
   
    constructor() {
        const params: tagClass = {
            tag: 'div',
            classNames: [cssClasses.GARAGE],
        }
        super(params);
    }
}