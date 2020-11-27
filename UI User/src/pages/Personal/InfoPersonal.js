// Import thư viện React
import React, { Component } from "react";
// Import các component có sẵn từ MDBReact
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBreadcrumb, MDBBreadcrumbItem } from "mdbreact";
// Import các component đã tạo
import FormChange from "./FormChange";
import Footer from "../../components/Footer";
import HeaderAfterLogin from "../../components/HeaderAfterLogin";

// Thông tin tài khoản 
class InfoPersonal extends Component {
    render() {
        return (
            <div>
                <header>
                    <HeaderAfterLogin/>
                </header>
                <main>
                    <MDBContainer className="mb-3">
                        {/* Đường dẫn */}
                        <MDBBreadcrumb light color='orange lighten-2' className="mt-5 mb-4">
                            <MDBBreadcrumbItem appendIcon icon='angle-right'>Trang chủ</MDBBreadcrumbItem>
                            <MDBBreadcrumbItem appendIcon icon='angle-right'>
                                Cá nhân
                        </MDBBreadcrumbItem>
                            <MDBBreadcrumbItem appendIcon icon='angle-right' active>
                                Cập nhật tài khoản
                        </MDBBreadcrumbItem>
                        </MDBBreadcrumb>
                        <MDBRow>
                            <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
                                <MDBCard testimonial>
                                    {/* Ảnh minh họa */}
                                    <div className="mx-auto white pt-5">
                                        <img
                                            src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg"
                                            alt=""
                                            className="rounded-circle img-fluid"
                                        />
                                    </div>
                                    <MDBCardBody>
                                        {/* Tên người dùng */}
                                        <h4 className="font-weight-bold mb-4">Thế Hưng</h4>
                                        <hr />
                                        {/* Số điện thoại liên hệ */}
                                        <p>
                                            <MDBIcon icon="phone-alt" className="pr-2 yellow-text" />0966073028
                                    </p>
                                        {/* Địa chỉ email */}
                                        <p>
                                            <MDBIcon icon="envelope" className="pr-2 green-text" />hungjame99@gmail.com
                                    </p>
                                        {/* Địa chỉ */}
                                        <p>
                                            <MDBIcon icon="map-marker-alt" className="pr-2 red-text" />20 Ngách 20 Ngõ Trại Cá, Trương Định, Hai Bà Trưng, Hà Nội
                                    </p>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol lg="8" md="12" className="mb-lg-0 mb-4">
                                {/* Form thay đổi thông tin cá nhân */}
                                <FormChange />
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </main>
                <footer>
                    <Footer/>
                </footer>
            </div>
        );
    }
}

export default InfoPersonal;