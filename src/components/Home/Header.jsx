import React, { Component } from 'react';
import {Link}  from 'react-router-dom';
import {Collapse, Navbar, NavbarToggler, NavbarBrand,
        Nav, UncontrolledDropdown, DropdownToggle,
        DropdownMenu, DropdownItem , Container,Button, NavItem} from 'reactstrap';
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
            _Data : PropTypes.array.isRequired,
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
        };
    }
    componentDidMount(){
          this.context.AppStore.FuncForCookie();

    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        const {_Data, isUser, LogOut, LoginSalonIndex} = this.context.AppStore;
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
                                                {_Data.map((item,index) =>{
                                                    return <Link to={`/Salon/${index}`} key = {item.address}>
                                                        <DropdownItem  className="drop_item">
                                                            {item.name}
                                                        </DropdownItem>
                                                    </Link>
                                                })}
                                            </DropdownMenu>
                                        </UncontrolledDropdown>
                                        {(isUser === 'salon' || isUser === 'user')?
                                        <>
                                            <NavItem>{(isUser === 'salon')?
                                                <Link to={`/AcountSalon/${LoginSalonIndex}`}>
                                                    <Button className="ml-auto mod_btn"  color="link">{Messages.header.UserPage}</Button>
                                                </Link>:
                                                <Link to={'/Acount'}>
                                                    <Button className="ml-auto mod_btn"  color="link">{Messages.header.UserPage}</Button>
                                                </Link>}


                                            </NavItem>
                                            <NavItem>
                                                <Button className="ml-auto mod_btn" onClick={LogOut} color="link">{Messages.header.LogOut}</Button>
                                            </NavItem>
                                        </>:
                                            <>
                                                <NavItem>
                                                    <ModalLogin/>
                                                </NavItem>
                                                <NavItem>
                                                    <ModalRegister/>
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
export default HeaderUser
