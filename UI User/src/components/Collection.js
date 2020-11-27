// import component thư viện MDBReact
import React from "react";
import {MDBRow, MDBCol, MDBCard, MDBIcon} from "mdbreact";

// import ảnh demo cho bộ sưu tập
import img1 from '../assets/images/common/collection-1.jpg'
import img2 from '../assets/images/common/collection-2.jpg'
import img3 from '../assets/images/common/collection-5.jpg'
import img4 from '../assets/images/common/collection-6.jpg'

// Bộ sưu tập 
const Collection = () => {
  return (
    <section className="text-center my-5">
      {/* Tên tiêu đề */}
      <h2 className="font-weight-bold text-center">
        Bộ sưu tập
      </h2>
      {/* Chú thích tiêu đề */}
      <p className="grey-text text-center w-responsive mx-auto mb-5">
        QuickFood đem những bộ sưu tập hợp trend nhất đến với các bạn.
      </p>
      {/* Danh sách bộ sưu tập */}
      <MDBRow>
        {/* Một thẻ bộ sưu tập */}
        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
          <MDBCard collection className="z-depth-1-half">
            <div className="view zoom">
              <img
                src={img1}
                className="img-fluid"
                alt=""
              />
              <div className="stripe dark">
                <a href="#!">
                  <p>
                    Bánh ngọt <MDBIcon icon="angle-right" />
                  </p>
                </a>
              </div>
            </div>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
          <MDBCard collection className="z-depth-1-half">
            <div className="view zoom">
              <img
                src={img2}
                className="img-fluid"
                alt=""
              />
              <div className="stripe dark">
                <a href="#!">
                  <p>
                    Pizza <MDBIcon icon="angle-right" />
                  </p>
                </a>
              </div>
            </div>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
          <MDBCard collection className="z-depth-1-half">
            <div className="view zoom">
              <img
                src={img3}
                className="img-fluid"
                alt=""
              />
              <div className="stripe dark">
                <a href="#!">
                  <p>
                    Đồ ăn nhanh <MDBIcon icon="angle-right" />
                  </p>
                </a>
              </div>
            </div>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
          <MDBCard collection className="z-depth-1-half">
            <div className="view zoom">
              <img
                src={img4}
                className="img-fluid"
                alt=""
              />
              <div className="stripe dark">
                <a href="#!">
                  <p>
                    Bánh mỳ <MDBIcon icon="angle-right" />
                  </p>
                </a>
              </div>
            </div>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </section>
  );
}

export default Collection;