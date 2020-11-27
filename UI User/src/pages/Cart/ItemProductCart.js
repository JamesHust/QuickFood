// Import thư viện React
import React, { Component } from 'react';
// Import css cho trang
import '../../assets/css/Cart/style.css'

class ItemProductCart extends Component {
    // Giá trị mặc định cho số lượng sản phẩm
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
            <div className="row mb-4">
                <div className="col-md-5 col-lg-3 col-xl-3">
                    {/* Phần hình ảnh demo cho sản phẩm */}
                    <div className="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
                        <img className="img-fluid w-100" src="https://images.pexels.com/photos/3185509/pexels-photo-3185509.png?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Sample" />
                        <a href="#!">
                            <div className="mask waves-effect waves-light">
                                <img className="img-fluid w-100" src="https://images.pexels.com/photos/3185509/pexels-photo-3185509.png?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                                <div className="mask rgba-black-slight waves-effect waves-light" />
                            </div>
                        </a>
                    </div>
                </div>
                <div className="col-md-7 col-lg-9 col-xl-9">
                    <div>
                        <div className="d-flex justify-content-between flex-wrap">
                            <div>
                                {/* Tên sản phẩm */}
                                <h5>Kem bơ</h5>
                                {/* Các trường thông tin bổ sung */}
                                <p className="mb-3 text-muted text-uppercase small"></p>
                                <p className="mb-2 text-muted text-uppercase small">Mức đá: 50% Đá</p>
                                <p className="mb-2 text-muted text-uppercase small">Mức đường: 50% Đường</p>
                                <p className="mb-2 text-muted text-uppercase small">TOPPING: Trân Châu Hoàng Kim</p>
                                <p className="mb-2 text-muted text-uppercase small">Cỡ: L</p>
                                {/* Phần ghi chứ */}
                                <div className="md-form md-outline">
                                    <input type="text" id="materialRegisterFormFirstName" className="form-control" placeholder="Thêm ghi chú..." />
                                </div>
                            </div>
                            <div>
                                {/* Số lượng sản phẩm */}
                                <div className="def-number-input number-input mb-4">
                                    <button onClick={this.decrease} className="minus"></button>
                                    <input className="quantity" name="quantity" value={this.state.value} onChange={() => console.log('change')}
                                        type="number" />
                                    <button onClick={this.increase} className="plus"></button>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <div>
                                {/* Button xóa sản phẩm khỏi giỏ hàng */}
                                <a href="#!" type="button" className="card-link-secondary small text-uppercase mr-3 delete-icon"><i className="fas fa-trash-alt mr-1 " /> Xóa sản phẩm </a>
                                {/* Button thêm sản phẩm yêu thích */}
                                <a href="#!" type="button" className="card-link-secondary small text-uppercase like-icon"><i className="fas fa-heart mr-1" /> Yêu thích </a>
                            </div>
                            <p className="mb-0"><span><strong>30.000</strong></span></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ItemProductCart;