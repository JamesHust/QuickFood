// Import thư viện React
import React, { Component } from 'react';
// Import component có sẵn từ thư viện MDBReact
import { MDBContainer } from 'mdbreact';
// Import các Component đã tạo
import Collection from '../../components/Collection';
import Footer from '../../components/Footer';
import HeaderNotLogin from '../../components/HeaderNotLogin';
import Service from '../../components/Service';
import SlideProduct from '../../components/SlideProduct';
import BackgroundHome from './BackgroundHome';

// Trang chủ
class Home extends Component {
    render() {
        return (
            <div>
                {/* Header */}
                <header>
                    {/* Thanh navbar khi chưa đăng nhập */}
                    <HeaderNotLogin />
                    {/* Ảnh nền cho trang Home */}
                    <BackgroundHome />
                </header>
                {/* Main */}
                <main>
                    <MDBContainer className="mb-3">
                        {/* Danh sách sản phẩm ưu đãi */}
                        <SlideProduct/>
                        {/* Danh sách bộ sưu tập */}
                        <Collection/>
                        {/* Danh sách dịch vụ, tiện tích */}
                        <Service/>
                    </MDBContainer>
                </main>
                {/* Footer */}
                <footer>
                    <Footer/>
                </footer>
            </div>
        );
    }
}

export default Home;