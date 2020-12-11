// Import thư viện React
import React, { Component } from 'react';

// Import thư viện css
import '../../assets/library/Login/bootstrap/css/bootstrap.min.css';
import '../../assets/fonts/Login/font-awesome-4.7.0/css/font-awesome.min.css';
import '../../assets/css/Login/util.css';
import '../../assets/css/Login/main.css';

// import ảnh
import anhbia from '../../assets/images/user/Login/2699784.jpg';

// Import file js xử lý validate dữ liệu input
import {validate} from '../../assets/js/Login/main';


class Login extends Component {
    componentDidMount(){
        // Validate dữ liệu nhập vào
        validate();
    }
    render() {
        return (
            <div className="limiter">
                <div className="container-login100">
                    <div className="wrap-login100">
                        <form className="login100-form validate-form">
                            <span className="login100-form-title p-b-43">
                                Đăng nhập QuickFood
                            </span>
                            <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                                <input className="input100" type="text" name="email" />
                                <span className="focus-input100" />
                                <span className="label-input100">Địa chỉ email</span>
                            </div>
                            <div className="wrap-input100 validate-input" data-validate="Password is required">
                                <input className="input100" type="password" name="pass" />
                                <span className="focus-input100" />
                                <span className="label-input100">Mật khẩu</span>
                            </div>
                            <div className="flex-sb-m w-full p-t-3 p-b-32">
                                <div className="contact100-form-checkbox">
                                    <input className="input-checkbox100" id="ckb1" type="checkbox" name="remember-me" />
                                    <label className="label-checkbox100" htmlFor="ckb1">
                                        Nhớ mật khẩu
                                    </label>
                                </div>
                                <div>
                                    <a href="#" className="txt1">
                                        Quên mật khẩu?
                                    </a>
                                </div>
                            </div>
                            <div className="container-login100-form-btn">
                                <button className="login100-form-btn">
                                    Đăng nhập
                                </button>
                            </div>
                            <div className="text-center p-t-46 p-b-20">
                                <span className="txt2">
                                    hoặc đăng nhập bằng
                                </span>
                            </div>
                            <div className="login100-form-social flex-c-m">
                                <a href="#" className="login100-form-social-item flex-c-m bg1 m-r-5">
                                    <i className="fa fa-facebook-f" aria-hidden="true" />
                                </a>
                                <a href="#" className="login100-form-social-item flex-c-m bg2 m-r-5">
                                    <i className="fa fa-twitter" aria-hidden="true" />
                                </a>
                            </div>
                        </form>
                        <div className="login100-more" style={{backgroundImage: `url(${anhbia})`}}>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;