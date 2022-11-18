import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import {
  fetchDetails,
  fetchPayment,
  selectDetails,
  selectPaymentIsLoading,
  selectPaymentNeedUpdate,
} from '../../../../store/slices/paymentsSlice';
import Spinner from '../../../../components/Spinner';
import Header from '../../../../components/Header';
import Navigation from '../../../../components/Navigation';
import Footer from '../../../../components/Footer';
import medcaresLogo from '../../../../assets/img/medcares-logo.png';
import { Col, Row, Table } from 'antd';
import moment from 'moment';
import {
  fetchClinic,
  selectClinicNeedUpdate,
} from '../../../../store/slices/clinicsSlice';
import { selectUserNeedUpdate } from '../../../../store/slices/usersSlice';

export default function PaymentDetail() {
  const dispatch = useDispatch();
  const { payment_id } = useParams();
  const payment = useSelector(selectPaymentNeedUpdate);
  const details = useSelector(selectDetails);
  const clinic = useSelector(selectClinicNeedUpdate);
  const user = useSelector(selectUserNeedUpdate);
  const isLoading = useSelector(selectPaymentIsLoading);

  useEffect(() => {
    if (payment.clinic_id) {
      dispatch(fetchClinic(payment.clinic_id));
    }
  }, [dispatch, payment.clinic_id]);

  useEffect(() => {
    dispatch(fetchPayment(payment_id));
    dispatch(fetchDetails(payment_id));
  }, [dispatch, payment_id]);

  const detailColumns = [
    {
      title: 'Description',
      index: 'description',
      dataIndex: 'name',
    },
    {
      title: 'Quantity',
      index: 'quantity',
      dataIndex: 'quantity',
    },
    {
      title: 'VAT',
      index: 'vat',
      render: (record) => '$ 0',
    },
    {
      title: 'Total',
      index: 'total',
      dataIndex: 'amount',
    },
  ];

  return (
    <>
      <Header />
      <Navigation />
      {Object.keys(payment).length > 0 &&
      Object.keys(details).length > 0 &&
      Object.keys(clinic).length > 0 ? (
        <Row className="mg-header">
          <Col
            className="payment-detail-container"
            sm={12}
            md={12}
            lg={12}
            xl={16}
            xxl={16}
          >
            <div className="container-fluid">
              <div className="payment-detail-content">
                <Row className="header">
                  <Col
                    className="left"
                    sm={12}
                    md={12}
                    lg={12}
                    xl={12}
                    xxl={12}
                  >
                    <Link to="/" className="logo-container">
                      <img
                        src={medcaresLogo}
                        alt="logo navigation"
                        className="logo-img"
                      />
                      <span className="logo-text">MedCares</span>
                    </Link>
                  </Col>
                  <Col
                    className="right"
                    sm={12}
                    md={12}
                    lg={12}
                    xl={12}
                    xxl={12}
                  >
                    <div className="info-item">
                      <span className="payment-title">Order: </span>
                      <span className="payment-title-sub">#{payment_id}</span>
                    </div>
                    <div className="info-item">
                      <span className="payment-title">Issued: </span>
                      <span className="payment-title-sub">
                        {moment(payment.created_date).format('DD/MM/YYYY')}
                      </span>
                    </div>
                  </Col>
                </Row>
                <Row className="content">
                  <Col
                    className="left"
                    sm={12}
                    md={12}
                    lg={12}
                    xl={12}
                    xxl={12}
                  >
                    <div className="info-item">
                      <p className="payment-title">Invoice From </p>
                      <p className="payment-info">
                        Dr. Vu Hai Nam {clinic.clinic.address},{' '}
                        {clinic.clinic.state}, {clinic.clinic.city}{' '}
                      </p>
                    </div>
                  </Col>
                  <Col
                    className="right"
                    sm={12}
                    md={12}
                    lg={12}
                    xl={12}
                    xxl={12}
                  >
                    <div className="info-item">
                      <p className="payment-title">Invoice To </p>
                      <p className="payment-info">
                        {user.full_name} {user.address}
                        {', '}
                        {user.state}
                        {', '}
                        {user.city}
                      </p>
                    </div>
                  </Col>
                  <Col
                    className="left"
                    sm={12}
                    md={12}
                    lg={12}
                    xl={12}
                    xxl={12}
                  >
                    <div className="info-item">
                      <p className="payment-title">Payment Method</p>
                      <p className="payment-info">
                        Debit Card XXXXXXXXXXXX-2541 HDFC Bank
                      </p>
                    </div>
                  </Col>
                </Row>
                <Table
                  className="detail-table"
                  rowClassName="payment-row detail"
                  x={true}
                  loading={isLoading}
                  scroll={{ x: 300 }}
                  pagination={false}
                  columns={detailColumns}
                  dataSource={details}
                  rowKey={(record) => record.detail_id}
                />
                <Row className="content">
                  <Col
                    className="right"
                    sm={24}
                    md={24}
                    lg={24}
                    xl={24}
                    xxl={24}
                  >
                    <div className="bill-container">
                      <div className="info-item">
                        <span className="payment-title">Subtotal:</span>
                        <span className="payment-info">
                          $350 {payment.amount}
                        </span>
                      </div>
                      <div className="info-item">
                        <span className="payment-title">Discount:</span>
                        <span className="payment-info">-10%</span>
                      </div>
                      <div className="info-item">
                        <span className="payment-title">Total Amount:</span>
                        <span className="payment-info">
                          $315 {payment.amount}
                        </span>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row className="content">
                  <Col
                    className="left"
                    sm={24}
                    md={24}
                    lg={24}
                    xl={24}
                    xxl={24}
                  >
                    <div className="info-item">
                      <p className="payment-title">Other Information </p>
                      <p className="payment-info">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vivamus sed dictum ligula, cursus blandit risus.
                        Maecenas eget metus non tellus dignissim aliquam ut a
                        ex. Maecenas sed vehicula dui, ac suscipit lacus. Sed
                        finibus leo vitae lorem interdum, eu scelerisque tellus
                        fermentum. Curabitur sit amet lacinia lorem. Nullam
                        finibus pellentesque libero.
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      ) : (
        <Row className="mg-header">
          <Col
            className="payment-detail-container"
            sm={12}
            md={12}
            lg={12}
            xl={16}
            xxl={16}
          >
            <div className="container-fluid">
              <div className="payment-detail-content loading">
                <Spinner />
                <p className="text-loading">Loading ...</p>
              </div>
            </div>
          </Col>
        </Row>
      )}
      <Footer />
    </>
  );
}
