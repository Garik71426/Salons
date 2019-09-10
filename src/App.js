import React, { Component, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {observer} from 'mobx-react';
import PropTypes from 'prop-types';

import Header from './components/Home/Header';
import Loading from './components/Home/Loading';
import Footer from './components/Home/Footer';
import Error from './components/Error'; 

import UIStore from './stores/UIStore';
import AppStore from './stores/AppStore';

import './../assets/stylesheets/App.css';

const Home = React.lazy(() => import("./components/Home/Home"));
const Salon = React.lazy(() => import("./components/salons/Salon"));
const Specialist = React.lazy(() => import("./components/specialists/Specialist"));
const Categorys = React.lazy(() => import("./components/categorys/Categorys"));

@observer
class App extends Component {
    static childContextTypes = {
        UIStore : PropTypes.object,
        AppStore : PropTypes.object
    }
    UIStore = new UIStore();
    AppStore = new AppStore();
    getChildContext (){
        return {
            UIStore : this.UIStore,
            AppStore : this.AppStore,
        }
    }
    componentDidMount(){
        //this.AppStore.initData();
    }
    render() {
        const routes = [
            {
                path: '/',
                component: Home
            },
            {
                path: '/salon/:whichSalon',
                component: Salon
            },
            {
                path: '/category/:whichCategory',
                component: Categorys
            },
            {
                path: '/salon/:whichSalon/:specialistIndex',
                component: Specialist
            },
            {
                path: '/specialist/:specialistIndex',
                component: Specialist
            }
        ];
        return (
            <div className = "App">
                <Router>
                    <div>
                        <Header/>
                        <Suspense fallback={<Loading />}>
                            <Switch>
                                {
                                    routes.map(item => {
                                        return <Route key = {item.path} exact path = {item.path} component = {item.component} />;
                                    })
                                }
                                <Route component={Error} />
                            </Switch>
                        </Suspense>
                    </div>
                </Router>
                <Footer/>
            </div>
        );  
    }
}

export default App;
