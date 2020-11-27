// Import thư viện React
import React, { Component } from 'react';
// Import component có sẵn từ thư viện MDBReact
import { MDBContainer, MDBBreadcrumb, MDBBreadcrumbItem } from 'mdbreact';
// Import các Component đã tạo
import InfoProduct from './InfoProduct';
import HeaderAfterLogin from '../../components/HeaderAfterLogin';
import Footer from '../../components/Footer';

class DetailProduct extends Component {
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
                                Loại sản phẩm
                            </MDBBreadcrumbItem>
                            <MDBBreadcrumbItem appendIcon icon='angle-right' active>
                                Chi tiết
                            </MDBBreadcrumbItem>
                        </MDBBreadcrumb>
                        {/* Thông tin chi tiết sản phẩm */}
                        <InfoProduct/>
                    </MDBContainer>
                </main>
                <footer>
                    <Footer/>
                </footer>
            </div>
        );
    }
}

export default DetailProduct;