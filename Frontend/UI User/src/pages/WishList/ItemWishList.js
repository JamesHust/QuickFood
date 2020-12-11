// Import thư viện React
import React, { Component } from 'react';
// Import các component có sẵn từ thư viện MDBReact
import {
    MDBCol,
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBIcon,
    MDBCardText,
    MDBCardFooter,
    MDBTooltip,
} from 'mdbreact';

class ItemWishList extends Component {
    render() {
        return (
            <div>
                <MDBCol md='3' className='clearfix d-none d-md-block'>
                    <MDBCard narrow ecommerce className='mb-2'>
                        <MDBCardImage cascade top src='https://images.pexels.com/photos/5713738/pexels-photo-5713738.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' alt='sample photo' />
                        <MDBCardBody cascade>
                            <h5>
                                <strong>
                                    <a href='#!'>Nộm lạc</a>
                                </strong>
                            </h5>
                            {/* Địa chỉ quán */}
                            <MDBCardText><MDBIcon icon="map-marker-alt" className="mr-1 red-text" />22 ngách 20, ngõ Trại Cá, Hoàng Mai, Hà Nội</MDBCardText>
                            <MDBCardFooter className='px-1'>
                                <span className='float-left'>45.000</span>
                                <span className='float-right'>
                                    <MDBTooltip domElement placement='top'>
                                        <i className='grey-text fa fa-eye mr-3 icon' />
                                        <span>Xem chi tiết</span>
                                    </MDBTooltip>
                                    <MDBTooltip domElement placement='top'>
                                        <i className='grey-text fa fa-trash icon' />
                                        <span>Xóa khỏi danh sách</span>
                                    </MDBTooltip>
                                </span>
                            </MDBCardFooter>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </div>
        );
    }
}

export default ItemWishList;