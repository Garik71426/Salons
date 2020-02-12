
import { extendObservable, autorun, computed } from 'mobx';
import api from '../../../API';


class salon {
    constructor(mySalon) {
        this.storeProps = {
            salon: {},
            salonWorkers: [],
            worker: {},
            workerWorkImages: [],
            allCategories: [],
            social: [],
            allSocial: [],
            addWorkerInfo: {},
        };
        extendObservable(this, this.storeProps);
        autorun(() => {
            this.salon = {...mySalon.salon};
            this.salonWorkers = [...mySalon.salonWorkers];
            this.worker = {...mySalon.worker};
            this.workerWorkImages = [...mySalon.workerWorkImages];
            this.social = [...mySalon.social];
            this.allCategories = [...mySalon.allCategories];
        });

    };

    setStoreProps = (key, value) => this[key] = value;

    getAllSocial = () => api.workers.getAllSocial().then(res => this.setStoreProps('allSocial', res));
    saveSalonInfo = (prev, next) => {
        const body = {
            id: next.id,
            query: {}
        };
        for(let key in prev){
            if(prev[key] !== next[key]) {
                body.query[key] = next[key]
            }
        }
        Object.keys(body.query).length > 0 && api.salonAdmin.updateSalonInfo(body)
    };

    addWorker = () => {
        const body = {
            id: this.salon.id,
            query: this.addWorkerInfo,
        }
        Object.keys(body.query).length > 0 && api.salonAdmin.addWorker(body)
        window.location.reload();
    };

    changeAddWorkerForm = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.addWorkerInfo[name] = value;
    };

    changeSalonInfo = (key, event) => {
        const name = event.target.name;
        const value = event.target.value;
        // if(name === 'images') {
        //     const body = {
        //         salon_id: this.salon.id,
        //         worker_id:
        //     };
        //     api.salonAdmin.changeImage(event.target.files[0])
        //     // console.log(event.target.files[0]);
        // }
        this[key][name] = value;
    };
    changeSpecialistImg = data => {
        // console.log(data)
        // const body = {
        //     salon_id: this.salon.id,
        //     worker_id: data.worker_id,
        //     files: data.file,
        // };
        // console.log(body)
        api.salonAdmin.changeImage(data)
        // console.log(event.target.files[0]);
    }
}


export default salon;