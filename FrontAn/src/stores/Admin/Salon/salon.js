
import { extendObservable, autorun } from 'mobx';
import api from '../../../API';


class salon {
    constructor(mySalon){
        this.storeProps = {
            salon: {},
            salonWorkers: [],
            worker: {},
            workerWorkImages: [],
            social: [],
            allSocial: [],
        };
        extendObservable(this, this.storeProps);
        autorun(() => {
            this.salon = mySalon.salon;
            this.salonWorkers = mySalon.salonWorkers;
            this.worker = mySalon.worker;
            this.workerWorkImages = mySalon.workerWorkImages;
            this.social = mySalon.social;
        });
        
    };

    setStoreProps = (key, value) => this[key] = value;

    changeSalonInfo = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.salon[name] = value;
    }

    getAllSocial = () => api.workers.getAllSocial().then(res => this.setStoreProps('allSocial', res));
    
    
}


export default salon;