// Import thư viện React
import React from "react";
// Import component có sẵn từ thư viện MDBReact
import { MDBRow, MDBCol, MDBIcon } from "mdbreact";
// Import ảnh dịch vụ, tiện ích
import service1 from '../assets/images/common/icon/donation.svg';
import service2 from '../assets/images/common/icon/clean.svg';
import service3 from '../assets/images/common/icon/piggy-bank.svg';
import service4 from '../assets/images/common/icon/fast-delivery.svg';

// Tiện ích, dịch vụ
const Service = () => {
    return (
        <div className="my-5 pb-5 text-center">
            {/* Tên tiêu đề */}
            <h2 className=" font-weight-bold">
                Dịnh vụ
            </h2>
            {/* Thêm chú thích */}
            <p className="grey-text w-responsive mx-auto mb-5">
                Chúng tôi luôn cố gắng đem đến sự thân thiện, lợi tích nhiều nhất và trải nghiệm tốt nhất cho khách hàng.
            </p>
            {/* Danh sách tiện ích, dịch vụ */}
            <MDBRow>
                {/* Từng tiện ích, dịch vụ */}
                <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
                    <div className="testimonial">
                        {/* Ảnh demo cho tiện ích, dịch vụ */}
                        <div className="avatar mx-auto my-3">
                            <img src={service1} className=" img-fluid w-75" alt="service1"/>
                        </div>
                        {/* Tên dịch vụ, tiện ích */}
                        <h4 className="mb-3 dark-grey-text">
                            <strong>Thân thiện</strong>
                        </h4>
                        {/* Thêm chú thích */}
                        <p>
                            <i className="fa fa-quote-left black-text mr-1" />QuickFood luôn tạo một một trường thân thiện nhất đến với người dùng.
                        </p>
                        {/* Phần vote */}
                        <div className="orange-text">
                            <MDBIcon icon="star" />
                            <MDBIcon icon="star" />
                            <MDBIcon icon="star" />
                            <MDBIcon icon="star" />
                            <MDBIcon icon="star" />
                        </div>
                    </div>
                </MDBCol>
                {/* Từng tiện ích, dịch vụ */}
                <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
                    <div className="testimonial">
                        {/* Ảnh demo cho tiện ích, dịch vụ */}
                        <div className="avatar mx-auto my-3">
                            <img src={service2} className=" img-fluid w-75" alt="service2"/>
                        </div>
                        {/* Tên dịch vụ, tiện ích */}
                        <h4 className="mb-3 dark-grey-text">
                            <strong>Sạch sẽ</strong>
                        </h4>
                        {/* Thêm chú thích */}
                        <p>
                            <i className="fa fa-quote-left black-text mr-1" />Tất cả các cửa hàng đăng ký dịch vụ QuickFood đều được kiểm duyệt qua chất lượng thực phẩm.
                        </p>
                        {/* Phần vote */}
                        <div className="orange-text">
                            <MDBIcon icon="star" />
                            <MDBIcon icon="star" />
                            <MDBIcon icon="star" />
                            <MDBIcon icon="star" />
                            <MDBIcon icon="star" />
                        </div>
                    </div>
                </MDBCol>
                {/* Từng tiện ích, dịch vụ */}
                <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
                    <div className="testimonial">
                        {/* Ảnh demo cho tiện ích, dịch vụ */}
                        <div className="avatar mx-auto my-3">
                            <img src={service3} className=" img-fluid w-75" alt="service3"/>
                        </div>
                        {/* Tên dịch vụ, tiện ích */}
                        <h4 className="mb-3 dark-grey-text">
                            <strong>Tiết kiệm</strong>
                        </h4>
                        {/* Thêm chú thích */}
                        <p>
                            <i className="fa fa-quote-left black-text mr-1" />QuickFood luôn có những mã giảm giá ưu đãi tốt nhất cho khách hàng.
                        </p>
                        {/* Phần vote */}
                        <div className="orange-text">
                            <MDBIcon icon="star" />
                            <MDBIcon icon="star" />
                            <MDBIcon icon="star" />
                            <MDBIcon icon="star" />
                            <MDBIcon icon="star" />
                        </div>
                    </div>
                </MDBCol>
                {/* Từng tiện ích, dịch vụ */}
                <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
                    <div className="testimonial">
                        {/* Ảnh demo cho tiện ích, dịch vụ */}
                        <div className="avatar mx-auto my-3">
                            <img src={service4} className=" img-fluid w-75" alt="service4"/>
                        </div>
                        {/* Tên dịch vụ, tiện ích */}
                        <h4 className="mb-3 dark-grey-text">
                            <strong>Giao hàng nhanh</strong>
                        </h4>
                        {/* Thêm chú thích */}
                        <p>
                            <i className="fa fa-quote-left black-text mr-1" />QuickFood luôn hỗ trợ các shipper để đưa sản phẩm người dùng nhanh nhất.
                        </p>
                        {/* Phần vote */}
                        <div className="orange-text">
                            <MDBIcon icon="star" />
                            <MDBIcon icon="star" />
                            <MDBIcon icon="star" />
                            <MDBIcon icon="star" />
                            <MDBIcon far icon="star" />
                        </div>
                    </div>
                </MDBCol>
                
            </MDBRow>
        </div >
    );
}

export default Service;