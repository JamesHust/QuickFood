// Import thư viện React
import React, { Component } from 'react';

// Import thư viện css
import '../../assets/fonts/Logout/material-icon/css/material-design-iconic-font.min.css';
import '../../assets/css/Logout/style.css';

// Import ảnh
import img from '../../assets/images/user/Logout/form-img.jpg';

// Import file js xử lý tương tác chuyển động
import { main } from '../../assets/js/Logout/main.js';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: "text"
        }
        this.onBlur = this.onBlur.bind(this)
        this.onFocus = this.onFocus.bind(this)
    }
    onFocus() {
        this.setState({
            type: 'date'
        });
    }
    onBlur() {
        this.setState({
            type: 'text'
        });
    }
    componentDidMount() {
        main();
    }
    render() {
        return (
            <div className="main">
                <div className="container">
                    <div className="booking-content">
                        {/* Ảnh demo */}
                        <div className="booking-image">
                            <img className="booking-img" src={img} alt="booking" height="100%" />
                        </div>
                        <div className="booking-form">
                            <form id="booking-form">
                                {/* Tên Form */}
                                <h2>Đăng ký</h2>
                                {/*  */}
                                <div className="form-group form-input">
                                    <input type="text" name="name" id="name" required />
                                    <label htmlFor="name" className="form-label">Tên của bạn</label>
                                </div>
                                <div className="form-group form-input">
                                    <input type="text" name="name" id="name" required />
                                    <label htmlFor="name" className="form-label">Địa chỉ</label>
                                </div>
                                <div className="form-group form-input">
                                    <input type="number" name="phone" id="phone" required />
                                    <label htmlFor="phone" className="form-label">Số điện thoại</label>
                                </div>
                                <div className="form-group form-input">
                                    <input type={this.state.type} name="date" id="name" required onFocus={this.onFocus} onBlur={this.onBlur} />
                                    <label htmlFor="date" className="form-label">Ngày sinh</label>
                                </div>
                                <div className="form-group">
                                    <div className="select-list">
                                        <select name="gender" id="time" required>
                                            <option value>Giới tính</option>
                                            <option value={0}>Nữ</option>
                                            <option value={1}>Nam</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-submit">
                                    <input type="submit" defaultValue="Book now" className="submit" id="submit" name="submit" value="TẠO NGAY" />
                                    <a href="www" className="checkout">Bạn đã có tài khoản? Đăng nhập ngay</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;