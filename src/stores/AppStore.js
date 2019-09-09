import {extendObservable } from 'mobx';

class AppStore {
    storeProps = {
    
    }
    constructor(){
        extendObservable(this, this.storeProps);
    }  
}

export default AppStore;
