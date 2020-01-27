import React, { Component, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { observer } from 'mobx-react';
import PropTypes from 'prop-types';

import Header from './components/common/header';
import Footer from './components/common/footer';
import Loading from './components/common/loading';
import Error from './components/common/error';

import routes from './Route';

import UIStore from './stores/UIStore';
import AppStore from './stores/AppStore';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



@observer
class App extends Component {
    static childContextTypes = {
        UIStore: PropTypes.object,
        AppStore: PropTypes.object
    }
    UIStore = new UIStore();
    AppStore = new AppStore();
    getChildContext() {
        return {
            UIStore: this.UIStore,
            AppStore: this.AppStore,
        }
    }
    render() {
        return (
            <div className="App">
                <Router>
                    <Header />
                        <div className = "App-container">
                            <Suspense fallback={<Loading />}>
                                <Switch>
                                    {
                                        routes.map(item => {
                                            return <Route key={item.path} exact path={item.path} component={item.component} />;
                                        })
                                    }
                                    <Route component={Error} />
                                </Switch>
                            </Suspense>
                        </div>
                    <Footer />
                </Router>
            </div>
        );
    }
}

export default App;
