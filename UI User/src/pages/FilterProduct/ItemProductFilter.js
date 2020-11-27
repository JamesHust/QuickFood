// Import thư viện React
import React from 'react';
// Import các component có sẵn của thư viện MDBReact
import {
    MDBCol,
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardText,
    MDBCardFooter,
    MDBIcon,
    MDBTooltip,
} from 'mdbreact';

// Từng sản phẩm trong trang lọc sản phẩm
const ItemProductFilter = () => {
    return (
        <MDBCol lg='4' md='6' className='mb-lg-0 mb-4 mt-3 mb-2'>
            <MDBCard cascade narrow ecommerce>
                {/* Ảnh demo cho sản phẩm */}
                <MDBCardImage
                    cascade
                    src='https://images.pexels.com/photos/2297961/pexels-photo-2297961.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                    top
                    alt='sample photo'
                    overlay='white-slight'
                />
                <MDBCardBody cascade className='text-center'>
                    {/* Tên sản phẩm */}
                    <h5 className="mb-2 ">
                        <strong>
                            <a href='#!'>Xôi trứng chảy</a>
                        </strong>
                    </h5>
                    {/* Địa chỉ quán */}
                    <MDBCardText><MDBIcon icon="map-marker-alt" className="mr-1 red-text"/>22 ngách 20, ngõ Trại Cá, Hoàng Mai, Hà Nội</MDBCardText>
                    <MDBCardFooter className='px-1'>
                        {/* Giá tiền sản phẩm */}
                        <span className='float-left font-weight-bold'>
                            <strong>45.000</strong>
                        </span>
                        {/* Các action */}
                        <span className='float-right'>
                            {/* Action thêm vào giỏ hàng */}
                            <MDBTooltip domElement placement='top'>
                                <i className='grey-text fa fa-shopping-cart ml-3 icon' />
                                <span>Thêm vào giỏ</span>
                            </MDBTooltip>
                            {/* Action chia sẻ - hiện chưa phát triển */}
                            <MDBTooltip domElement placement='top'>
                                <i className='grey-text fa fa-share-alt ml-3 icon' />
                                <span>Chia sẻ</span>
                            </MDBTooltip>
                            {/* Action thêm vào sản phẩm yêu thích */}
                            <MDBTooltip domElement placement='top'>
                                <i className='grey-text fa fa-heart ml-3 icon' />
                                <span>Yêu thích</span>
                            </MDBTooltip>
                        </span>
                    </MDBCardFooter>
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
    );
};

export default ItemProductFilter;