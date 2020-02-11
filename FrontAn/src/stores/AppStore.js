import { extendObservable } from 'mobx';

import ui from './UI/ui';
import salon from './Admin/Salon/salon';

const uiObject = new ui();
const salonObject = new salon(uiObject);

class AppStore {
    storeProps = {
        ui: uiObject,
        salonAdmin: salonObject,
    };
    constructor(){
        extendObservable(this, this.storeProps);
    };
}

export default AppStore;
