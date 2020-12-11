// Import thư viện React
import React, { Component } from 'react';
// Import các component có sẵn từ thư viện MDBReact 
import {
    MDBCol,
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardFooter,
    MDBTooltip,
} from 'mdbreact';
// Import demo cho sản phẩm giảm giá
import img1 from '../assets/images/common/sale-food.jpeg'

// Mỗi sản phẩm giảm giá
class ItemSlideProduct extends Component {
    render() {
        return (
            <MDBCol md='4'>
                <MDBCard narrow ecommerce className='mb-2'>
                    {/* Ảnh demo cho sản phẩm */}
                    <MDBCardImage
                        cascade
                        top
                        src={img1}
                        alt='sample photo'
                    />
                    {/* Nội dung thẻ */}
                    <MDBCardBody cascade>
                        {/* Tên sản phẩm */}
                        <a href='#!' className='text-muted'>
                            <h5>Bánh mỳ trứng</h5>
                        </a>
                        {/* Thông tin sale */}
                        <MDBCardTitle>
                            <strong>
                                <a href='#!'>Giảm 25%</a>
                            </strong>
                        </MDBCardTitle>
                        {/* Địa chỉ cửa hàng */}
                        <MDBCardText>Ngõ Tự Do, Hai Bà Trưng, Hà Nội</MDBCardText>
                        <MDBCardFooter className='px-1'>
                            {/* Giá tiền */}
                            <span className='float-left'>35.000VNĐ</span>
                            <span className='float-right'>
                                {/* Button redirect đến chi tiết sản phẩm */}
                                <MDBTooltip domElement placement='top'>
                                    <i className='grey-text fa fa-eye mr-3 more-icon' />
                                    <span>Chi tiết</span>
                                </MDBTooltip>
                                {/* Button thêm sản phẩm vào danh mục yêu thích */}
                                <MDBTooltip domElement placement='top'>
                                    <i className='grey-text fa fa-heart like-icon' />
                                    <span>Yêu thích</span>
                                </MDBTooltip>
                            </span>
                        </MDBCardFooter>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        );
    }
}

export default ItemSlideProduct;