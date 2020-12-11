// Import thư viện React
import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
// Import component có sẵn từ thư viện MDBReact
import { MDBIcon, MDBBtn } from 'mdbreact';
//Import component đã tạo
import ItemProductOfShop from './ItemProductOfShop';
import TabInfo from './TabInfo';
//Import css
import './style.css'

class InfoProduct extends Component {
    state = {
        value: 1
    }

    decrease = () => {
        this.setState({ value: this.state.value - 1 });
    }

    increase = () => {
        this.setState({ value: this.state.value + 1 });
    }
    render() {
        return (
            <div>
                {/*Section: Block Content*/}
                <section className="my-5">
                    <div className="row">
                        <div className="col-md-5 mb-4 mb-md-0">
                            <div className="view zoom z-depth-2 rounded">
                                <img className="img-fluid w-100" src="https://images.pexels.com/photos/1030947/pexels-photo-1030947.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Sample" />
                                <a href="#!">
                                    <div className="mask" />
                                </a>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <h4><strong>Phở xào ngan</strong></h4>
                            <p className="mb-2 text-muted text-uppercase small">Storage</p>
                            <div className="orange-text mb-2">
                                <MDBIcon icon="star" />
                                <MDBIcon icon="star" />
                                <MDBIcon icon="star" />
                                <MDBIcon icon="star" />
                                <MDBIcon icon="star" />
                            </div>
                            <p><span className="mr-1 mb-2"><strong>54.000VNĐ</strong></span></p>
                            <p className="  mb-2">
                                Sản phẩm được xào không dầu cùng với ngan tươi đã qua tẩm ướp, không chất bảo quản, được sản xuất trực tiếp tại địa chỉ quán
                            </p>
                            <div className="table-responsive">
                                <table className="table table-sm table-borderless mb-0">
                                    <tbody>
                                        <tr>
                                            <th className="pl-0 w-25" scope="row"><strong>Thành phần</strong></th>
                                            <td>Ngan tươi, phở đóng gói, gia vị tẩm ướp</td>
                                        </tr>
                                        <tr>
                                            <th className="pl-0 w-25" scope="row"><strong>Địa chỉ</strong></th>
                                            <td>Ngách 20, Ngõ Trại Cá, Trương Định, Hai Bà Trưng</td>
                                        </tr>
                                        <tr>
                                            <th className="pl-0 w-25" scope="row"><strong>Khoảng cách</strong></th>
                                            <td>2.5 km</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <hr />
                            <div className="table-responsive mb-2">
                                <table className="table table-sm table-borderless">
                                    <tbody>
                                        <tr>
                                            <td className="pl-0 pb-0 w-25"><strong>Số lượng</strong></td>
                                            <td className="pb-0" style={{ paddingLeft: "3vw" }}><strong>Chọn size</strong></td>
                                        </tr>
                                        <tr>
                                            <td className="pl-0">
                                                <div className="def-number-input number-input">
                                                    <button onClick={this.decrease} className="minus"></button>
                                                    <input className="quantity" name="quantity" value={this.state.value} onChange={() => console.log('change')}
                                                        type="number" />
                                                    <button onClick={this.increase} className="plus"></button>
                                                </div>
                                            </td>
                                            <td className="pl-5">
                                                <div className="mt-1">
                                                    <div className="form-check form-check-inline pl-0">
                                                        <input type="radio" className="form-check-input" style={{ width: "0.15vw" }} id="small" name="materialExampleRadios" defaultChecked />
                                                        <label className="form-check-label small text-uppercase card-link-secondary" htmlFor="small">S</label>
                                                    </div>
                                                    <div className="form-check form-check-inline pl-0">
                                                        <input type="radio" className="form-check-input" id="medium" name="materialExampleRadios" />
                                                        <label className="form-check-label small text-uppercase card-link-secondary" htmlFor="medium">L</label>
                                                    </div>
                                                    <div className="form-check form-check-inline pl-0">
                                                        <input type="radio" className="form-check-input" id="large" name="materialExampleRadios" />
                                                        <label className="form-check-label small text-uppercase card-link-secondary" htmlFor="large">XL</label>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {/* Button thanh toán */}
                            <MDBBtn className="ml-0 mr-2 orange lighten-1 border-button-1">
                                <MDBIcon far icon="money-bill-alt" className="pr-1 " />Mua ngay
                            </MDBBtn>
                            {/* Button thêm sản phẩm vào giỏ hàng */}
                            <MDBBtn color="warning" className="ml-0 border-button-1" outline>
                                <MDBIcon icon="shopping-cart" className="pr-1" />Thêm vào giỏ
                            </MDBBtn>
                        </div>
                    </div>
                </section>
                {/*Section: Block Content*/}
                {/* Classic tabs */}
                <Router>
                    <TabInfo />
                </Router>
                <hr />
                {/* Danh sách sản phẩm khác của cửa hàng */}
                <section>
                    <ItemProductOfShop />
                    <ItemProductOfShop />
                    <ItemProductOfShop />
                    <ItemProductOfShop />
                </section>
            </div>
        );
    }
}

export default InfoProduct;