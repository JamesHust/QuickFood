// Import thư viện React
import React from 'react';
// Import component có sẵn của thư viện MDBReact
import {
    MDBInputGroup,
    MDBDropdownToggle,
    MDBDropdownItem,
    MDBMask,
    MDBRow,
    MDBCol,
    MDBDropdown,
    MDBDropdownMenu,
    MDBBtn,
    MDBView,
    MDBContainer,
    MDBIcon
} from 'mdbreact';
// Import css cho trang
import '../../assets/css/Common/style.css'
// Import ảnh nền
import background from '../../assets/images/common/background.jpg';

// Background cho trang Home
class Carousel extends React.Component {
    render() {
        return (
            <div id='caltoaction'>
                {/* Ảnh nền */}
                <MDBView src={background}>
                    <MDBMask className='rgba-purple-slight ' />
                    {/* Nội dung */}
                    <MDBContainer
                        style={{ height: '100%', width: '100%', paddingTop: '14rem' }}
                        className='d-flex justify-content-center align-items-center'
                    >
                        <MDBRow>
                            <MDBCol md='12' className='mb-4 text-center'>
                                {/* Tên tiêu đề */}
                                <h1 className='display-4 font-weight-bold mb-0 pt-md-5 pt-5'>
                                    Đặt đồ ăn ngay
                                </h1>
                                {/* Khẩu hiệu */}
                                <h5 className=' pb-md-5 pb-sm-3 pb-5'>
                                    Giao hàng mọi lúc mọi nơi!
                                </h5>
                                {/* Thanh tìm kiếm */}
                                <MDBInputGroup
                                    hint="Nhập món ăn của bạn..."
                                    containerClassName="mb-3"
                                    append={
                                        <>
                                            <MDBBtn
                                                color="warning"
                                                className="m-0 px-3 py-2 z-depth-0 rounded-0"
                                            >
                                                Quận
                                            </MDBBtn>
                                            {/* Button dropdown */}
                                            <MDBDropdown dropright>
                                                <MDBDropdownToggle
                                                    color="warning"
                                                    size="md"
                                                    className="m-0 px-2 z-depth-0 rounded-right"
                                                >
                                                    <MDBIcon icon="caret-down" />
                                                </MDBDropdownToggle>
                                                {/* Danh sách các quận ở Hà Nội */}
                                                <MDBDropdownMenu color="primary" >
                                                    <MDBDropdownItem>Ba Đình</MDBDropdownItem>
                                                    <MDBDropdownItem>Bắc Từ Liêm</MDBDropdownItem>
                                                    <MDBDropdownItem>Cầu Giấy</MDBDropdownItem>
                                                    <MDBDropdownItem>Đống Đa</MDBDropdownItem>
                                                    <MDBDropdownItem>Hà Đông</MDBDropdownItem>
                                                    <MDBDropdownItem>Hai Bà Trưng</MDBDropdownItem>
                                                    <MDBDropdownItem>Hoàn Kiếm</MDBDropdownItem>
                                                    <MDBDropdownItem>Hoàng Mai</MDBDropdownItem>
                                                    <MDBDropdownItem>Long Biên</MDBDropdownItem>
                                                    <MDBDropdownItem>Nam Từ Liêm</MDBDropdownItem>
                                                    <MDBDropdownItem>Tây Hồ</MDBDropdownItem>
                                                    <MDBDropdownItem>Thanh Xuân</MDBDropdownItem>
                                                </MDBDropdownMenu>
                                            </MDBDropdown>
                                        </>
                                    }
                                />
                                {/* Button tìm kiếm */}
                                <MDBBtn   className="border-button blue-gradient">
                                    <MDBIcon icon="search" className='mr-2'/>
                                        Tìm kiếm
                                </MDBBtn>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </MDBView>
            </div>
        );
    }
}

export default Carousel;