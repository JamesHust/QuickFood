// Import thư viện React
import React from "react";
// Import các component có sẵn từ MDBReact
import { MDBRow, MDBCol, MDBBtn, MDBIcon } from "mdbreact";

class FormChange extends React.Component {
    state = {
        fname: "Mai Thế Hưng",
        lname: "Otto",
        email: "",
        city: "",
        state: "",
        zip: ""
    };

    submitHandler = event => {
        event.preventDefault();
        event.target.className += " was-validated";
    };

    changeHandler = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        return (
            <div className="card px-4 py-5">
                <form
                    className="needs-validation"
                    onSubmit={this.submitHandler}
                    noValidate
                >
                    {/* Tên tiêu đề */}
                    <h4 className=' grey-text mb-5' style={{ fontWeight: "600" }}>Thay đổi thông tin cá nhân<MDBIcon icon="edit" className="pl-2" /></h4>
                    {/* Chú thích thêm */}
                    <MDBRow>
                        {/* Input tên */}
                        <MDBCol md="6" className="mb-2">
                            <label
                                htmlFor="defaultFormRegisterNameEx"
                                className="grey-text"
                            >
                                Họ tên
                            </label>
                            <input
                                value={this.state.fname}
                                name="fname"
                                onChange={this.changeHandler}
                                type="text"
                                id="defaultFormRegisterNameEx"
                                className="form-control"
                                placeholder="First name"
                                required
                            />
                            <div className="invalid-feedback">
                                Vui lòng nhập đúng địa chỉ.
                            </div>
                            <div className="valid-feedback">Thật tuyệt!</div>
                        </MDBCol>
                        {/* Input email */}
                        <MDBCol md="6" className="mb-2">
                            <label
                                htmlFor="defaultFormRegisterConfirmEx1"
                                className="grey-text"
                            >
                                Email
                            </label>
                            <input
                                value={this.state.email}
                                onChange={this.changeHandler}
                                type="email"
                                id="defaultFormRegisterConfirmEx2"
                                className="form-control"
                                name="email"
                                placeholder="Email của bạn..."
                            />
                            <div className="invalid-feedback">
                                Vui lòng nhập đúng địa chỉ.
                            </div>
                            <div className="valid-feedback">Thật tuyệt!</div>
                        </MDBCol>
                    </MDBRow>
                    {/*  */}
                    <MDBRow>
                        <MDBCol md="6" className="mb-2">
                            <label
                                htmlFor="defaultFormRegisterConfirmEx3"
                                className="grey-text"
                            >
                                Địa chỉ
                            </label>
                            <input
                                value={this.state.email}
                                onChange={this.changeHandler}
                                type="text"
                                id="defaultFormRegisterConfirmEx4"
                                className="form-control"
                                name="address"
                                placeholder="Địa chỉ của bạn..."
                            />
                            <div className="invalid-feedback">
                                Vui lòng nhập đúng địa chỉ.
                            </div>
                            <div className="valid-feedback">Thật tuyệt!</div>
                        </MDBCol>
                        <MDBCol md="6" className="mb-2">
                            <label
                                htmlFor="defaultFormRegisterPasswordEx5"
                                className="grey-text"
                            >
                                Số điện thoại
                            </label>
                            <input
                                value={this.state.state}
                                type="text"
                                className="form-control"
                                name="state"
                                placeholder="Số điện thoại..."
                                required
                            />
                            <div className="invalid-feedback">
                                Vui lòng nhập số điện thoại hợp lệ.
                            </div>
                            <div className="valid-feedback">Thật tuyệt!</div>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol md="6" className="mb-2">
                            <label
                                htmlFor="defaultFormRegisterPasswordEx6"
                                className="grey-text"
                            >
                                Ngày sinh
                            </label>
                            <input
                                value={this.state.city}
                                onChange={this.changeHandler}
                                type="date"
                                className="form-control"
                                name="city"
                                placeholder="Địa chỉ..."
                                required
                            />
                            <div className="invalid-feedback">
                                Vui lòng nhập đúng địa chỉ.
                            </div>
                            <div className="valid-feedback">Thật tuyệt!</div>
                        </MDBCol>
                        <MDBCol md="6" className="mb-2">
                            <label
                                htmlFor="defaultFormRegisterPasswordEx4"
                                className="grey-text"
                            >
                                Giới tính
                            </label>
                            <select className="browser-default custom-select">
                                <option selected disabled hidden>Chọn giới tính của bạn</option>
                                <option value="1">Nam</option>
                                <option value="2">Nữ</option>
                                <option value="3">Khác</option>
                            </select>
                            <div className="invalid-feedback">
                                Vui lòng nhập đúng địa chỉ.
                            </div>
                            <div className="valid-feedback">Thật tuyệt!</div>
                        </MDBCol>
                    </MDBRow>
                    <MDBCol md="6" className="mb-2">
                        <div className="custom-control custom-checkbox pl-3">
                            <input
                                className="custom-control-input"
                                type="checkbox"
                                value=""
                                id="invalidCheck"
                                required
                            />
                            <label className="custom-control-label" htmlFor="invalidCheck">
                                Tôi đồng ý những thông tin trên là hợp lý
                            </label>
                            <div className="invalid-feedback">
                                Bạn phải đồng ý để thay đổi.
                            </div>
                        </div>
                    </MDBCol>
                    <MDBBtn gradient="peach" className="border-button-1 mt-5">Cập nhật</MDBBtn>
                </form>
            </div>
        );
    }
}

export default FormChange;