import { extendObservable } from 'mobx';


class UIStore {
    storeProps = {

    }
    constructor(){
        extendObservable(this, this.storeProps);
    }
    
    calculate_age = (dob) => { 
        const diff_ms = Date.now() - dob.getTime();
        const age_dt = new Date(diff_ms);       
        return Math.abs(age_dt.getUTCFullYear() - 1970);
    }
}


export default UIStore ;