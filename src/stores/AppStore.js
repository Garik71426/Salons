import axios from 'axios';
import {extendObservable, action, computed } from 'mobx';

import { serverPath } from './../server';

class AppStore {
    storeProps = {
        allSalons: [],
        allCategorys: [],
        salon: {},
        category: [],
    };
    constructor(){
        extendObservable(this, this.storeProps);
    };
    
    @action
    setAllSalons = allSalons => this.allSalons = allSalons;
    @action
    setAllCategroys = allCategorys => this.allCategorys = allCategorys;
    @action
    setSalon = salon => this.salon = salon;
    @action
    setCategory = category => this.category = category;
    @action
    getAllSalons = () => 
        axios.get(`${serverPath}/salon`)
        .then(res => this.setAllSalons(res.data))
        .catch(err => err);
    @action
    getAllCategorys = () => 
        axios.get(`${serverPath}/category`)
        .then(res => this.setAllCategroys(res.data))
        .catch(err => err);
    @action
    getSalon = salon_id => 
        axios.get(`${serverPath}/salon/${salon_id}`)
        .then(res => this.setSalon(res.data))
        .catch(err => err);
    @action
    getCategory = category_id => 
        axios.get(`${serverPath}/salon/category/${category_id}`)
        .then(res => this.setCategory(res.data))
        .catch(err => err);
}

export default AppStore;
