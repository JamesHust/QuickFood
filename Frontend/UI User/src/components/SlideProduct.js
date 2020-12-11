// Import thư viện React
import React from 'react';
// Import các component có sẵn của thư viện MDBReact
import {
    MDBRow,
    MDBCarousel,
    MDBCarouselInner,
    MDBCarouselItem,
} from 'mdbreact';
// Import Component từng sản phẩm sale đã tạo
import ItemSlideProduct from './ItemSlideProduct';

// Danh sách sản phẩm sale
const SlideProduct = () => {
    return (
        <section className='text-center my-5'>
            {/* Tên tiêu đề */}
            <h2 className=' font-weight-bold text-center my-5'>Ưu đãi ngày hôm nay</h2>
            <MDBCarousel activeItem={1} length={3} slide={true} showControls={false} showIndicators={true} multiItem>
                <MDBCarouselInner className="px-1">
                    <MDBRow>
                        {/* Danh sách sản phẩm mỗi lượt chạy slide */}
                        <MDBCarouselItem itemId='1'>
                            {/* Từng sản phẩm sale */}
                            <ItemSlideProduct />
                            <ItemSlideProduct />
                            <ItemSlideProduct />
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId='2'>
                            <ItemSlideProduct />
                            <ItemSlideProduct />
                            <ItemSlideProduct />
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId='3'>
                            <ItemSlideProduct />
                            <ItemSlideProduct />
                            <ItemSlideProduct />
                        </MDBCarouselItem>
                    </MDBRow>
                </MDBCarouselInner>
            </MDBCarousel>
        </section>
    );
};

export default SlideProduct;