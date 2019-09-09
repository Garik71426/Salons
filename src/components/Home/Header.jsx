import React, { Component } from 'react';
import {Link}  from 'react-router-dom';
import {Collapse, Navbar, NavbarToggler, NavbarBrand,
        Nav, UncontrolledDropdown, DropdownToggle,
        DropdownMenu, DropdownItem , Container, NavItem} from 'reactstrap';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';

import ModalLogin from './modals/ModalLogin';
import ModalRegister from './modals/ModalReagistr';

import Messages from './../../Messages';

import './../../../assets/stylesheets/header.css';

@observer
class HeaderUser extends Component {
    static contextTypes = {
        AppStore : PropTypes.shape({
            Salon : PropTypes.array.isRequired,
            isUser : PropTypes.string,
            LogOut : PropTypes.func,
        }).isRequired
    }
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            FuncForCookie : PropTypes.func,
            Salon: []
        };
    }
    componentDidMount(){
        this.context.AppStore.FuncForCookie();
        fetch('http://localhost:3001/salon')
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({ Salon: result })
            },
            (error) => {
                console.log(error);
            }
        )
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        const { Salon } = this.state;
        return (
            <div >
                <Container>
                    <div className = "header_design">
                        <Navbar  light expand="md">
                            <NavbarBrand href="/">
                                <img
                                    src= '/static/assets/images/header/logo.png'
                                    width="50"
                                    height="50"
                                    className="d-inline-block align-top"
                                    alt="React Bootstrap logo"
                                />
                                <span className="title">{Messages.header.title}</span>
                            </NavbarBrand>
                            <NavbarToggler onClick={this.toggle}/>
                                <Collapse isOpen={this.state.isOpen} navbar>
                                    <Nav className="ml-auto dropd" navbar>
                                        <UncontrolledDropdown nav inNavbar >
                                            <DropdownToggle nav className="drop" caret>
                                                {Messages.header.dropDown}
                                            </DropdownToggle>
                                            <DropdownMenu right>
                                                {Salon.map(item => {
                                                    return <Link to={`/Salon/${item.id}`} key = {item.address}>
                                                        <DropdownItem  className="drop_item">
                                                            {item.name}
                                                        </DropdownItem>
                                                    </Link>
                                                })}
                                            </DropdownMenu>
                                        </UncontrolledDropdown>
                                        <>
                                            <NavItem>
                                                <ModalLogin/>
                                            </NavItem>
                                            <NavItem>
                                                <ModalRegister/>
                                            </NavItem>
                                        </>
                                    </Nav>
                            </Collapse>
                        </Navbar>
                    </div>
                </Container>
            </div>
        );
    }
}
export default HeaderUser
