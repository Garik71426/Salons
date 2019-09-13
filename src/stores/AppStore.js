import {extendObservable, action, computed } from 'mobx';

class AppStore {
    storeProps = {

    }
    constructor(){
        extendObservable(this, this.storeProps);
    }
}

export default AppStore;
