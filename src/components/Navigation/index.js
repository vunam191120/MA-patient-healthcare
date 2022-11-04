import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineChevronDown } from 'react-icons/hi';

import healthCareLogo from '../../assets/img/health-care-logo.png';

export default function Navigation({ activeBg }) {
  const navRef = useRef();

  useEffect(() => {
    const navOffsetHeight = navRef.current.clientHeight;
    const headerOffsetHeight =
      document.querySelector('.header-container').clientHeight;

    const handleScroll = () => {
      if (window.scrollY > navOffsetHeight + headerOffsetHeight) {
        navRef.current.classList.add('active');
      } else {
        navRef.current.classList.remove('active');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      ref={navRef}
      className={`navigation-container ${activeBg ? 'activeBg' : ''}`}
    >
      <div className="container-fluid navigation-content">
        <div className="logo-container">
          <img
            src={healthCareLogo}
            alt="logo navigation"
            className="logo-img"
          />
          <span className="logo-text">HealthCare</span>
        </div>
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="" className="nav-link">
              <span className="text">Home</span>
              <HiOutlineChevronDown className="icon" />
            </Link>
            <ul className="sub-nav">
              <Link to="" className="sub-item">
                Sub nav 1
              </Link>
              <Link to="" className="sub-item">
                Sub nav 2
              </Link>
              <Link to="" className="sub-item">
                Sub nav 3
              </Link>
              <Link to="" className="sub-item">
                Sub nav 4
              </Link>
            </ul>
          </li>
          <li className="nav-item">
            <Link to="" className="nav-link">
              <span className="text">About</span>
              <HiOutlineChevronDown className="icon" />
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">
              <span className="text">Contact</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="" className="nav-link">
              <span className="text">Others</span>
              <HiOutlineChevronDown className="icon" />
            </Link>
          </li>
        </ul>
        <div className="other-option">
          <Link
            to="/bookAppointment"
            className="button square button--blue--dark"
            type="button"
          >
            Make an appointment
          </Link>
        </div>
      </div>
    </div>
  );
}
