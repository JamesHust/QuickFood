import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {
  MDBTabPane,
  MDBTabContent,
  MDBNav,
  MDBNavItem,
  MDBNavLink,
  MDBInput,
  MDBCol,
  MDBBtn,
  MDBIcon,
} from "mdbreact";
//Import css
import '../../assets/css/Common/style.css'

class TabInfo extends Component {
  state = {
    activeItemOuterTabs: "1",
    activeItemInnerPills: "1",
  };

  toggleOuterTabs = tab => e => {
    if (this.state.activeItemOuterTabs2 !== tab) {
      this.setState({
        activeItemOuterTabs: tab
      });
    }
  };

  toggleInnerPills = tab => e => {
    if (this.state.activeItemInnerPills !== tab) {
      this.setState({
        activeItemInnerPills: tab
      });
    }
  };

  render() {
    return (
      <Router>
        <div className="classic-tabs">
          <MDBNav classicTabs className="nav-justified border-bottom">
            {/* Tab Mô tả */}
            <MDBNavItem className="ml-0">
              <MDBNavLink link to="#" active={this.state.activeItemOuterTabs === "1"} onClick={this.toggleOuterTabs("1")} role="tab" >
                <MDBIcon icon="audio-description" /> <strong>Mô tả</strong>
              </MDBNavLink>
            </MDBNavItem>
            {/* Tab Thông tin shop */}
            <MDBNavItem>
              <MDBNavLink link to="#" active={this.state.activeItemOuterTabs === "2"} onClick={this.toggleOuterTabs("2")} role="tab" >
                <MDBIcon icon="info-circle" /> <strong>Thông tin shop</strong>
              </MDBNavLink>
            </MDBNavItem>
            {/* Tab đánh giá */}
            <MDBNavItem>
              <MDBNavLink link to="#" active={this.state.activeItemOuterTabs === "3"} onClick={this.toggleOuterTabs("3")} role="tab" >
                <MDBIcon icon="grin-wink" /> <strong>Đánh giá</strong>
              </MDBNavLink>
            </MDBNavItem>
          </MDBNav>
          <MDBTabContent
            className="mb-5"
            activeItem={this.state.activeItemOuterTabs}
          >
            {/* Nội dung tab mô tả */}
            <MDBTabPane tabId="1" role="tabpanel">
              <h5><strong>Thông tin sản phẩm</strong></h5>
              <p className="small text-muted text-uppercase mb-2">Phở</p>
              <div className="orange-text mb-2" >
                <MDBIcon icon="star" />
                <MDBIcon icon="star" />
                <MDBIcon icon="star" />
                <MDBIcon icon="star" />
                <MDBIcon far icon="star" />
              </div>
              <h6><strong>54.000VNĐ</strong></h6>
              <p className="pt-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sapiente illo. Sit
                error voluptas repellat rerum quidem, soluta enim perferendis voluptates laboriosam. Distinctio,
                officia quis dolore quos sapiente tempore alias.
              </p>
            </MDBTabPane>
            {/* Nội dung tab thông tin shop */}
            <MDBTabPane tabId="2" role="tabpanel">
              <h5><strong>Thông tin thêm</strong></h5>
              <table className="table table-striped table-bordered mt-3">
                <thead>
                  <tr>
                    <th scope="row" className="w-150 dark-grey-text h6">Weight</th>
                    <td><em>0.3 kg</em></td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row" className="w-150 dark-grey-text h6">Dimensions</th>
                    <td><em>50 × 60 cm</em></td>
                  </tr>
                </tbody>
              </table>
            </MDBTabPane>
            {/* Nội dung tab đánh giá */}
            <MDBTabPane tabId="3" role="tabpanel">
              <h5><strong><span>1</span> đánh giá cho <span>Phở xào ngan</span></strong></h5>
              <div className="media mt-3 mb-4">
                <img className="d-flex mr-3 z-depth-1" src="https://mdbootstrap.com/img/Photos/Others/placeholder1.jpg" width={62} alt="Generic placeholder image" />
                <div className="media-body">
                  <div className="d-flex justify-content-between">
                    <p className="mt-1 mb-2">
                      <strong>Thế Hưng </strong>
                      <span>– </span><span>January 28, 2020</span>
                    </p>
                    <div className="orange-text mb-2" >
                      <MDBIcon icon="star" />
                      <MDBIcon icon="star" />
                      <MDBIcon icon="star" />
                      <MDBIcon icon="star" />
                      <MDBIcon far icon="star" />
                    </div>
                  </div>
                  <p className="mb-0">Quá tuyệt, ủng hộ shop nhiều!</p>
                </div>
              </div>
              <hr />
              <h5 className="mt-4"><strong>Thêm đánh giá</strong></h5>
              <p>Email của bạn sẽ được bảo mật.</p>
              <div className="my-3">
                <div className="orange-text mb-2" >
                  <MDBIcon icon="star" />
                  <MDBIcon icon="star" />
                  <MDBIcon icon="star" />
                  <MDBIcon icon="star" />
                  <MDBIcon far icon="star" />
                </div>
              </div>
              <div>
                {/* Review của bạn */}
                <div className="md-form md-outline">
                  <MDBInput type="textarea" label="Đánh giá của bạn..." rows="5" className="pt-2" />
                </div>
                {/* Tên nickname của bạn */}
                <div className="md-form md-outline">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nickname"
                  />
                </div>
                {/* Email của bạn*/}
                <div className="md-form md-outline">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
                <div className="text-right pb-2">
                  <MDBBtn gradient="peach" className="">Bình luận</MDBBtn>
                </div>
              </div>
            </MDBTabPane>
          </MDBTabContent>
        </div>
      </Router>
    );
  }
}
export default TabInfo;