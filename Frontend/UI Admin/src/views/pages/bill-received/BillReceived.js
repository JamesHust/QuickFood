import React from 'react'
import {
    CBadge,
    CCard,
    CCardBody,
    CCardFooter,
    CCardHeader,
    CCol,
    CDataTable,
    CRow,
    CSwitch,
    CButton,
    CTextarea,
    CNavItem,
    CTabs,
    CNav,
    CNavLink,
    CTabContent,
    CTabPane,

} from '@coreui/react'

import usersData from '../../users/UsersData'
import './BillReceived.css';

const getBadge = status => {
    switch (status) {
        case 'Active': return 'success'
        case 'Inactive': return 'secondary'
        case 'Pending': return 'warning'
        case 'Banned': return 'danger'
        default: return 'primary'
    }
}
// Tên các trường/cột trong bảng
const fields = ['Mã', 'TênSảnPhẩm', 'Lượng', 'Giá', 'Cỡ']

// Hóa đơn đã nhận
const BillReceived = () => {
    return (
        <>
            <CRow className="BillReceived">
                <CCol xs="12" lg="6">
                    <CCard>
                        <CCardHeader>
                            <div className="d-flex align-items-center justify-content-between">
                                <div>
                                    Hóa đơn:
                                    <strong className="pl-1">HD12345</strong>
                                </div>
                            </div>

                        </CCardHeader>
                        <CCardBody>
                            <CTabs activeTab="detail-bill">
                                <CNav variant="tabs">
                                    <CNavItem>
                                        <CNavLink data-tab="detail-bill">
                                            Chi tiết đơn hàng
                                        </CNavLink>
                                    </CNavItem>
                                    <CNavItem>
                                        <CNavLink data-tab="note">
                                            Ghi chú
                                        </CNavLink>
                                    </CNavItem>
                                    <CNavItem>
                                        <CNavLink data-tab="info-ship">
                                            Thông tin ship
                                        </CNavLink>
                                    </CNavItem>
                                </CNav>
                                <CTabContent>
                                    <CTabPane data-tab="detail-bill">
                                        <CDataTable
                                            items={usersData}
                                            fields={fields}
                                            striped
                                            itemsPerPage={4}
                                            pagination
                                            border={true}
                                            scopedSlots={{
                                                'status':
                                                    (item) => (
                                                        <td>
                                                            <CBadge color={getBadge(item.status)}>
                                                                {item.status}
                                                            </CBadge>
                                                        </td>
                                                    )
                                            }}
                                        />
                                    </CTabPane>
                                    <CTabPane data-tab="note">
                                        <CTextarea
                                            name="textarea-input"
                                            id="textarea-input"
                                            rows="1"
                                            placeholder="Ghi chú..."
                                        />
                                    </CTabPane>
                                    <CTabPane data-tab="info-ship">
                                        <table class="table table-striped table-bordered">
                                            <thead>
                                                <tr>
                                                    <th scope="row">Tổng tiền gói hàng</th>
                                                    <td>157.000</td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">Tiền ship</th>
                                                    <td>15.000</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Người nhận</th>
                                                    <td>Mai Thế Hưng</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Nơi giao</th>
                                                    <td>22 Ngách 20 Ngõ Trại Cá, Trương Định, Hai Bà Trưng, Hà Nội</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Số điện thoại</th>
                                                    <td>0966073027</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Đã nhận</th>
                                                    <td>5/1/2008 8:30:52 AM</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </CTabPane>
                                </CTabContent>
                            </CTabs>
                        </CCardBody>
                        <CCardFooter>
                            <div className="d-flex align-items-center justify-content-end">
                                <div>
                                    <CButton block color="success" >Giao hàng</CButton>
                                </div>
                                <div className="pl-2">
                                    <CButton block color="danger" >Hủy đơn hàng</CButton>
                                </div>
                            </div>
                        </CCardFooter>
                    </CCard>
                </CCol>
                <CCol xs="12" lg="6">
                    <CCard>
                        <CCardHeader>
                            <div className="d-flex align-items-center justify-content-between">
                                <div>
                                    Hóa đơn:
                                    <strong className="pl-1">HD12345</strong>
                                </div>
                            </div>

                        </CCardHeader>
                        <CCardBody>
                            <CTabs activeTab="detail-bill">
                                <CNav variant="tabs">
                                    <CNavItem>
                                        <CNavLink data-tab="detail-bill">
                                            Chi tiết đơn hàng
                                        </CNavLink>
                                    </CNavItem>
                                    <CNavItem>
                                        <CNavLink data-tab="note">
                                            Ghi chú
                                        </CNavLink>
                                    </CNavItem>
                                    <CNavItem>
                                        <CNavLink data-tab="info-ship">
                                            Thông tin ship
                                        </CNavLink>
                                    </CNavItem>
                                </CNav>
                                <CTabContent>
                                    <CTabPane data-tab="detail-bill">
                                        <CDataTable
                                            items={usersData}
                                            fields={fields}
                                            striped
                                            itemsPerPage={4}
                                            pagination
                                            border={true}
                                            scopedSlots={{
                                                'status':
                                                    (item) => (
                                                        <td>
                                                            <CBadge color={getBadge(item.status)}>
                                                                {item.status}
                                                            </CBadge>
                                                        </td>
                                                    )
                                            }}
                                        />
                                    </CTabPane>
                                    <CTabPane data-tab="note">
                                        <CTextarea
                                            name="textarea-input"
                                            id="textarea-input"
                                            rows="1"
                                            placeholder="Ghi chú..."
                                        />
                                    </CTabPane>
                                    <CTabPane data-tab="info-ship">
                                        <table class="table table-striped table-bordered">
                                            <thead>
                                                <tr>
                                                    <th scope="row">Tổng tiền gói hàng</th>
                                                    <td>157.000</td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">Tiền ship</th>
                                                    <td>15.000</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Người nhận</th>
                                                    <td>Mai Thế Hưng</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Nơi giao</th>
                                                    <td>22 Ngách 20 Ngõ Trại Cá, Trương Định, Hai Bà Trưng, Hà Nội</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Số điện thoại</th>
                                                    <td>0966073027</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Đã nhận</th>
                                                    <td>5/1/2008 8:30:52 AM</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </CTabPane>
                                </CTabContent>
                            </CTabs>
                        </CCardBody>
                        <CCardFooter>
                            <div className="d-flex align-items-center justify-content-end">
                                <div>
                                    <CButton block color="success" >Giao hàng</CButton>
                                </div>
                                <div className="pl-2">
                                    <CButton block color="danger" >Hủy đơn hàng</CButton>
                                </div>
                            </div>
                        </CCardFooter>
                    </CCard>
                </CCol>
                <CCol xs="12" lg="6">
                    <CCard>
                        <CCardHeader>
                            <div className="d-flex align-items-center justify-content-between">
                                <div>
                                    Hóa đơn:
                                    <strong className="pl-1">HD12345</strong>
                                </div>
                            </div>

                        </CCardHeader>
                        <CCardBody>
                            <CTabs activeTab="detail-bill">
                                <CNav variant="tabs">
                                    <CNavItem>
                                        <CNavLink data-tab="detail-bill">
                                            Chi tiết đơn hàng
                                        </CNavLink>
                                    </CNavItem>
                                    <CNavItem>
                                        <CNavLink data-tab="note">
                                            Ghi chú
                                        </CNavLink>
                                    </CNavItem>
                                    <CNavItem>
                                        <CNavLink data-tab="info-ship">
                                            Thông tin ship
                                        </CNavLink>
                                    </CNavItem>
                                </CNav>
                                <CTabContent>
                                    <CTabPane data-tab="detail-bill">
                                        <CDataTable
                                            items={usersData}
                                            fields={fields}
                                            striped
                                            itemsPerPage={4}
                                            pagination
                                            border={true}
                                            scopedSlots={{
                                                'status':
                                                    (item) => (
                                                        <td>
                                                            <CBadge color={getBadge(item.status)}>
                                                                {item.status}
                                                            </CBadge>
                                                        </td>
                                                    )
                                            }}
                                        />
                                    </CTabPane>
                                    <CTabPane data-tab="note">
                                        <CTextarea
                                            name="textarea-input"
                                            id="textarea-input"
                                            rows="1"
                                            placeholder="Ghi chú..."
                                        />
                                    </CTabPane>
                                    <CTabPane data-tab="info-ship">
                                        <table class="table table-striped table-bordered">
                                            <thead>
                                                <tr>
                                                    <th scope="row">Tổng tiền gói hàng</th>
                                                    <td>157.000</td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">Tiền ship</th>
                                                    <td>15.000</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Người nhận</th>
                                                    <td>Mai Thế Hưng</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Nơi giao</th>
                                                    <td>22 Ngách 20 Ngõ Trại Cá, Trương Định, Hai Bà Trưng, Hà Nội</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Số điện thoại</th>
                                                    <td>0966073027</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Đã nhận</th>
                                                    <td>5/1/2008 8:30:52 AM</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </CTabPane>
                                </CTabContent>
                            </CTabs>
                        </CCardBody>
                        <CCardFooter>
                            <div className="d-flex align-items-center justify-content-end">
                                <div>
                                    <CButton block color="success" >Giao hàng</CButton>
                                </div>
                                <div className="pl-2">
                                    <CButton block color="danger" >Hủy đơn hàng</CButton>
                                </div>
                            </div>
                        </CCardFooter>
                    </CCard>
                </CCol>
                <CCol xs="12" lg="6">
                    <CCard>
                        <CCardHeader>
                            <div className="d-flex align-items-center justify-content-between">
                                <div>
                                    Hóa đơn:
                                    <strong className="pl-1">HD12345</strong>
                                </div>
                            </div>

                        </CCardHeader>
                        <CCardBody>
                            <CTabs activeTab="detail-bill">
                                <CNav variant="tabs">
                                    <CNavItem>
                                        <CNavLink data-tab="detail-bill">
                                            Chi tiết đơn hàng
                                        </CNavLink>
                                    </CNavItem>
                                    <CNavItem>
                                        <CNavLink data-tab="note">
                                            Ghi chú
                                        </CNavLink>
                                    </CNavItem>
                                    <CNavItem>
                                        <CNavLink data-tab="info-ship">
                                            Thông tin ship
                                        </CNavLink>
                                    </CNavItem>
                                </CNav>
                                <CTabContent>
                                    <CTabPane data-tab="detail-bill">
                                        <CDataTable
                                            items={usersData}
                                            fields={fields}
                                            striped
                                            itemsPerPage={4}
                                            pagination
                                            border={true}
                                            scopedSlots={{
                                                'status':
                                                    (item) => (
                                                        <td>
                                                            <CBadge color={getBadge(item.status)}>
                                                                {item.status}
                                                            </CBadge>
                                                        </td>
                                                    )
                                            }}
                                        />
                                    </CTabPane>
                                    <CTabPane data-tab="note">
                                        <CTextarea
                                            name="textarea-input"
                                            id="textarea-input"
                                            rows="1"
                                            placeholder="Ghi chú..."
                                        />
                                    </CTabPane>
                                    <CTabPane data-tab="info-ship">
                                        <table class="table table-striped table-bordered">
                                            <thead>
                                                <tr>
                                                    <th scope="row">Tổng tiền gói hàng</th>
                                                    <td>157.000</td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">Tiền ship</th>
                                                    <td>15.000</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Người nhận</th>
                                                    <td>Mai Thế Hưng</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Nơi giao</th>
                                                    <td>22 Ngách 20 Ngõ Trại Cá, Trương Định, Hai Bà Trưng, Hà Nội</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Số điện thoại</th>
                                                    <td>0966073027</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Đã nhận</th>
                                                    <td>5/1/2008 8:30:52 AM</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </CTabPane>
                                </CTabContent>
                            </CTabs>
                        </CCardBody>
                        <CCardFooter>
                            <div className="d-flex align-items-center justify-content-end">
                                <div>
                                    <CButton block color="success" >Giao hàng</CButton>
                                </div>
                                <div className="pl-2">
                                    <CButton block color="danger" >Hủy đơn hàng</CButton>
                                </div>
                            </div>
                        </CCardFooter>
                    </CCard>
                </CCol>
            </CRow>
        </>
    )
}
export default BillReceived