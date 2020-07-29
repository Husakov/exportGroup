import React from 'react';
import { Col, Row } from 'reactstrap';
import './../../styles/landingPage.css'
import logo from './../../styles/images/logo1.png'

const LandingPageFood = () => {
  return (
    <Row>
        <Col className='main-background-5 w-100'>
            <Row>
                <Col lg={4}></Col>
                <Col lg={8} className='logo-1 mt-3 py-5 pr-5'>
                    <img src={logo} alt="Logo" />
                    <div className='label-1 mt-5'>
                        <b>DISTRIBUCIJA ZDRAVE HRANE</b>
                    </div>
                    <div className='label-2'><b>Expert Food</b></div>
                    <div className='label-9'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                </Col>
            </Row>
        </Col>
        <Col lg={6} className='main-background-6 w-100'>
        part2
        </Col>
    </Row>
  );
}

export default LandingPageFood;
