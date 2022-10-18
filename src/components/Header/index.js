import React from 'react';
import { Col, Row } from 'antd';
import { BsClock } from 'react-icons/bs';
import { TbPhoneCall } from 'react-icons/tb';
import { BiPaperPlane } from 'react-icons/bi';

import Button from '../../components/Button';

export default function Header() {
  return (
    <section className="header-container">
      {/* Header */}
      <div className="info">
        <Row className="container-fluid">
          <Col className="left" xs={0} sm={0} md={12} lg={12} xl={12}>
            <p className="info-item">
              <BsClock className="icon" />
              Mon-Fri 09-18.00
            </p>
            <p className="info-item">
              <TbPhoneCall className="icon" />
              Call Us: +821-456-241
            </p>
            <p className="info-item">
              <BiPaperPlane className="icon" />
              hello@info.com
            </p>
          </Col>
          <Col className="right" xs={0} sm={0} md={12} lg={12} xl={12}>
            <Button className="button" type="button">
              Sign in
            </Button>
            <Button className="button" type="button">
              Sign up
            </Button>
          </Col>
        </Row>
      </div>
      {/* Navigation */}
      <div className="navigation">
        <p>Logo</p>
        <ul className="nav-list">
          <li className="nav-item">Home</li>
          <li className="nav-item">About</li>
          <li className="nav-item">Patient guide</li>
          <li className="nav-item">Others</li>
        </ul>
      </div>
    </section>
  );
}
