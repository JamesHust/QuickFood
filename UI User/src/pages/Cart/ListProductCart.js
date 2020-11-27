// Import thư viện React
import React, { Component } from 'react';

// Import thư viện css

// Import component có sẵn 
import ItemProductCart from './ItemProductCart';

class ListProductCart extends Component {
    render() {
        return (
            <div>
                <div className="card-body">
                    <h5 className="mb-4">Giỏ hàng (<span>2</span> sản phẩm)</h5>
                    <ItemProductCart />
                    <hr className="mb-4" />
                    <ItemProductCart />
                </div>
            </div>
        );
    }
}

export default ListProductCart;