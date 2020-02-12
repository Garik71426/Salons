import axios from 'axios';

import { serverPath } from '../server';

const sendData = res => res.data;

export default {
    salons: {
        getSalon: salon_id => axios.get(`${serverPath}/salon/${salon_id}`)
            .then(sendData),
        getSalonsMenu: () => axios.get(`${serverPath}/salon/salon/menu`)
            .then(sendData),
        getSalonWorkers: salon_id => axios.get(`${serverPath}/salon/workers/${salon_id}`)
            .then(sendData),
        getSalonCategories: salon_id => axios.get(`${serverPath}/salon/category/${salon_id}`)
            .then(sendData),
    },
    categories: {
        getAll: () => axios.get(`${serverPath}/category`)
            .then(sendData),
        getCategory: (category_id) => axios.get(`${serverPath}/category/${category_id}`)
            .then(sendData),
        getCategoryWorkers: category_id => axios.get(`${serverPath}/category/${category_id}/workers`)
            .then(sendData),
    },
    workers: {
        getWorker: worker_id => axios.get(`${serverPath}/worker/full/${worker_id}`)
            .then(sendData),
        getCardWorker: worker_id => axios.get(`${serverPath}/worker/card/${worker_id}`)
            .then(sendData),
        getWorkerWorkImages: worker_id => axios.get(`${serverPath}/worker/${worker_id}/works`)
            .then(sendData),
        getSocial: worker_id => axios.get(`${serverPath}/worker/${worker_id}/social`)
            .then(sendData),
        getAllSocial: () => axios.get(`${serverPath}/worker/social/all`)
            .then(sendData),
    },
    salonAdmin: {
        updateSalonInfo: data => axios.patch(`${serverPath}/salonAdmin/updateSalon`, { data })
            .then(sendData),
        addWorker: data => axios.post(`${serverPath}/salonAdmin/addWorker`, { data })
            .then(sendData),
        changeImage: data => 
            axios({
            method: 'post',
            url: `${serverPath}/salonAdmin/uploadImage`,
            data: { data },
            headers: {'Content-Type': 'multipart/form-data' }
            })
            .then(sendData),
    },
}