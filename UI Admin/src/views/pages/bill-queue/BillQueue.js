import React, { Component } from 'react';
import {
    CProgress,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CDataTable,
    CRow,
    CSwitch,
    CButton,
    CTextarea,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'


class BillQueue extends Component {
    render() {
        return (
            <CCard>
                <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                    <thead className="thead-light">
                        <tr>
                            <th className="text-center"><CIcon name="cil-people" /></th>
                            <th>Người dùng</th>
                            <th className="text-center">Ngày tạo đơn</th>
                            <th>Danh sách sản phẩm</th>
                            <th className="text-center">Nhận hóa đơn</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="text-center">
                                <div className="c-avatar">
                                    <img src={'avatars/1.jpg'} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
                                    <span className="c-avatar-status bg-success"></span>
                                </div>
                            </td>
                            <td>
                                <div>Mai Thế Hưng</div>
                                <div className="small text-muted">
                                    22 ngách 20 ngõ Trại Cá, Trương Định, Hai Bà Trưng, Hà Nội
                                </div>
                            </td>
                            <td className="text-center text-muted">
                                5/1/2008 8:30:52 AM
                            </td>
                            <td>
                                1 x Bánh gà, 2 x Thịt xa xíu, 3 x Bánh đậu đỏ, 1 x Trà sữa trân châu, 4 x Bimbim
                            </td>
                            <td className="text-center">
                                <CSwitch className={'ml-2'} variant={'3d'} color={'primary'} size={'sm'} />
                            </td>
                        </tr>
                        <tr>
                            <td className="text-center">
                                <div className="c-avatar">
                                    <img src={'avatars/1.jpg'} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
                                    <span className="c-avatar-status bg-success"></span>
                                </div>
                            </td>
                            <td>
                                <div>Mai Thế Hưng</div>
                                <div className="small text-muted">
                                    22 ngách 20 ngõ Trại Cá, Trương Định, Hai Bà Trưng, Hà Nội
                                </div>
                            </td>
                            <td className="text-center text-muted">
                                5/1/2008 8:30:52 AM
                            </td>
                            <td>
                                1 x Bánh gà, 2 x Thịt xa xíu, 3 x Bánh đậu đỏ, 1 x Trà sữa trân châu, 4 x Bimbim
                            </td>
                            <td className="text-center">
                                <CSwitch className={'ml-2'} variant={'3d'} color={'primary'} size={'sm'} />
                            </td>
                        </tr>
                        <tr>
                            <td className="text-center">
                                <div className="c-avatar">
                                    <img src={'avatars/1.jpg'} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
                                    <span className="c-avatar-status bg-success"></span>
                                </div>
                            </td>
                            <td>
                                <div>Mai Thế Hưng</div>
                                <div className="small text-muted">
                                    22 ngách 20 ngõ Trại Cá, Trương Định, Hai Bà Trưng, Hà Nội
                                </div>
                            </td>
                            <td className="text-center text-muted">
                                5/1/2008 8:30:52 AM
                            </td>
                            <td>
                                1 x Bánh gà, 2 x Thịt xa xíu, 3 x Bánh đậu đỏ, 1 x Trà sữa trân châu, 4 x Bimbim
                            </td>
                            <td className="text-center">
                                <CSwitch className={'ml-2'} variant={'3d'} color={'primary'} size={'sm'} />
                            </td>
                        </tr>
                        <tr>
                            <td className="text-center">
                                <div className="c-avatar">
                                    <img src={'avatars/1.jpg'} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
                                    <span className="c-avatar-status bg-success"></span>
                                </div>
                            </td>
                            <td>
                                <div>Mai Thế Hưng</div>
                                <div className="small text-muted">
                                    22 ngách 20 ngõ Trại Cá, Trương Định, Hai Bà Trưng, Hà Nội
                                </div>
                            </td>
                            <td className="text-center text-muted">
                                5/1/2008 8:30:52 AM
                            </td>
                            <td>
                                1 x Bánh gà, 2 x Thịt xa xíu, 3 x Bánh đậu đỏ, 1 x Trà sữa trân châu, 4 x Bimbim
                            </td>
                            <td className="text-center">
                                <CSwitch className={'ml-2'} variant={'3d'} color={'primary'} size={'sm'} />
                            </td>
                        </tr>
                        <tr>
                            <td className="text-center">
                                <div className="c-avatar">
                                    <img src={'avatars/1.jpg'} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
                                    <span className="c-avatar-status bg-success"></span>
                                </div>
                            </td>
                            <td>
                                <div>Mai Thế Hưng</div>
                                <div className="small text-muted">
                                    22 ngách 20 ngõ Trại Cá, Trương Định, Hai Bà Trưng, Hà Nội
                                </div>
                            </td>
                            <td className="text-center text-muted">
                                5/1/2008 8:30:52 AM
                            </td>
                            <td>
                                1 x Bánh gà, 2 x Thịt xa xíu, 3 x Bánh đậu đỏ, 1 x Trà sữa trân châu, 4 x Bimbim
                            </td>
                            <td className="text-center">
                                <CSwitch className={'ml-2'} variant={'3d'} color={'primary'} size={'sm'} />
                            </td>
                        </tr>
                        <tr>
                            <td className="text-center">
                                <div className="c-avatar">
                                    <img src={'avatars/1.jpg'} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
                                    <span className="c-avatar-status bg-success"></span>
                                </div>
                            </td>
                            <td>
                                <div>Mai Thế Hưng</div>
                                <div className="small text-muted">
                                    22 ngách 20 ngõ Trại Cá, Trương Định, Hai Bà Trưng, Hà Nội
                                </div>
                            </td>
                            <td className="text-center text-muted">
                                5/1/2008 8:30:52 AM
                            </td>
                            <td>
                                1 x Bánh gà, 2 x Thịt xa xíu, 3 x Bánh đậu đỏ, 1 x Trà sữa trân châu, 4 x Bimbim
                            </td>
                            <td className="text-center">
                                <CSwitch className={'ml-2'} variant={'3d'} color={'primary'} size={'sm'} />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </CCard>
        );
    }
}

export default BillQueue;