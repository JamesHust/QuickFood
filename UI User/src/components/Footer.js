// Import thư viện React
import React, { Component } from 'react';
// Import component có sẵn từ thư viện MDBReact
import {
    MDBFooter, MDBRow, MDBCol, MDBContainer, MDBBtn, MDBFormInline, MDBIcon, MDBInputGroup
} from "mdbreact";
// Import css cho trang
import '../assets/css/Common/style.css';
// Import logo 
import gov_logo from '../assets/images/common/gov_seals.jpg';

class Footer extends Component {
    render() {
        return (
            <MDBFooter className="font-small pt-4 m-auto">
                {/* Danh sách chi tiết loại sản phẩm */}
                <MDBContainer size="lg" className="text-center text-md-left text-muted" >
                    <MDBRow>
                        <MDBCol md="2">
                            <h5 className="title"><strong>Danh mục</strong></h5>
                        </MDBCol>
                        <MDBCol md="10">
                            <MDBRow>
                                <MDBCol md="3" >
                                    <h6 className="title mt-1"><strong>Đồ ăn</strong></h6>
                                    <div className="mb-4">
                                        <a href="#!">Cơm</a> | <a href="#!">Bánh mỳ</a> | <a href="#!">Pizza</a> | <a href="#!">Hamburger</a> | <a href="#!">Phở</a> | <a href="#!">Bún</a> | <a href="#!">Cháo</a>
                                    </div>
                                </MDBCol>
                                <MDBCol md="3">
                                    <h6 className="title mt-1"><strong>Đồ chay</strong></h6>
                                    <div className="mb-4">
                                        <a href="#!">Cơm chay</a> | <a href="#!">Khọm chay</a> | <a href="#!">Buffet Chay</a>
                                    </div>
                                </MDBCol>
                                <MDBCol md="3">
                                    <h6 className="title mt-1"><strong>Đồ uống</strong></h6>
                                    <div className="mb-4">
                                        <a href="#!">Trà sữa</a> | <a href="#!">Nước ngọt</a> | <a href="#!">Bia</a> | <a href="#!">Rượu</a>
                                    </div>
                                </MDBCol>
                                <MDBCol md="3">
                                    <h6 className="title mt-1"><strong>Bánh kem</strong></h6>
                                    <div className="mb-4">
                                        <a href="#!">Bánh gato</a> | <a href="#!">Kem</a> | <a href="#!">Sữa chua</a> | <a href="#!">Bánh ngọt</a> | <a href="#!">Bánh bông lan</a> | <a href="#!">Crepes</a>
                                    </div>
                                </MDBCol>
                                <MDBCol md="3">
                                    <h6 className="title mt-1"><strong>Vỉa hè</strong></h6>
                                    <div className="mb-4">
                                        <a href="#!">Nem</a> | <a href="#!">Bánh tráng</a> | <a href="#!">Sinh tố</a> | <a href="#!">Bánh xèo</a> | <a href="#!">Xôi</a> | <a href="#!">Chè</a>
                                    </div>
                                </MDBCol>
                                <MDBCol md="3">
                                    <h6 className="title mt-1"><strong>Món lẩu</strong></h6>
                                    <div className="mb-4">
                                        <a href="#!">Lẩu thái</a> | <a href="#!">Lẩu hải sản</a> | <a href="#!">Lẩu cá</a> | <a href="#!">Buffet lẩu</a>
                                    </div>
                                </MDBCol>
                            </MDBRow>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                {/* Footer chính */}
                <MDBContainer fluid className="text-center text-md-left stylish-color">
                    <MDBContainer size="lg" className="pt-4 pb-4">
                        <MDBRow>
                            {/* Thông tin thêm về công ty, điều khoản, đăng ký mở quán, khiếu nại */}
                            <MDBCol md="2">
                                <h5 className="title"><strong>Công ty</strong></h5>
                                <span><a href="#!">Giới thiệu</a></span>
                                <br />
                                <span><a href="#!">Bảo mật thông tin</a></span>
                                <br />
                                <span><a href="#!">Giải quyết khiếu nại</a></span>
                                <br />
                                <span><a href="#!">Trung tâm trợ giúp</a></span>
                                <br />
                                <span><a href="#!">Điều khoản sử dụng</a></span>
                                <br />
                                <span><a href="#!">Đăng ký quán</a></span>
                                <br />
                                <span><a href="#!">Liên hệ</a></span>
                            </MDBCol>
                            {/* Tên thương hiệu, fanpage của QuickFood */}
                            <MDBCol md="3" className="d-flex align-items-center justify-content-center  ">
                                <div className="text-center">
                                    <h2><strong>QuickFood</strong></h2>
                                    <p>© 2020 Now - A Foody Corporation</p>
                                    <div className="d-flex align-items-center justify-content-center" style={{ fontSize: "1.3vw" }}>
                                        <MDBIcon fab icon="facebook" className="mx-2" />
                                        <MDBIcon fab icon="instagram" className="mx-2" />
                                        <MDBIcon fab icon="twitter-square" className="mx-2" />
                                    </div>
                                </div>
                            </MDBCol>
                            {/* Phần thư góp ý */}
                            <MDBCol md="4" className="d-flex align-items-center justify-content-center">
                                <div>
                                    <h5 className="title mt-1 text-center"><strong>Gửi thông tin phản hồi</strong></h5>
                                    <MDBFormInline >
                                        <MDBInputGroup
                                            className="h-75"
                                            hint="Nhập phản hồi..."
                                            containerClassName="mb-3"
                                            append={
                                                <MDBBtn outline className="m-0 px-4 py-1 rounded-right" color="warning">
                                                    Gửi
                                                </MDBBtn>
                                            }
                                        />
                                    </MDBFormInline>

                                </div>
                            </MDBCol>
                            {/* Phần địa chỉ trụ sở, liên hệ công ty */}
                            <MDBCol md="3" className="d-flex align-items-center justify-content-center">
                                <div className="text-right">
                                    <h5 className="title"><strong>Địa chỉ công ty</strong></h5>
                                    <span>Công Ty Cổ Phần QuickFood</span>
                                    <br />
                                    <span>Số 1, Đại Cồ Việt, Hai Bà Trưng, Hà Nội</span>
                                    <br />
                                    <span>Số điện thoại: 1900 2042</span>
                                    <img src={gov_logo} alt="gov_seals" className="w-75 mt-2"></img>
                                </div>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </MDBContainer>
                {/* Phần bản quyền */}
                <div className="footer-copyright text-center py-3">
                    <MDBContainer fluid>
                        &copy; {new Date().getFullYear()} Copyright: <a href="www.google.com"> QuickFood.com </a>
                    </MDBContainer>
                </div>
            </MDBFooter>
        );
    }
}

export default Footer;