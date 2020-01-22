import React from 'react';
import Acount from './components/acount/Acount';
import AcountSetting from './components/acount/AccountSetting';

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
    // {
    //     path: '/salon/:whichSalon/:specialistIndex',
    //     component: Specialist
    // },
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