// Import thư viện React
import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
// Import component có sẵn từ thư viện MDBReact
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBIcon, MDBLink, MDBBtn
} from "mdbreact";
// Import logo 
import logo from '../assets/images/common/logo_quickfood.png'

class HeaderNotLogin extends Component {
    state = {
        collapseID: ''
    };
    toggleCollapse = collapseID => () =>
        this.setState(prevState => ({
            collapseID: prevState.collapseID !== collapseID ? collapseID : ''
        }));
    render() {
        const { collapseID } = this.state;
        return (
            <Router>
                <MDBNavbar light expand="lg" className="pt-0 pb-0 px-5 sticky-top grey lighten-5">
                    <MDBNavbarBrand>
                        <MDBNavLink to="#!">
                            <img src={logo} className="w-100" alt={logo} />
                        </MDBNavLink>
                    </MDBNavbarBrand>
                    <MDBNavbarToggler
                        onClick={this.toggleCollapse('navbarCollapse3')}
                    />
                    <MDBCollapse id='navbarCollapse3' isOpen={collapseID} navbar>
                        <MDBNavbarNav right className="d-flex align-items-center">
                            <MDBNavItem active>
                                <MDBLink className='waves-effect waves-light' to='#!' >
                                    Đồ ăn
                                </MDBLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBLink className='waves-effect waves-light' to='#!'>
                                    Đồ chay
                                </MDBLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBLink className='waves-effect waves-light' to='#!'>
                                    Đồ uống
                                </MDBLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBLink className='waves-effect waves-light' to='#!'>
                                    Bánh kem
                                </MDBLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBLink className='waves-effect waves-light' to='#!'>
                                    Vỉa hè
                                </MDBLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBLink className='waves-effect waves-light' to='#!'>
                                    Món lẩu
                                </MDBLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink className="waves-effect waves-light" to="#!">
                                    <MDBBtn color="primary" outline className="ml-0">
                                        <MDBIcon icon="sign-in-alt" className="mr-2" />
                                        Đăng nhập
                                    </MDBBtn>
                                </MDBNavLink>
                            </MDBNavItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBNavbar>
            </Router>
        );
    }
}

export default HeaderNotLogin;