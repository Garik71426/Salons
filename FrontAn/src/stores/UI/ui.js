
import { extendObservable } from 'mobx';
import api from '../../API';

class ui {
    storeProps = {
        salonsMenu: [],
        allCategories: [],
        cardWorker: {},
        salon: {},
        social: [],
        salonWorkers: [],
        category: {},
        categoryWorkers: [],
        worker: {},
        workerInfo: {},
        workerWorkImages: [],
        salonCategories: [],
    };
    constructor(){
        extendObservable(this, this.storeProps);
    };
    setStoreProps = (key, value) => this[key] = value;
    getSalonsMenu = () => api.salons.getSalonsMenu().then(res => this.setStoreProps('salonsMenu', res));
    getSalon = salon_id => api.salons.getSalon(salon_id).then(res => this.setStoreProps('salon', res)) 
    getSalonWorkers = salon_id => api.salons.getSalonWorkers(salon_id).then(res => this.setStoreProps('salonWorkers', res))
    getAllCategories = () => api.categories.getAll().then(res => this.setStoreProps('allCategories', res));;
    getCategoryWorkers = category_id => api.categories.getCategoryWorkers(category_id).then(res => this.setStoreProps('categoryWorkers', res));
    getCategory = category_id => api.categories.getCategory(category_id).then(res => this.setStoreProps('category', res));
    getCardWorker = worker_id => api.workers.getCardWorker(worker_id).then(res => this.setStoreProps('cardWorker', res));
    getWorker = worker_id => api.workers.getWorker(worker_id).then(res => this.setStoreProps('worker', res));
    getSocial = worker_id => api.workers.getSocial(worker_id).then(res => this.setStoreProps('social', res));
    getWorkerWorkImages = worker_id => api.workers.getWorkerWorkImages(worker_id).then(res => this.setStoreProps('workerWorkImages', res));
    getSalonCategories = salon_id => api.salons.getSalonCategories(salon_id).then(res => this.setStoreProps('salonCategories', res)) 
}


export default ui;