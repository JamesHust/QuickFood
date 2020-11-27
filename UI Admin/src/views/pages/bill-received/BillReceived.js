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
} from '@coreui/react'

import usersData from '../../users/UsersData'

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
const fields = ['MãSảnPhẩm', 'TênSảnPhẩm', 'Lượng', 'Giá', 'Cỡ']

// Hóa đơn đã nhận
const BillReceived = () => {
    return (
        <>
            <CRow>
                <CCol xs="12" lg="6">
                    <CCard>
                        <CCardHeader>
                            <div className="d-flex align-items-center justify-content-between">
                                <div>
                                    Hóa đơn:
                                    <strong className="pl-1">HD12345</strong>
                                </div>
                                {/* <div className="d-flex align-items-center">
                                    <span>Đã nhận:</span>
                                    <CSwitch className={'ml-2'} variant={'3d'} color={'primary'} size={'sm'} />
                                </div> */}
                            </div>
                            <CRow className="mt-1">
                                <CCol xs="12" md="2">
                                    Ghi chú:
                                </CCol>
                                <CCol xs="12" md="12">
                                    <CTextarea
                                        name="textarea-input"
                                        id="textarea-input"
                                        rows="1"
                                        placeholder="Ghi chú..."
                                    />
                                </CCol>
                            </CRow>
                        </CCardHeader>
                        <CCardBody>
                            <CDataTable
                                items={usersData}
                                fields={fields}
                                striped
                                itemsPerPage={5}
                                pagination
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
                            <CRow>
                                <CCol md="2">Tổng tiền:</CCol>
                                <CCol md="10"><strong>450.000 VNĐ</strong></CCol>
                                <CCol md="2">Người nhận:</CCol>
                                <CCol md="10"><strong>Mai Thế Hưng</strong></CCol>
                                <CCol md="2">Nơi giao:</CCol>
                                <CCol md="10"><strong>22 Ngách 20 Ngõ Trại Cá, Trương Định, Hai Bà Trưng, Hà Nội</strong></CCol>
                                <CCol md="2">Số điện thoại:</CCol>
                                <CCol md="10"><strong>0966073027</strong></CCol>
                                <CCol md="2">Đã nhận:</CCol>
                                <CCol md="10"><strong>5/1/2008 8:30:52 AM</strong></CCol>
                            </CRow>
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
                                {/* <div className="d-flex align-items-center">
                                    <span>Đã nhận:</span>
                                    <CSwitch className={'ml-2'} variant={'3d'} color={'primary'} size={'sm'} />
                                </div> */}
                            </div>
                            <CRow className="mt-1">
                                <CCol xs="12" md="2">
                                    Ghi chú:
                                </CCol>
                                <CCol xs="12" md="12">
                                    <CTextarea
                                        name="textarea-input"
                                        id="textarea-input"
                                        rows="1"
                                        placeholder="Ghi chú..."
                                    />
                                </CCol>
                            </CRow>
                        </CCardHeader>
                        <CCardBody>
                            <CDataTable
                                items={usersData}
                                fields={fields}
                                striped
                                itemsPerPage={5}
                                pagination
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
                            <CRow>
                                <CCol md="2">Tổng tiền:</CCol>
                                <CCol md="10"><strong>450.000 VNĐ</strong></CCol>
                                <CCol md="2">Người nhận:</CCol>
                                <CCol md="10"><strong>Mai Thế Hưng</strong></CCol>
                                <CCol md="2">Nơi giao:</CCol>
                                <CCol md="10"><strong>22 Ngách 20 Ngõ Trại Cá, Trương Định, Hai Bà Trưng, Hà Nội</strong></CCol>
                                <CCol md="2">Số điện thoại:</CCol>
                                <CCol md="10"><strong>0966073027</strong></CCol>
                                <CCol md="2">Đã nhận:</CCol>
                                <CCol md="10"><strong>5/1/2008 8:30:52 AM</strong></CCol>
                            </CRow>
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
                                {/* <div className="d-flex align-items-center">
                                    <span>Đã nhận:</span>
                                    <CSwitch className={'ml-2'} variant={'3d'} color={'primary'} size={'sm'} />
                                </div> */}
                            </div>
                            <CRow className="mt-1">
                                <CCol xs="12" md="2">
                                    Ghi chú:
                                </CCol>
                                <CCol xs="12" md="12">
                                    <CTextarea
                                        name="textarea-input"
                                        id="textarea-input"
                                        rows="1"
                                        placeholder="Ghi chú..."
                                    />
                                </CCol>
                            </CRow>
                        </CCardHeader>
                        <CCardBody>
                            <CDataTable
                                items={usersData}
                                fields={fields}
                                striped
                                itemsPerPage={5}
                                pagination
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
                            <CRow>
                                <CCol md="2">Tổng tiền:</CCol>
                                <CCol md="10"><strong>450.000 VNĐ</strong></CCol>
                                <CCol md="2">Người nhận:</CCol>
                                <CCol md="10"><strong>Mai Thế Hưng</strong></CCol>
                                <CCol md="2">Nơi giao:</CCol>
                                <CCol md="10"><strong>22 Ngách 20 Ngõ Trại Cá, Trương Định, Hai Bà Trưng, Hà Nội</strong></CCol>
                                <CCol md="2">Số điện thoại:</CCol>
                                <CCol md="10"><strong>0966073027</strong></CCol>
                                <CCol md="2">Đã nhận:</CCol>
                                <CCol md="10"><strong>5/1/2008 8:30:52 AM</strong></CCol>
                            </CRow>
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
                                {/* <div className="d-flex align-items-center">
                                    <span>Đã nhận:</span>
                                    <CSwitch className={'ml-2'} variant={'3d'} color={'primary'} size={'sm'} />
                                </div> */}
                            </div>
                            <CRow className="mt-1">
                                <CCol xs="12" md="2">
                                    Ghi chú:
                                </CCol>
                                <CCol xs="12" md="12">
                                    <CTextarea
                                        name="textarea-input"
                                        id="textarea-input"
                                        rows="1"
                                        placeholder="Ghi chú..."
                                    />
                                </CCol>
                            </CRow>
                        </CCardHeader>
                        <CCardBody>
                            <CDataTable
                                items={usersData}
                                fields={fields}
                                striped
                                itemsPerPage={5}
                                pagination
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
                            <CRow>
                                <CCol md="2">Tổng tiền:</CCol>
                                <CCol md="10"><strong>450.000 VNĐ</strong></CCol>
                                <CCol md="2">Người nhận:</CCol>
                                <CCol md="10"><strong>Mai Thế Hưng</strong></CCol>
                                <CCol md="2">Nơi giao:</CCol>
                                <CCol md="10"><strong>22 Ngách 20 Ngõ Trại Cá, Trương Định, Hai Bà Trưng, Hà Nội</strong></CCol>
                                <CCol md="2">Số điện thoại:</CCol>
                                <CCol md="10"><strong>0966073027</strong></CCol>
                                <CCol md="2">Đã nhận:</CCol>
                                <CCol md="10"><strong>5/1/2008 8:30:52 AM</strong></CCol>
                            </CRow>
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