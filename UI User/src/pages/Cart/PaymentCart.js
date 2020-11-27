// Import thư viện React
import React, { Component } from 'react';

class PaymentCart extends Component {
    render() {
        return (
            <div>
                <div className="card-body">
                    <h5 className="mb-3">Hóa đơn</h5>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                            Manga Tea
                        <span>30.000</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                            Red hoodie
                        <span>30.000</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                            Phí giao hàng
                        <span>15.000</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                            <div>
                                <strong>Tổng tiền</strong>
                                <strong>
                                    <p className="mb-0">(Đã trừ khuyến mãi)</p>
                                </strong>
                            </div>
                            <span><strong><del style={{marginRight: "5px"}}>75.000</del>65.000</strong></span>
                        </li>
                    </ul>
                    <button type="button" className="btn btn-warning btn-block waves-effect waves-light">
                        Đặt đơn
                    </button>
                </div>
            </div>
        );
    }
}

export default PaymentCart;