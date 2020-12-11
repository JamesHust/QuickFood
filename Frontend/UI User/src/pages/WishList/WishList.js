// Import thư viện React
import React from 'react';
// Import các component có sẵn từ thư viện MDBReact
import {
    MDBRow,
    MDBBreadcrumb,
    MDBBreadcrumbItem,
    MDBCarousel,
    MDBCarouselInner,
    MDBCarouselItem,
    MDBContainer,
} from 'mdbreact';
// Import các component đã tạo
import ItemWishList from './ItemWishList';
import HeaderAfterLogin from '../../components/HeaderAfterLogin';
import Footer from '../../components/Footer';

// Danh sách yêu thích
const WishList = () => {
    return (
        <div>
            <header>
                <HeaderAfterLogin />
            </header>
            <main>
                <MDBContainer className="mb-3">
                    {/* Đường dẫn */}
                    <MDBBreadcrumb light color='orange lighten-2' className="mt-5 mb-4">
                        <MDBBreadcrumbItem appendIcon icon='angle-right'>Trang chủ</MDBBreadcrumbItem>
                        <MDBBreadcrumbItem appendIcon icon='angle-right'>
                            Cá nhân
                        </MDBBreadcrumbItem>
                        <MDBBreadcrumbItem appendIcon icon='angle-right' active>
                            Danh sách yêu thích
                        </MDBBreadcrumbItem>
                    </MDBBreadcrumb>
                    <section className='text-center my-5'>
                        {/* Tên tiêu đề */}
                        <h2 className=' font-weight-bold text-center'>Danh sách yêu thích</h2>
                        {/* Chú thích thêm */}
                        <p className='grey-text text-center w-responsive mx-auto mb-3'>
                            QuickFood đã lưu lại toàn bộ những sản phẩm mà bạn yêu thích, hãy nhanh tay đặt mua và vote cho những sán phẩm yêu thích của bạn nhé!
                        </p>
                        {/* Danh sách sản phẩm */}
                        <MDBCarousel activeItem={1} length={3} slide={true} showControls={true} showIndicators={true} multiItem >
                            <MDBCarouselInner>
                                <MDBRow className="px-2">
                                    <MDBCarouselItem itemId='1'>
                                        <ItemWishList />
                                        <ItemWishList />
                                        <ItemWishList />
                                        <ItemWishList />
                                    </MDBCarouselItem>
                                    <MDBCarouselItem itemId='2'>
                                        <ItemWishList />
                                        <ItemWishList />
                                        <ItemWishList />
                                        <ItemWishList />
                                    </MDBCarouselItem>
                                    <MDBCarouselItem itemId='3'>
                                        <ItemWishList />
                                        <ItemWishList />
                                        <ItemWishList />
                                        <ItemWishList />
                                    </MDBCarouselItem>
                                </MDBRow>
                            </MDBCarouselInner>
                        </MDBCarousel>
                    </section>
                </MDBContainer>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default WishList;