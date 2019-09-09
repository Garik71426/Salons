import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {observer} from 'mobx-react';
import PropTypes from 'prop-types';

import Header from './components/Home/Header';
import Section from './components/Home/Section';
import Footer from './components/Home/Footer';
import Salon from './components/salons/Salon'; 
import Specialist from './components/specialists/Specialist';  
import Categorys from './components/categorys/Categorys'; 
import Error from './components/Error'; 

import UIStore from './stores/UIStore';
import AppStore from './stores/AppStore';

import './../assets/stylesheets/App.css';

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
        this.AppStore.initData();
    }
    render() {
        const routes = [
            {
                path: '/',
                component: Section
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
                        <Switch>
                            {
                                routes.map(item => {
                                    return <Route key = {item.path} exact path = {item.path} component = {item.component} />;
                                })
                            }
                            <Route component={Error} />
                        </Switch>
                    </div>
                </Router>
                <Footer/>
            </div>
        );  
    }
}

export default App;
