import React from 'react';
import { Col, Form, Row, Input, Select, DatePicker } from 'antd';
import { BsSearch, BsSquareFill, BsTelephoneFill } from 'react-icons/bs';
import { BiNotepad } from 'react-icons/bi';
import { GiReceiveMoney } from 'react-icons/gi';
import {
  FaRegHospital,
  FaGlassCheers,
  FaRegCalendarAlt,
  FaFacebookF,
  FaPinterestP,
  FaInstagram,
  FaUser,
} from 'react-icons/fa';
import { IoCheckmarkDone, IoEarth } from 'react-icons/io5';
import { FaBacteria } from 'react-icons/fa';
import { HiOutlineShieldCheck } from 'react-icons/hi';
import { MdOutlineFaceUnlock } from 'react-icons/md';
import {
  RiMentalHealthLine,
  RiAppsLine,
  RiNurseFill,
  RiLiveLine,
} from 'react-icons/ri';
import { AiOutlineTwitter } from 'react-icons/ai';
import { TfiEmail } from 'react-icons/tfi';
import moment from 'moment';
import Typewriter from 'typewriter-effect';

import bgDoctor from '../../assets/img/banner-bg-doctor.png';
import doctor1 from '../../assets/img/doctor1.jpeg';
import doctor2 from '../../assets/img/doctor2.jpeg';
import doctor3 from '../../assets/img/doctor3.jpeg';
import doctor4 from '../../assets/img/doctor4.jpeg';
import news1 from '../../assets/img/new-bg1.jpeg';
import news2 from '../../assets/img/new-bg2.jpeg';
import news3 from '../../assets/img/new-bg3.jpeg';
import bgApp from '../../assets/img/app-bg.png';
import bgAbout from '../../assets/img/about-bg.png';
import solutions from '../../assets/img/solutions.png';
import Button from '../../components/Button';
import Header from '../../components/Header';
import Navigation from '../../components/Navigation';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import { Animate } from '../../components/AnimateIn';

const { Option } = Select;

export default function HomePage() {
  const [form] = Form.useForm();
  const [appointmentForm] = Form.useForm();

  const handleSubmitSearch = () => {};

  const handleSubmitBook = () => {};

  return (
    <>
      <Header />
      {/* Banner */}
      <section className="banner-container">
        <Navigation />
        <Row className="container-fluid banner-content">
          <Col className="left" xs={0} sm={0} md={12} lg={12} xl={12}>
            <div className="content">
              <Typewriter
                options={{
                  strings: [
                    'TeleHealth Services Rapid Response To Coronavirus Pandemic ',
                    'The world’s most advanced equipment',
                  ],
                  autoStart: true,
                  loop: true,
                  pauseFor: 3000,
                }}
              />
              <p className="sub-title">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse.
              </p>
              <Form
                className="search-article-form"
                form={form}
                onFinish={handleSubmitSearch}
                name="searchForm"
                scrollToFirstError
              >
                <Form.Item name="article_name" className="input-name-container">
                  <Input
                    className="input"
                    placeholder="Enter your article name!"
                  />
                </Form.Item>

                <Form.Item>
                  <Button className="button square button--blue--dark">
                    <span>Search</span>
                    <BsSearch className="icon" />
                  </Button>
                </Form.Item>
              </Form>
              <div className="make-appointment-container">
                <Button className="button button--blue--light">
                  Make an appointment
                </Button>
              </div>
            </div>
          </Col>
          <Col className="right" xs={0} sm={0} md={12} lg={12} xl={12}>
            <img alt="banner background doctor" src={bgDoctor} />
          </Col>
        </Row>
      </section>

      {/* Service */}
      <section className="service-container container-space">
        <div className="container-fluid">
          <div className="service-list">
            <Animate.FadeInLeft>
              <div className="service-item">
                <div className="icon-container">
                  <GiReceiveMoney className="icon" />
                </div>
                <h3 className="title">Reduce Helth Care Cost</h3>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                </p>
              </div>
            </Animate.FadeInLeft>
            <Animate.FadeInUp>
              <div className="service-item">
                <div className="icon-container">
                  <BiNotepad className="icon" />
                </div>
                <h3 className="title">Reduce Pressure On Medical Staff</h3>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                </p>
              </div>
            </Animate.FadeInUp>
            <Animate.FadeInRight>
              <div className="service-item">
                <div className="icon-container">
                  <FaRegHospital className="icon" />
                </div>
                <h3 className="title">Continuum Of Care</h3>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                </p>
              </div>
            </Animate.FadeInRight>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="about-container container-space">
        <div className="container-fluid">
          <Row className="about-content">
            <Col className="left" xs={24} sm={24} md={12} lg={12} xl={12}>
              <Animate.FadeInLeft>
                <img src={bgAbout} alt="about background" className="image" />
              </Animate.FadeInLeft>
            </Col>
            <Col className="right" xs={24} sm={24} md={12} lg={12} xl={12}>
              <Animate.FadeInDown>
                <h4 className="heading">About Us</h4>
                <h3 className="title">
                  Connect to Call a Doctor by Video or Audio During the COVID-19
                  Pandemic
                </h3>
                <p className="description">
                  Many healthcare systems around the world together with
                  government agencies and startup companies are building and
                  delivering Telehealth solutions the future of non-emergency
                  and routine healthcare delivery
                </p>
              </Animate.FadeInDown>
              <ul className="about-features">
                <Animate.FadeInUp>
                  <li className="about-item">
                    <div className="content">
                      <IoCheckmarkDone className="icon" />
                      <span className="text"> Cold, Cough, Flu</span>
                    </div>
                  </li>
                </Animate.FadeInUp>
                <Animate.FadeInUp>
                  <li className="about-item">
                    <div className="content">
                      <IoCheckmarkDone className="icon" />
                      <span className="text">Chronic Disease</span>
                    </div>
                  </li>
                </Animate.FadeInUp>
                <Animate.FadeInUp>
                  <li className="about-item">
                    <div className="content">
                      <IoCheckmarkDone className="icon" />
                      <span className="text">Allergies</span>
                    </div>
                  </li>
                </Animate.FadeInUp>
                <Animate.FadeInUp>
                  <li className="about-item">
                    <div className="content">
                      <IoCheckmarkDone className="icon" />
                      <span className="text">Pain</span>
                    </div>
                  </li>
                </Animate.FadeInUp>
                <Animate.FadeInUp>
                  <li className="about-item">
                    <div className="content">
                      <IoCheckmarkDone className="icon" />
                      <span className="text">Women's Health issues</span>
                    </div>
                  </li>
                </Animate.FadeInUp>
                <Animate.FadeInUp>
                  <li className="about-item">
                    <div className="content">
                      <IoCheckmarkDone className="icon" />
                      <span className="text">Medication Questions</span>
                    </div>
                  </li>
                </Animate.FadeInUp>
              </ul>
            </Col>
          </Row>
        </div>
      </section>

      {/* Features */}
      <section className="feature-container container-space">
        <div className="container-fluid feature-content">
          <div className="title">
            <Animate.FadeInDown>
              <span>Our Services</span>
            </Animate.FadeInDown>
            <Animate.FadeInLeft>
              <h2>Our Healthcare Services</h2>
            </Animate.FadeInLeft>
            <Animate.FadeInRight>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse
              </p>
            </Animate.FadeInRight>
          </div>
          <div className="feature-list">
            <Animate.FadeInDown>
              <div className="feature-item">
                <div className="icon-container">
                  <div className="icon-content">
                    <FaBacteria className="icon" />
                  </div>
                </div>
                <h3 className="title">COVID-19 Consulting</h3>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore
                </p>
                <Button className="button button--text--blue">
                  <span>Read more</span>
                  <span className="icon">&#43;</span>
                </Button>
              </div>
            </Animate.FadeInDown>
            <Animate.FadeInDown>
              <div className="feature-item">
                <div className="icon-container">
                  <div className="icon-content">
                    <HiOutlineShieldCheck className="icon" />
                  </div>
                </div>
                <h3 className="title">COVID-19 Consulting</h3>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore
                </p>
                <Button className="button button--text--blue">
                  <span>Read more</span>
                  <span className="icon">&#43;</span>
                </Button>
              </div>
            </Animate.FadeInDown>
            <Animate.FadeInDown>
              <div className="feature-item">
                <div className="icon-container">
                  <div className="icon-content">
                    <MdOutlineFaceUnlock className="icon" />
                  </div>
                </div>
                <h3 className="title">Demartology</h3>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore
                </p>
                <Button className="button button--text--blue">
                  <span>Read more</span>
                  <span className="icon">&#43;</span>
                </Button>
              </div>
            </Animate.FadeInDown>
            <Animate.FadeInUp>
              <div className="feature-item">
                <div className="icon-container">
                  <div className="icon-content">
                    <RiMentalHealthLine className="icon" />
                  </div>
                </div>
                <h3 className="title">Mental Health</h3>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore
                </p>
                <Button className="button button--text--blue">
                  <span>Read more</span>
                  <span className="icon">&#43;</span>
                </Button>
              </div>
            </Animate.FadeInUp>
            <Animate.FadeInUp>
              <div className="feature-item">
                <div className="icon-container">
                  <div className="icon-content">
                    <FaGlassCheers className="icon" />
                  </div>
                </div>
                <h3 className="title">Orthopedics</h3>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore
                </p>
                <Button className="button button--text--blue">
                  <span>Read more</span>
                  <span className="icon">&#43;</span>
                </Button>
              </div>
            </Animate.FadeInUp>
            <Animate.FadeInUp>
              <div className="feature-item">
                <div className="icon-container">
                  <div className="icon-content">
                    <IoEarth className="icon" />
                  </div>
                </div>
                <h3 className="title">Gynecological</h3>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore
                </p>
                <Button className="button button--text--blue">
                  <span>Read more</span>
                  <span className="icon">&#43;</span>
                </Button>
              </div>
            </Animate.FadeInUp>
          </div>
        </div>
      </section>

      {/* App */}
      <section className="app-container container-space">
        {/* <div className="container-fluid"> */}
        <Row className="app-content">
          <Col className="left" xs={24} sm={24} md={12} lg={12} xl={12}>
            <Animate.ScaleInTop>
              <img src={bgApp} alt="appointment background" className="image" />
            </Animate.ScaleInTop>
          </Col>
          <Col className="right" xs={24} sm={24} md={12} lg={12} xl={12}>
            <Animate.FadeInDown>
              <h4 className="heading test">Appointment</h4>
              <h3 className="title">How To Get Started By Using Our App</h3>
              <p className="description">
                Many healthcare systems around the world together with
                government agencies and startup companies are building and
                delivering Telehealth solutions
              </p>
            </Animate.FadeInDown>
            <ul className="app-list">
              <Animate.FadeInRight>
                <li className="app-item">
                  <div className="left">
                    <div className="icon-container">
                      <FaRegCalendarAlt className="icon" />
                    </div>
                  </div>
                  <div className="right">
                    <h3 className="title">Pick Your Package</h3>
                    <p className="description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </li>
              </Animate.FadeInRight>
              <Animate.FadeInRight>
                <li className="app-item">
                  <div className="left">
                    <div className="icon-container">
                      <RiAppsLine className="icon" />
                    </div>
                  </div>
                  <div className="right">
                    <h3 className="title">Tinzer App Setup</h3>
                    <p className="description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </li>
              </Animate.FadeInRight>
              <Animate.FadeInRight>
                <li className="app-item">
                  <div className="left">
                    <div className="icon-container">
                      <RiNurseFill className="icon" />
                    </div>
                  </div>
                  <div className="right">
                    <h3 className="title">Patient Onboarding</h3>
                    <p className="description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </li>
              </Animate.FadeInRight>
              <Animate.FadeInRight>
                <li className="app-item">
                  <div className="left">
                    <div className="icon-container">
                      <RiLiveLine className="icon" />
                    </div>
                  </div>
                  <div className="right">
                    <h3 className="title">Going Live</h3>
                    <p className="description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </li>
              </Animate.FadeInRight>
            </ul>
          </Col>
        </Row>
      </section>

      {/* Solutions */}
      <section className="solution-container container-space">
        <div className="container-fluid">
          <Row className="solution-content">
            <Col className="left" xs={24} sm={24} md={12} lg={12} xl={12}>
              <Animate.FadeInDown>
                <h4 className="heading">About Us</h4>
                <h3 className="title">
                  Telehealth Virtual Health Care Solutions
                </h3>
                <p className="description">
                  Many healthcare systems around the world together with
                  government agencies and startup companies are building and
                  delivering Telehealth solutions.
                </p>
              </Animate.FadeInDown>
              <ul className="solution-list">
                <Animate.FadeInLeft>
                  <li className="solution-item">
                    <div className="content">
                      <BsSquareFill className="icon" />
                      <span className="text">Tinger eConsult Program</span>
                    </div>
                  </li>
                </Animate.FadeInLeft>
                <Animate.FadeInLeft>
                  <li className="solution-item">
                    <div className="content">
                      <BsSquareFill className="icon" />
                      <span className="text">Provide More Potential Video</span>
                    </div>
                  </li>
                </Animate.FadeInLeft>
                <Animate.FadeInLeft>
                  <li className="solution-item">
                    <div className="content">
                      <BsSquareFill className="icon" />
                      <span className="text">Remote Monitoring</span>
                    </div>
                  </li>
                </Animate.FadeInLeft>
                <Animate.FadeInLeft>
                  <li className="solution-item">
                    <div className="content">
                      <BsSquareFill className="icon" />
                      <span className="text">Mental Health Solutions</span>
                    </div>
                  </li>
                </Animate.FadeInLeft>
                <Animate.FadeInLeft>
                  <li className="solution-item">
                    <div className="content">
                      <BsSquareFill className="icon" />
                      <span className="text">
                        Surgical Transition Solutions
                      </span>
                    </div>
                  </li>
                </Animate.FadeInLeft>
              </ul>
            </Col>
            <Col className="right" xs={24} sm={24} md={12} lg={12} xl={12}>
              <Animate.ScaleInTop>
                <img src={solutions} alt="solution img" className="image" />
              </Animate.ScaleInTop>
            </Col>
          </Row>
        </div>
      </section>

      {/* Our doctors */}
      <section className="doctor-container container-space">
        <div className="container-fluid">
          <div className="doctor-content">
            {/* <Animate.ScaleInCenter> */}
            <div className="section-title">
              <h4 className="heading">Our Doctors</h4>
              <h3 className="title">Specialized Doctors</h3>
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse
              </p>
            </div>
            {/* </Animate.ScaleInCenter> */}
            <ul className="doctor-list">
              <Animate.FadeInLeft>
                <li className="doctor-item">
                  <img src={doctor1} alt="doctor" className="doctor-avatar" />
                  <div className="content">
                    <h3 className="name">Dr. James Adult</h3>
                    <span className="specialized">Cardiologist</span>
                    <ul className="social-list">
                      <li className="social-item facebook">
                        <FaFacebookF className="icon" />
                      </li>
                      <li className="social-item twitter">
                        <AiOutlineTwitter className="icon" />
                      </li>
                      <li className="social-item pinterest">
                        <FaPinterestP className="icon" />
                      </li>
                      <li className="social-item instagram">
                        <FaInstagram className="icon" />
                      </li>
                    </ul>
                  </div>
                </li>
              </Animate.FadeInLeft>
              <Animate.FadeInUp>
                <li className="doctor-item">
                  <img src={doctor2} alt="doctor" className="doctor-avatar" />
                  <div className="content">
                    <h3 className="name">Dr. James Alison</h3>
                    <span className="specialized">Medicine</span>
                    <ul className="social-list">
                      <li className="social-item facebook">
                        <FaFacebookF className="icon" />
                      </li>
                      <li className="social-item twitter">
                        <AiOutlineTwitter className="icon" />
                      </li>
                      <li className="social-item pinterest">
                        <FaPinterestP className="icon" />
                      </li>
                      <li className="social-item instagram">
                        <FaInstagram className="icon" />
                      </li>
                    </ul>
                  </div>
                </li>
              </Animate.FadeInUp>
              <Animate.FadeInDown>
                <li className="doctor-item">
                  <img src={doctor3} alt="doctor" className="doctor-avatar" />
                  <div className="content">
                    <h3 className="name">Dr. Peter Adlock</h3>
                    <span className="specialized">Neurologiest</span>
                    <ul className="social-list">
                      <li className="social-item facebook">
                        <FaFacebookF className="icon" />
                      </li>
                      <li className="social-item twitter">
                        <AiOutlineTwitter className="icon" />
                      </li>
                      <li className="social-item pinterest">
                        <FaPinterestP className="icon" />
                      </li>
                      <li className="social-item instagram">
                        <FaInstagram className="icon" />
                      </li>
                    </ul>
                  </div>
                </li>
              </Animate.FadeInDown>
              <Animate.FadeInRight>
                <li className="doctor-item">
                  <img src={doctor4} alt="doctor" className="doctor-avatar" />
                  <div className="content">
                    <h3 className="name">Dr. Jelin Alis</h3>
                    <span className="specialized">Medicine</span>
                    <ul className="social-list">
                      <li className="social-item facebook">
                        <FaFacebookF className="icon" />
                      </li>
                      <li className="social-item twitter">
                        <AiOutlineTwitter className="icon" />
                      </li>
                      <li className="social-item pinterest">
                        <FaPinterestP className="icon" />
                      </li>
                      <li className="social-item instagram">
                        <FaInstagram className="icon" />
                      </li>
                    </ul>
                  </div>
                </li>
              </Animate.FadeInRight>
            </ul>
          </div>
        </div>
      </section>

      {/* Appointment */}
      <section className="appointment-container container-space">
        <div className="container-fluid">
          <Row className="appointment-content">
            <Col className="left" xs={24} sm={24} md={12} lg={12} xl={12}>
              <ul className="info-list">
                <Animate.ScaleInCenter>
                  <li className="info-item">
                    <div className="info-num-container">
                      <span className="num">2500</span>
                      <span className="icon">&#43;</span>
                    </div>
                    <p className="text">Care Locations</p>
                  </li>
                </Animate.ScaleInCenter>
                <Animate.ScaleInCenter>
                  <li className="info-item">
                    <div className="info-num-container">
                      <span className="num">2700</span>
                      <span className="icon">&#43;</span>
                    </div>
                    <p className="text">Virtual Care Solutions</p>
                  </li>
                </Animate.ScaleInCenter>
                <Animate.ScaleInCenter>
                  <li className="info-item">
                    <div className="info-num-container">
                      <span className="num">99.6</span>
                      <span className="icon">%</span>
                    </div>
                    <p className="text">Connections Success Rate</p>
                  </li>
                </Animate.ScaleInCenter>
                <Animate.ScaleInCenter>
                  <li className="info-item">
                    <div className="info-num-container">
                      <span className="num">30</span>
                      <span className="icon">&#43;</span>
                    </div>
                    <p className="text">Award Winning</p>
                  </li>
                </Animate.ScaleInCenter>
              </ul>
            </Col>
            <Col className="right" xs={24} sm={24} md={12} lg={12} xl={12}>
              <Animate.FadeInRight>
                <Form
                  className="appointment-form"
                  form={appointmentForm}
                  onFinish={handleSubmitBook}
                  name="appointmentForm"
                  scrollToFirstError
                >
                  <span className="heading">Call to Action</span>
                  <h3 className="title">Make An Appointment</h3>
                  <div className="form-group">
                    {/* Name */}
                    <Form.Item className="form-input-group">
                      <Form.Item
                        name="name"
                        rules={[
                          {
                            required: true,
                            message: 'Please enter your name!',
                          },
                        ]}
                      >
                        <Input
                          className="input"
                          placeholder="Enter your name!"
                        />
                      </Form.Item>
                      <FaUser className="icon" />
                    </Form.Item>

                    {/* Email */}
                    <Form.Item className="form-input-group">
                      <Form.Item
                        name="email"
                        rules={[
                          {
                            type: 'email',
                            message: 'The input is not valid E-mail!',
                          },
                          {
                            required: true,
                            message: 'Please enter your name!',
                          },
                        ]}
                      >
                        <Input
                          className="input"
                          placeholder="Enter your email!"
                        />
                      </Form.Item>
                      <TfiEmail className="icon" />
                    </Form.Item>

                    {/* Phone */}
                    <Form.Item className="form-input-group">
                      <Form.Item
                        name="phone"
                        rules={[
                          {
                            required: true,
                            message: 'Please enter your phone!',
                          },
                        ]}
                      >
                        <Input
                          className="input"
                          placeholder="Enter your phone!"
                        />
                      </Form.Item>
                      <BsTelephoneFill className="icon" />
                    </Form.Item>

                    {/* Category */}
                    <Form.Item
                      name="category"
                      rules={[
                        {
                          required: true,
                          message: 'Please select your category!',
                        },
                      ]}
                      className="form-input-group"
                    >
                      <Select
                        placeholder="Select your cateogry"
                        optionLabelProp="label"
                      >
                        <Option key="1" values="Medicine">
                          Medicine
                        </Option>
                        <Option key="2" values="Cardiologists">
                          Cardiologists
                        </Option>
                        <Option key="3" values="Medicine">
                          Medicine
                        </Option>
                        <Option key="4" values="Cardiologists">
                          Cardiologists
                        </Option>
                      </Select>
                    </Form.Item>

                    {/* Doctor */}
                    <Form.Item
                      name="doctor"
                      rules={[
                        {
                          required: true,
                          message: 'Please select your doctor!',
                        },
                      ]}
                      className="form-input-group"
                    >
                      <Select
                        placeholder="Select your doctor"
                        optionLabelProp="label"
                      >
                        <Option key="1" values="Dr. James Adult">
                          Dr. James Adult
                        </Option>
                        <Option key="2" values="Dr. James Alison">
                          Dr. James Alison
                        </Option>
                        <Option key="3" values="Dr. James Adult">
                          Dr. James Adult
                        </Option>
                        <Option key="4" values="Dr. James Alison">
                          Dr. James Alison
                        </Option>
                      </Select>
                    </Form.Item>

                    {/* Date */}
                    <Form.Item
                      rules={[
                        {
                          required: true,
                          message: 'Please select your date!',
                        },
                      ]}
                      className="form-input-group"
                    >
                      <DatePicker
                        disabledDate={(current) => {
                          // Disable all Sunday, today and days before today
                          return (
                            current.day() === 0 ||
                            (current && current < moment().endOf('day'))
                          );
                        }}
                        allowClear={false}
                        format="DD-MM-YYYY"
                      />
                    </Form.Item>
                  </div>

                  <Form.Item>
                    <Button
                      className="button button--blue--light"
                      type="submit"
                    >
                      Confirm Appointment
                    </Button>
                  </Form.Item>
                </Form>
              </Animate.FadeInRight>
            </Col>
          </Row>
        </div>
      </section>

      {/* News */}
      <section className="news-container container-space">
        <div className="container-fluid">
          <div className="news-content">
            <Animate.FadeInDown>
              <div className="section-title">
                <h4 className="heading">News</h4>
                <h3 className="title">Our Latest News</h3>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum su
                </p>
              </div>
            </Animate.FadeInDown>
            <div className="news-list">
              <Animate.FadeInLeft>
                <figure className="news-item">
                  <Link to="">
                    <img className="new-image" alt="new img" src={news1} />
                    <figcaption className="content">
                      <span className="date">20 April, 2022</span>
                      <div className="content-overlay">
                        <h3 className="title">
                          Telehealth Is Here To Stay. In Your Facility Ready?
                        </h3>
                        <Button className="button button--text--blue">
                          <span>Read more</span>
                          <span className="icon">&#43;</span>
                        </Button>
                      </div>
                    </figcaption>
                  </Link>
                </figure>
              </Animate.FadeInLeft>
              <Animate.FadeInDown>
                <figure className="news-item">
                  <Link to="">
                    <img className="new-image" alt="new img" src={news2} />
                    <figcaption className="content">
                      <span className="date">20 April, 2022</span>
                      <div className="content-overlay">
                        <h3 className="title">
                          Coronavirus Stimulus Checks: What You Need To Know
                        </h3>
                        <Button className="button button--text--blue">
                          <span>Read more</span>
                          <span className="icon">&#43;</span>
                        </Button>
                      </div>
                    </figcaption>
                  </Link>
                </figure>
              </Animate.FadeInDown>
              <Animate.FadeInRight>
                <figure className="news-item">
                  <Link to="">
                    <img className="new-image" alt="new img" src={news3} />
                    <figcaption className="content">
                      <span className="date">20 April, 2022</span>
                      <div className="content-overlay">
                        <h3 className="title">
                          People Worldwide Adjust To New Life Amid COVID-19
                        </h3>
                        <Button className="button button--text--blue">
                          <span>Read more</span>
                          <span className="icon">&#43;</span>
                        </Button>
                      </div>
                    </figcaption>
                  </Link>
                </figure>
              </Animate.FadeInRight>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
