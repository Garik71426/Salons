import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    Collapse, Navbar, NavbarToggler, NavbarBrand,
    Nav, UncontrolledDropdown, DropdownToggle,
    DropdownMenu, DropdownItem, Container, NavItem
} from 'reactstrap';
import PropTypes from 'prop-types';
import axios from 'axios';

import ModalLogin from './modals/ModalLogin';
import ModalRegister from './modals/ModalReagistr';

import Messages from './../../Messages';

import './../../../assets/stylesheets/header.css';

import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: 'AIzaSyCE723-OL8hsSGdbwe7yEn8FJG9fMYt3ic',
    authDomain: 'beautysalon-32253.firebaseapp.com',
    databaseURL: 'https://beautysalon-32253.firebaseio.com',
    projectId: 'beautysalon-32253',
    storageBucket: 'beautysalon-32253.appspot.com',
    messagingSenderId: '36265934266',
    appId: '1:36265934266:web:ce2a9cab4fcb45cef03183'
    // ...
};
firebase.initializeApp(config);

class Header extends Component {
    static contextTypes = {
        AppStore: PropTypes.shape({

        }).isRequired
    }
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            FuncForCookie: PropTypes.func,
            Salon: [],
            isSignedIn: false,
            uid: ''
        };
    }

    componentDidMount() {
        this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
            (user) => this.setState({ isSignedIn: !!user, uid: user.uid })
        );
        axios.get('http://localhost:3001/salon')
        .then(res => {
            this.setState({ Salon: res.data });
        })
        .catch(err => {
            return err;
        });
    }

    componentWillUnmount() {
        this.unregisterAuthObserver();
    }

    deleteAllCookies = async (uid) => {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i];
            let eqPos = cookie.indexOf('=');
            let name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
            document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
        }
        localStorage.clear();
        this.setState({ isSignedIn: false })
    }

    handleSignOut = () => {
        firebase.auth().signOut();
        this.deleteAllCookies();
    };

    handleSignIn = async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
            const user = await firebase
                .auth()
                .signInWithEmailAndPassword(email.value, password.value);
                window.location.pathname = `/my/${user.user.uid}`
        } catch (error) {
            alert(error);
        }
    };

    handleSignUp = async event => {
        event.preventDefault();
        const { email, password, name, surname, phone, b_day } = event.target.elements;
        const body = {
            name: name.value,
            surname: surname.value,
            email: email.value,
            phone: phone.value,
            b_day: b_day.value
        };

        try {
            const response = await firebase
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value);
            body.uid = response.user.uid;
            await axios.post('http://localhost:3001/users/registration', body)
                .then(res => {
                    alert('Շնորհավորում ենք։ Դուք հաջողությամբ գրանցվել եք։')
                })
                .catch(err => {
                    alert('Something was wront. Please try again...');
                });
        } catch (error) {
            alert(error);
        }
    };

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        const { Salon, uid } = this.state;
        return (
            <div >
                <Container>
                    <div className='header_design'>
                        <Navbar light expand='md'>
                            <Link to='/'>
                                <img
                                    src='/static/assets/images/header/logo.png'
                                    width='50'
                                    height='50'
                                    className='d-inline-block align-top'
                                    alt='React Bootstrap logo'
                                />
                                <span className='title'>{Messages.header.title}</span>
                            </Link>
                            <NavbarToggler onClick={this.toggle} />
                            <Collapse isOpen={this.state.isOpen} navbar>
                                <Nav className='ml-auto dropd' navbar>
                                    <UncontrolledDropdown nav inNavbar >
                                        <DropdownToggle nav className='drop' caret>
                                            {Messages.header.dropDown}
                                        </DropdownToggle>
                                        <DropdownMenu right>
                                            {Salon.map(item => {
                                                return <Link to={`/salon/${item.id}`} key={item.address}>
                                                    <DropdownItem className='drop_item'>
                                                        {item.name}
                                                    </DropdownItem>
                                                </Link>
                                            })}
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                    {
                                        !this.state.isSignedIn ?
                                            <>
                                                <NavItem>
                                                    <ModalLogin onSubmit={this.handleSignIn} />
                                                </NavItem>
                                                <NavItem>
                                                    <ModalRegister onSubmit={this.handleSignUp} />
                                                </NavItem>
                                            </> :
                                            <>
                                                <NavItem>
                                                    <Link to={`/my/${uid}`}>
                                                        Իմ Էջը
                                                    </Link>
                                                </NavItem>
                                                <NavItem>
                                                    <Link to='/' onClick={this.handleSignOut}>
                                                        {Messages.header.LogOut}
                                                    </Link>
                                                </NavItem>
                                            </>
                                    }
                                </Nav>
                            </Collapse>
                        </Navbar>
                    </div>
                </Container>
            </div>
        );
    }
}

export default Header;
