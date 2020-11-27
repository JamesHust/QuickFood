// Import thư viện React
import React, { Component } from 'react';

// Import các component có sẵn (thư viện, đã tạo,...)
import HeaderAfterLogin from '../../components/HeaderAfterLogin';
import ListProductCart from './ListProductCart';
import PaymentCart from './PaymentCart';
import Footer from '../../components/Footer'
import { MDBContainer, MDBRow, MDBCol, MDBBreadcrumb, MDBBreadcrumbItem, MDBIcon, MDBBtn, MDBCollapse } from "mdbreact";

// Import ảnh
import shipper from '../../assets/images/common/delivery.png';

class Cart extends Component {
    state = {
        collapseID: ''
    };

    toggleCollapse = collapseID => () => {
        this.setState(prevState => ({
            collapseID: prevState.collapseID !== collapseID ? collapseID : ''
        }));
    };
    render() {
        const { collapseID } = this.state;

        // Css cho icon phần thông tin thêm
        const icon1 = {
            marginLeft: "4px",
            marginRight: "15px",
        };
        const icon2 = {
            marginLeft: "2px",
            marginRight: "13px",
        };
        const icon3 = {
            marginLeft: "1px",
            marginRight: "12px",
        };
        return (
            <div>
                <header>
                    <HeaderAfterLogin />
                </header>
                <main>
                    <MDBContainer className="mb-3">
                        {/* Đường dẫn */}
                        <MDBBreadcrumb light color='orange lighten-2' className="mt-5 mb-4">
                            <MDBBreadcrumbItem appendIcon icon='angle-right'>Trang chủ</MDBBreadcrumbItem>
                            <MDBBreadcrumbItem appendIcon icon='angle-right' active>
                                Giỏ hàng
                            </MDBBreadcrumbItem>
                        </MDBBreadcrumb>

                        <section className="mb-4">
                            <div className="row">
                                <div className="col-lg-8">
                                    {/* Danh sách sản phẩm */}
                                    <div className="card wish-list mb-4">
                                        <ListProductCart />
                                    </div>
                                    {/* Thẻ thông tin thêm */}
                                    <div className="card wish-list mb-4 orange lighten-2">
                                        <div className="card-body">
                                            <MDBRow className="d-flex justify-content-between align-items-center">
                                                <MDBCol md="2" className="d-none d-lg-block">
                                                    <img src={shipper} className="img-fluid" alt="" />
                                                </MDBCol>
                                                <MDBCol md="10" style={{ color: "#fafafa" }}>
                                                    <MDBIcon icon="map-marker-alt" style={icon1} /><span>Khoảng cách: <strong>2.5km</strong></span>
                                                    <br />
                                                    <MDBIcon icon="clock" style={icon2} /><span>Dự kiên giao hàng: <strong>15:30 - 15:40 (30 phút)</strong></span>
                                                    <br />
                                                    <MDBIcon icon="credit-card" style={icon3} /><span>Phương thức thanh toán: <strong>Thanh toán khi nhận được hàng</strong></span>
                                                </MDBCol>
                                            </MDBRow>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="card mb-4">
                                        <div className="card-body">
                                            <h5 className="mb-4">Cập nhật thông tin đơn hàng</h5>
                                            <div className="d-flex justify-content-center align-items-center">
                                                <MDBBtn
                                                    color="primary"
                                                    onClick={this.toggleCollapse('basicCollapse1')}
                                                    style={{ marginBottom: '1rem' }}
                                                >
                                                    <MDBIcon icon="location-arrow" className="pr-1" />Địa chỉ
                                                </MDBBtn>
                                                <MDBBtn
                                                    color="warning"
                                                    onClick={this.toggleCollapse('basicCollapse2')}
                                                    style={{ marginBottom: '1rem' }}
                                                >
                                                    <MDBIcon icon="barcode" className="pr-1" />Giảm giá
                                                </MDBBtn>
                                            </div>
                                            <MDBCollapse id='basicCollapse1' isOpen={collapseID}>
                                                <div className="card-body">
                                                    <form>
                                                        {/* <p className='h4 text-center py-4'>Subscribe</p> */}
                                                        <label
                                                            htmlFor='defaultFormCardNameEx'
                                                            className='grey-text font-weight-light'
                                                        >
                                                            Địa chỉ
                                                                    </label>
                                                        <input
                                                            type='text'
                                                            id='defaultFormCardNameEx'
                                                            className='form-control'
                                                        />
                                                        <br />
                                                        <label
                                                            htmlFor='defaultFormCardEmailEx'
                                                            className='grey-text font-weight-light'
                                                        >
                                                            Số điện thoại
                                                                        </label>
                                                        <input
                                                            type='text'
                                                            id='defaultFormCardEmailEx'
                                                            className='form-control'
                                                        />
                                                        <div className='text-center mt-4'>
                                                            <button className='btn btn-outline-warning' type='submit' style={{borderRadius:"10vw"}}>
                                                                Submit
                                                                <MDBIcon icon='paper-plane' className='ml-2' />
                                                            </button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </MDBCollapse>
                                            <MDBCollapse id='basicCollapse2' isOpen={collapseID}>
                                                <div className='card-body'>
                                                    <form>
                                                        <label
                                                            htmlFor='defaultFormCardNameEx'
                                                            className='grey-text font-weight-light'
                                                        >
                                                            Nhập mã giảm giá
                                                                    </label>
                                                        <input
                                                            type='text'
                                                            id='defaultFormCardNameEx'
                                                            className='form-control'
                                                        />
                                                        <div className='text-center mt-4'>
                                                            <button className='btn btn-outline-warning' type='submit' style={{borderRadius:"10vw"}}>
                                                                Submit
                                                                <MDBIcon icon='paper-plane' className='ml-2' />
                                                            </button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </MDBCollapse>
                                        </div>
                                    </div>
                                    <div className="card mb-4">
                                        <PaymentCart />
                                    </div>
                                </div>
                            </div>
                        </section>
                    </MDBContainer>
                </main>
                <footer>
                    <Footer/>
                </footer>
            </div >
        );
    }
}

export default Cart;