import React from 'react';
import { Col, Row } from 'antd';
import { BsClock } from 'react-icons/bs';
import {
  FaFacebookF,
  FaPinterestP,
  FaInstagram,
  FaTelegramPlane,
  FaPhoneAlt,
} from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';

import Button from '../../components/Button';

export default function Header() {
  return (
    <section className="header-container">
      <div className="header-content">
        <Row className="container-fluid">
          <Col className="left" xs={0} sm={0} md={12} lg={12} xl={12}>
            <p className="info-item">
              <span className="icon-container">
                <BsClock className="icon" />
              </span>
              Mon-Fri 09-18.00
            </p>
            <p className="info-item">
              <span className="icon-container">
                <FaPhoneAlt className="icon" />
              </span>
              Call Us: +821-456-241
            </p>
            <p className="info-item">
              <span className="icon-container">
                <FaTelegramPlane className="icon" />
              </span>
              hello@info.com
            </p>
          </Col>
          <Col className="right" xs={0} sm={0} md={12} lg={12} xl={12}>
            <span className="socials facebook">
              <FaFacebookF />
            </span>
            <span className="socials pinterest">
              <FaPinterestP />
            </span>
            <span className="socials twitter">
              <AiOutlineTwitter />
            </span>
            <span className="socials instagram">
              <FaInstagram />
            </span>
            <Button className="button button--text--white" type="button">
              Sign In
            </Button>
            <Button className="button button--light square" type="button">
              Sign Up
            </Button>
          </Col>
        </Row>
      </div>
    </section>
  );
}
