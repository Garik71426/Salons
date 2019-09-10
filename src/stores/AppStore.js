import {extendObservable, action } from 'mobx';

class AppStore {
    storeProps = {
        categorys: {
            response: {},
            category: []
        }
    }
    constructor(){
        extendObservable(this, this.storeProps);
    }

    @action
    getAllCategorys = () => {
        fetch('http://localhost:3001/category')
        .then(res => {
            this.categorys.response.status = res.status;
            this.categorys.response.statusText = res.statusText;
            return res.json();
        })
        .then(
            (result) => {
                this.categorys.category = [...result];
                return;
            }
        )
    }
}

export default AppStore;
