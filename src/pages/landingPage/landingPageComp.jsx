import React from 'react';
import { Col, Row } from 'reactstrap';
import './../../styles/landingPage.css'
import logo from './../../styles/images/logo1.png'

const LandingPageComp = () => {
  return (
    <Row>
        <Col lg={6} className='main-background-4 w-100'>
            part2
        </Col>
        <Col className='main-background-3 w-100'>
            <Row>
                <Col lg={8} className='logo-1 mt-3 py-5 pl-5'>
                    <img src={logo} alt="Logo" />
                    <div className='label-4'>
                        STO RADIMO
                    </div>
                    <div className='label-2'>Distribucija tehnike i zdrave prehrane</div>
                    <div className='label-3'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                    <input className="btn1 mt-3" type="button" value="Posjeti webshop"/>
                </Col>
                <Col lg={4}></Col>
            </Row>
        </Col>
    </Row>
  );
}

export default LandingPageComp;
