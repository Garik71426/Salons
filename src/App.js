import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {observer} from 'mobx-react';
import PropTypes from 'prop-types';

import Header from './components/Home/Header';
import Section from './components/Home/Section';
import Footer from './components/Home/Footer';
import Salon from './components/salons/Salon'; 
// import SalonUser from './components/salons/SalonUser'; 
import Specialist from './components/specialists/Specialist';  
import Categorys from './components/categorys/Categorys'; 
import Acount from './components/acount/Acount';

import UIStore from './stores/UIStore';
import AppStore from './stores/AppStore';
import NotFound from './NotFound'; 

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
        fetch('http://localhost:3001/category')
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
        },
        // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
        // чтобы не перехватывать исключения из ошибок в самих компонентах.
        (error) => {
            console.log(error);
        }
      )
    }
    render() {
        const routes = [
            {
                path: '/',
                component: Section
            },
            {
                path: '/Salon/:whichSalon',
                component: Salon
            },
            {
                path: '/Category/:whichCategory',
                component: Categorys
            },
            {
                path: '/Salon/:whichSalon/:salonIndex/:categoryIndex/:specialistIndex',
                component: Specialist
            },
            {
                path: '/Category/:whichCategory/:salonIndex/:categoryIndex/:specialistIndex',
                component: Specialist
            },
            {
                path: this.AppStore.isUser === 'salon' 
                    ? '/AcountSalon/:whichSalon' 
                    : this.AppStore.isUser === 'user' 
                    ? '/Acount' 
                    : '',
                component: this.AppStore.isUser === 'salon' 
                    ? Salon 
                    : this.AppStore.isUser === 'user' 
                    ? Acount 
                    : ''
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
                                    return <Route exact path = {item.path} component = {item.component} />;
                                })
                            }
                            <Route component={NotFound} />
                        </Switch>
                    </div>
                </Router>
                <Footer/>
            </div>
        );  
    }
}

export default App;
