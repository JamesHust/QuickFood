import React, { Component } from "react";
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
    MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon, MDBBtn
} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import logo from '../assets/images/common/logo_quickfood.png';

class HeaderAfterLogin extends Component {
    state = {
        isOpen: false
    };

    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        return (
            <Router>
                <MDBNavbar light expand="lg" className="pt-0 pb-0 px-5 sticky-top grey lighten-5">
                    <MDBNavbarBrand>
                        <MDBNavLink to="#!">
                            <img src={logo} className="w-100" alt={logo} />
                        </MDBNavLink>
                    </MDBNavbarBrand>
                    <MDBNavbarToggler onClick={this.toggleCollapse} />
                    <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                        <MDBNavbarNav left>
                            <MDBNavItem active>
                                <MDBNavLink to="#!">Đồ ăn</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink to="#!">Đồ chay</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink to="#!">Đồ uống</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink to="#!">Bánh kem</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink to="#!">Vỉa hè</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink to="#!">Món lẩu</MDBNavLink>
                            </MDBNavItem>
                        </MDBNavbarNav>
                        <MDBNavbarNav right>
                            <MDBNavItem>

                            </MDBNavItem>
                            <MDBNavItem className="d-flex align-items-center">
                                <MDBDropdown >
                                    <MDBDropdownToggle nav className='dopdown-toggle'>
                                        <img
                                            src='https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg'
                                            className='rounded-circle z-depth-0'
                                            style={{ height: '35px', padding: 0 }}
                                            alt=''
                                        />
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu color="warning" basic>
                                        <MDBDropdownItem>Đơn hàng của tôi</MDBDropdownItem>
                                        <MDBDropdownItem>Lịch sử đơn hàng</MDBDropdownItem>
                                        <MDBDropdownItem>Danh sách yêu thích</MDBDropdownItem>
                                        <MDBDropdownItem>Cập nhật tài khoản</MDBDropdownItem>
                                        <MDBDropdownItem>Đăng xuất</MDBDropdownItem>
                                    </MDBDropdownMenu>
                                </MDBDropdown>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink className="waves-effect waves-light" to="#!">
                                    <MDBBtn color="warning" outline className="ml-0">
                                        <MDBIcon icon="shopping-bag" className="mr-2 "/>
                                        Giỏ hàng
                                    </MDBBtn>
                                    <span className="counter">22</span>
                                </MDBNavLink>
                            </MDBNavItem>

                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBNavbar>
            </Router>
        );
    }
}

export default HeaderAfterLogin;