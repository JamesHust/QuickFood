// Import thư viện React
import React, { Component } from 'react';
// Import các component có sẵn từ thư viện MDBReact
import { MDBRow, MDBCol, MDBIcon, MDBContainer, MDBBreadcrumbItem, MDBBreadcrumb, MDBPageItem, MDBPageNav, MDBPagination, MDBInputGroup, MDBDropdown, MDBDropdownMenu, MDBDropdownItem } from 'mdbreact';
// Import các component đã tạo
import Footer from '../../components/Footer';
import HeaderNotLogin from '../../components/HeaderNotLogin';
import ItemProductFilter from './ItemProductFilter';

// Trang lọc sản phẩm, tìm kiếm sản phẩm
class FilterProduct extends Component {
    render() {
        return (
            <div>
                <header>
                    <HeaderNotLogin />
                </header>
                <main>
                    <MDBContainer className="mb-3">
                        {/* Đường dẫn */}
                        <MDBBreadcrumb light color='orange lighten-2' className="mt-5 mb-4">
                            <MDBBreadcrumbItem appendIcon icon='angle-right'>Trang chủ</MDBBreadcrumbItem>
                            <MDBBreadcrumbItem appendIcon icon='angle-right' active>
                                Danh mục sản phẩm
                            </MDBBreadcrumbItem>
                        </MDBBreadcrumb>
                        {/*Grid row*/}
                        <div className="row mt-5">
                            {/*Grid column*/}
                            <div className="col-md-4 mb-4">
                                {/* Thanh lọc sản phẩm */}
                                <section>
                                    {/* Danh sách các mục nhỏ */}
                                    <section>
                                        <h5 className="mb-3"><strong>Top tìm kiếm</strong></h5>
                                        <form className="form-inline mt-4 mb-4">
                                            <input className="form-control form-control-sm mr-3 w-50" type="text" placeholder="Tìm kiếm sản phẩm" aria-label="Search" />
                                            <MDBIcon icon="search" className="icon"/>
                                        </form>
                                        <div className="text-muted small text-uppercase mb-4">
                                            <p className="mb-3"><a href="#!" className="card-link-secondary">Phở &amp; Bún</a></p>
                                            <p className="mb-3"><a href="#!" className="card-link-secondary">Cơm rang &amp; Cơm văn phòng</a></p>
                                            <p className="mb-4"><a href="#!" className="card-link-secondary">Bánh giò</a></p>
                                            <p className="mb-3"><a href="#!" className="card-link-secondary">Xôi &amp; Chè</a></p>
                                            <p className="mb-3"><a href="#!" className="card-link-secondary">Kem &amp; Sữa chua</a></p>
                                        </div>
                                    </section>
                                    {/* Lọc theo yêu cầu */}
                                    <section className="filters">
                                        <h5><strong>Lọc sản phẩm</strong></h5>
                                        {/* Lọc theo top trending */}
                                        <section filter="condition" className="mb-4">
                                            <h6 className="font-weight-bold mb-3">Trending</h6>
                                            <div className="form-check pl-0 mb-3">
                                                <input type="checkbox" className="filter-option form-check-input filled-in" condition="new" id="new" />
                                                <label className="form-check-label small text-uppercase card-link-secondary" htmlFor="new">Top Tháng</label>
                                            </div>
                                            <div className="form-check pl-0 mb-3">
                                                <input condition="used" type="checkbox" className="filter-option form-check-input filled-in" id="used" />
                                                <label className="form-check-label small text-uppercase card-link-secondary" htmlFor="used">Top Tuần</label>
                                            </div>
                                            <div className="form-check pl-0 mb-3">
                                                <input condition="collectible" type="checkbox" className="filter-option form-check-input filled-in" id="collectible" />
                                                <label className="form-check-label small text-uppercase card-link-secondary" htmlFor="collectible">Top Ngày</label>
                                            </div>
                                        </section>
                                        {/* Lọc theo sao đánh giá */}
                                        <section filter="rating" className="mb-3">
                                            <h6 className="font-weight-bold mb-3">Đánh giá</h6>
                                            <label htmlFor="customer-rating-4" className="mb-2">
                                                <ul className='rating waves-light mb-2'>
                                                    <li>
                                                        <MDBIcon icon='star' />
                                                    </li>
                                                    <li>
                                                        <MDBIcon icon='star' />
                                                    </li>
                                                    <li>
                                                        <MDBIcon icon='star' />
                                                    </li>
                                                    <li>
                                                        <MDBIcon icon='star' />
                                                    </li>
                                                    <li>
                                                        <MDBIcon icon='star' />
                                                    </li>
                                                </ul>
                                                <input id="customer-rating-4" className="filter-option" type="checkbox" rating={5} />
                                            </label>
                                            <br />
                                            <label htmlFor="customer-rating-3" className="mb-0">
                                                <ul className='rating waves-light mb-1'>
                                                    <li>
                                                        <MDBIcon icon='star' />
                                                    </li>
                                                    <li>
                                                        <MDBIcon icon='star' />
                                                    </li>
                                                    <li>
                                                        <MDBIcon icon='star' />
                                                    </li>
                                                    <li>
                                                        <MDBIcon icon='star' />
                                                    </li>
                                                    <li>
                                                        <MDBIcon far icon='star' />
                                                    </li>
                                                    <li>
                                                        <p className="small text-uppercase card-link-secondary px-2 black-text">trở lên</p>
                                                    </li>
                                                </ul>
                                                <input id="customer-rating-3" className="filter-option" type="checkbox" rating={4} />
                                            </label>
                                            <br />
                                            <label htmlFor="customer-rating-4" className="mb-0">
                                                <ul className='rating waves-light mb-1'>
                                                    <li>
                                                        <MDBIcon icon='star' />
                                                    </li>
                                                    <li>
                                                        <MDBIcon icon='star' />
                                                    </li>
                                                    <li>
                                                        <MDBIcon icon='star' />
                                                    </li>
                                                    <li>
                                                        <MDBIcon far icon='star' />
                                                    </li>
                                                    <li>
                                                        <MDBIcon far icon='star' />
                                                    </li>
                                                    <li>
                                                        <p className="small text-uppercase card-link-secondary px-2 black-text">trở lên</p>
                                                    </li>
                                                </ul>
                                                <input id="customer-rating-4" className="filter-option" type="checkbox" rating={3} />
                                            </label>
                                            <br />
                                            <label htmlFor="customer-rating-4" className="mb-0">
                                                <ul className='rating waves-light mb-1'>
                                                    <li>
                                                        <MDBIcon icon='star' />
                                                    </li>
                                                    <li>
                                                        <MDBIcon icon='star' />
                                                    </li>
                                                    <li>
                                                        <MDBIcon far icon='star' />
                                                    </li>
                                                    <li>
                                                        <MDBIcon far icon='star' />
                                                    </li>
                                                    <li>
                                                        <MDBIcon far icon='star' />
                                                    </li>
                                                    <li>
                                                        <p className="small text-uppercase card-link-secondary px-2 black-text">trở lên</p>
                                                    </li>
                                                </ul>
                                                <input id="customer-rating-4" className="filter-option" type="checkbox" rating={2} />
                                            </label>
                                            <br />
                                            <label htmlFor="customer-rating-4" className="mb-0">
                                                <ul className='rating waves-light mb-1'>
                                                    <li>
                                                        <MDBIcon icon='star' />
                                                    </li>
                                                    <li>
                                                        <MDBIcon far icon='star' />
                                                    </li>
                                                    <li>
                                                        <MDBIcon far icon='star' />
                                                    </li>
                                                    <li>
                                                        <MDBIcon far icon='star' />
                                                    </li>
                                                    <li>
                                                        <MDBIcon far icon='star' />
                                                    </li>
                                                    <li>
                                                        <p className="small text-uppercase card-link-secondary px-2 black-text">trở lên</p>
                                                    </li>
                                                </ul>
                                                <input id="customer-rating-4" className="filter-option" type="checkbox" rating={1} />
                                            </label>
                                        </section>
                                        {/* Lọc theo mức giá tiền */}
                                        <section className="mb-4" filter="price">
                                            <h6 className="font-weight-bold mb-3">Giá tiền</h6>
                                            <div className="form-check pl-0 mb-3">
                                                <input price="0-25" type="radio" className="filter-option form-check-input" id="under25" name="materialExampleRadios" />
                                                <label className="form-check-label small text-uppercase card-link-secondary" htmlFor="under25">Dưới 25.000</label>
                                            </div>
                                            <div className="form-check pl-0 mb-3">
                                                <input price="25-50" type="radio" className="filter-option form-check-input" id={2550} name="materialExampleRadios" />
                                                <label className="form-check-label small text-uppercase card-link-secondary" htmlFor={2550}>25.000 - 50.000</label>
                                            </div>
                                            <div className="form-check pl-0 mb-3">
                                                <input price="50-100" type="radio" className="filter-option form-check-input" id={50100} name="materialExampleRadios" />
                                                <label className="form-check-label small text-uppercase card-link-secondary" htmlFor={50100}>50.000 - 100.000</label>
                                            </div>
                                            <div className="form-check pl-0 mb-3">
                                                <input price="100-200" type="radio" className="filter-option form-check-input" id={100200} name="materialExampleRadios" />
                                                <label className="form-check-label small text-uppercase card-link-secondary" htmlFor={100200}>100.000 - 200.000</label>
                                            </div>
                                            <div className="form-check pl-0 mb-3">
                                                <input price="200-*" type="radio" className="filter-option form-check-input" id="200above" name="materialExampleRadios" />
                                                <label className="form-check-label small text-uppercase card-link-secondary" htmlFor="200above">Trên 200.000</label>
                                            </div>
                                        </section>
                                        {/* Lọc theo size */}
                                        <section className="mb-4" filter="size">
                                            <h6 className="font-weight-bold mb-3">Cỡ</h6>
                                            <div className="form-check pl-0 mb-3">
                                                <input size={34} type="checkbox" className="filter-option form-check-input filled-in" id={34} />
                                                <label className="form-check-label small text-uppercase card-link-secondary" htmlFor={34}>S</label>
                                            </div>
                                            <div className="form-check pl-0 mb-3">
                                                <input size={36} type="checkbox" className="filter-option form-check-input filled-in" id={36} />
                                                <label className="form-check-label small text-uppercase card-link-secondary" htmlFor={36}>L</label>
                                            </div>
                                            <div className="form-check pl-0 mb-3">
                                                <input size={38} type="checkbox" className="filter-option form-check-input filled-in" id={38} />
                                                <label className="form-check-label small text-uppercase card-link-secondary" htmlFor={38}>XL</label>
                                            </div>
                                            <div className="collapse pt-3" id="collapseExample">
                                                <div className="form-check pl-0 mb-3">
                                                    <input size={42} type="checkbox" className="filter-option form-check-input filled-in" id={42} />
                                                    <label className="form-check-label small text-uppercase card-link-secondary" htmlFor={42}>42</label>
                                                </div>
                                                <div className="form-check pl-0 mb-3">
                                                    <input size={44} type="checkbox" className="filter-option form-check-input filled-in" id={44} />
                                                    <label className="form-check-label small text-uppercase card-link-secondary" htmlFor={44}>44</label>
                                                </div>
                                                <div className="form-check pl-0 mb-3">
                                                    <input size={46} type="checkbox" className="filter-option form-check-input filled-in" id={46} />
                                                    <label className="form-check-label small text-uppercase card-link-secondary" htmlFor={46}>46</label>
                                                </div>
                                                <div className="form-check pl-0 mb-3">
                                                    <input size={50} type="checkbox" className="filter-option form-check-input filled-in" id={50} />
                                                    <label className="form-check-label small text-uppercase card-link-secondary" htmlFor={50}>50</label>
                                                </div>
                                            </div>
                                        </section>
                                        {/* Lọc theo màu */}
                                        <section className="mb-4" filter="color">
                                            <h6 className="font-weight-bold mb-3">Color</h6>
                                            <div className="btn-group btn-group-toggle btn-color-group d-block mt-n2 ml-n2" data-toggle="buttons">
                                                <label htmlFor="color-1" className="btn rounded-circle white border-inset-grey p-3 m-2">
                                                    <input id="color-1" className="filter-option" type="checkbox" color="white" />
                                                </label>
                                                <label htmlFor="color-2" className="btn rounded-circle light-blue lighten-1 p-3 m-2">
                                                    <input id="color-2" className="filter-option" type="checkbox" color="light-blue lighten-1" />
                                                </label>
                                                <label htmlFor="color-3" className="btn rounded-circle yellow lighten-1 p-3 m-2">
                                                    <input id="color-3" className="filter-option" type="checkbox" color="yellow lighten-1" />
                                                </label>
                                                <label htmlFor="color-4" className="btn rounded-circle deep-orange lighten-1 p-3 m-2">
                                                    <input id="color-4" className="filter-option" type="checkbox" color="deep-orange lighten-1" />
                                                </label>
                                                <label htmlFor="color-5" className="btn rounded-circle green lighten-1 p-3 m-2">
                                                    <input id="color-5" className="filter-option" type="checkbox" color="green lighten-1" />
                                                </label>
                                            </div>
                                        </section>
                                        {/* Section: Color */}
                                    </section>
                                    {/* Section: Filters */}
                                </section>
                                {/* Section: Sidebar */}
                            </div>
                            {/* Danh sách sản phẩm */}
                            <div className="col-md-8 mb-4">
                                {/* Sắp xếp sản phẩm và tìm kiếm theo tên */}
                                <section>
                                    <MDBRow>
                                        {/* Chuyển kiểu hiển thị */}
                                        <MDBCol lg='4' md='6' className="text-center text-md-left pt-2">
                                            <a href="#!" className="text-reset"><i className="fas fa-th-list fa-lg mr-1" /></a>
                                            <a href="#!" className="text-reset"><i className="fas fa-th-large fa-lg" /></a>
                                        </MDBCol>
                                        {/* Sắp xếp danh sách sản phẩm */}
                                        <MDBCol>
                                            <div className="d-flex flex-wrap">
                                                <MDBInputGroup
                                                    containerClassName="mb-3"
                                                    inputs={
                                                        <select className="browser-default custom-select">
                                                            <option value="0" selected disabled hidden>Sắp xếp theo</option>
                                                            <option value="1">Giá tiền tăng</option>
                                                            <option value="2">Giá tiền giảm</option>
                                                            <option value="3">Mua nhiều nhất</option>
                                                            <option value="4">Mua ít nhất</option>
                                                        </select>
                                                    }
                                                />
                                            </div>
                                        </MDBCol>
                                        {/* Phân trang */}
                                        <MDBCol lg='4' md='6' >
                                            <MDBPagination circle className="float-right">
                                                <MDBPageItem>
                                                    <MDBPageNav className="page-link">
                                                        <MDBIcon icon="angle-left" />
                                                    </MDBPageNav>
                                                </MDBPageItem>
                                                {/* Chia trang */}
                                                <MDBPageItem active>
                                                    <MDBPageNav className="page-link">
                                                        1 <span className="sr-only">(current)</span>
                                                    </MDBPageNav>
                                                </MDBPageItem>
                                                <MDBPageItem>
                                                    <MDBPageNav className="page-link">
                                                        2
                                                    </MDBPageNav>
                                                </MDBPageItem>
                                                <MDBPageItem>
                                                    <MDBPageNav className="page-link">
                                                        3
                                                    </MDBPageNav>
                                                </MDBPageItem>
                                                <MDBPageItem>
                                                    <MDBPageNav className="page-link">
                                                        <MDBIcon icon="angle-right" />
                                                    </MDBPageNav>
                                                </MDBPageItem>
                                            </MDBPagination>
                                        </MDBCol>
                                    </MDBRow>

                                    <MDBRow>
                                        <ItemProductFilter />
                                        <ItemProductFilter />
                                        <ItemProductFilter />
                                        <ItemProductFilter />
                                        <ItemProductFilter />
                                        <ItemProductFilter />
                                        <ItemProductFilter />
                                        <ItemProductFilter />
                                        <ItemProductFilter />
                                    </MDBRow>
                                </section>
                                {/* Section: Block Content */}
                            </div>
                            {/*Grid column*/}
                        </div>
                        {/*Grid row*/}
                    </MDBContainer>
                </main>
                {/*Main layout*/}
                <footer>
                    <Footer />
                </footer>
            </div >
        );
    }
}

export default FilterProduct;