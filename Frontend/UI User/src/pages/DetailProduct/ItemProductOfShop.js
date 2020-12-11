// Import thư viện React
import React, { Component } from "react";
// Import component có sẵn từ thư viện MDBReact
import { MDBIcon, MDBBtn } from "mdbreact";

class ItemProductOfShop extends Component {
    render() {
        return (
            <div className="row mb-4">
                <div className="col-md-5 col-lg-3 col-xl-3">
                    <div className="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
                        <img className="img-fluid w-100" src="https://images.pexels.com/photos/1055270/pexels-photo-1055270.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Sample" />
                        <a href="#!">
                            <div className="mask">
                                <img className="img-fluid w-100" src="https://images.pexels.com/photos/1055270/pexels-photo-1055270.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                                <div className="mask rgba-black-slight" />
                            </div>
                        </a>
                    </div>
                </div>
                <div className="col-md-7 col-lg-9 col-xl-9">
                    <div className="row">
                        <div className="col-lg-8 col-xl-8">
                            <h5><strong>Bánh bơ táo</strong></h5>
                            <p className="mb-2 text-muted text-uppercase small">Bánh ngọt</p>
                            {/* Phần vote */}
                            <div className="orange-text">
                                <MDBIcon icon="star" />
                                <MDBIcon icon="star" />
                                <MDBIcon icon="star" />
                                <MDBIcon icon="star" />
                                <MDBIcon far icon="star" />
                            </div>
                            <hr />
                            <p className="mb-lg-0">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
                                sapiente illo. Sit error voluptas repellat rerum quidem, soluta enim perferendis
                                voluptates laboriosam. Distinctio, officia quis dolore quos sapiente tempore alias.
                                    </p>
                        </div>
                        <div className="col-lg-4 col-xl-4">
                            <h6 className="mb-3"><strong>157.000VNĐ</strong></h6>
                            <div className="my-4 d-flex">
                                {/* Button thanh toán */}
                                <MDBBtn className="ml-0 mr-2 orange lighten-1 border-button-1 px-3 py-2">
                                    <MDBIcon icon="info-circle" className="pr-1 " />Chi tiết
                                </MDBBtn>
                                {/* Button thêm sản phẩm vào giỏ hàng */}
                                <MDBBtn color="warning" className="ml-0 border-button-1 px-3 py-2" outline>
                                    <MDBIcon icon="shopping-cart" className="pr-1" />Thêm vào giỏ
                                </MDBBtn>
                            </div>
                            <MDBBtn color="red" className="border-button-1 ml-0" style={{ padding: "0.65rem 0.8rem", size: "1vw" }}>
                                <MDBIcon icon="heart" />
                            </MDBBtn>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ItemProductOfShop;