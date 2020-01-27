import React from 'react';
import Acount from './components/acount/Acount';
import AcountSetting from './components/acount/AccountSetting';
import SalonAdmin from './components/acount/salonAdmin';
import SpecialistAdmin from './components/acount/salonAdmin/specialists'

const Home = React.lazy(() => import("./components/home"));
const Salon = React.lazy(() => import("./components/salons"));
const Specialist = React.lazy(() => import("./components/specialists"));
const Categorys = React.lazy(() => import("./components/categories"));

export default [
    {
        path: '/',
        component: Home
    },
    {
        path: '/salon/:salon_id',
        component: Salon
    },
    {
        path: '/category/:category_id',
        component: Categorys
    },
    {
        path: '/admin/salon/:salon_id',
        component: SalonAdmin
    },
    {
        path: '/admin/specialist/:specialist_id',
        component: SpecialistAdmin
    },
    {
        path: '/specialist/:specialist_id',
        component: Specialist
    },
    {
        path: '/my/:uid',
        component: Acount
    },
    {
        path: '/my/:uid/settings',
        component: AcountSetting
    }
];