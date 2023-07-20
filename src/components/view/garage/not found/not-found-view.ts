import { View } from '../../view';
import { NOT_FOUND  } from '../../../../models/State';
import { cssClasses } from '../../../../models/types/enums';

export default class NotFound extends View {
    constructor() {
        const params = {
            tag: 'section',
            classNames: [cssClasses.ERROR],
        };
        super(params);
        this.configureView();
    }

    configureView() {
        this.elementRender.setTextContent(NOT_FOUND);
    }
}