import React, { useEffect, useRef, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineChevronDown } from 'react-icons/hi';

import healthCareLogo from '../../assets/img/health-care-logo.png';
import Button from '../Button';

export default function Navigation() {
  const navRef = useRef();

  // const navOffsetHeight = useMemo(() => {
  //   return navRef.current.clientHeight;
  // }, [navRef]);

  // const headerOffsetHeight = useMemo(() => {
  //   return document.querySelector('.header-container').clientHeight;
  // }, []);

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

    // console.log(document.querySelector('.header-container'));

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={navRef} className="navigation-container">
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
            <Link to="" className="nav-link">
              <span className="text">Patient guide</span>
              <HiOutlineChevronDown className="icon" />
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
          <Button className="button square button--blue--dark" type="button">
            Make an appointment
          </Button>
        </div>
      </div>
    </div>
  );
}
