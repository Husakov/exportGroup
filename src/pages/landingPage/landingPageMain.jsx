import React from 'react';
import { Col, Row } from 'reactstrap';
import './../../styles/landingPage.css'
import logo from './../../styles/images/logo1.png'
const LandingPageMain = () => {
  return (
    <Row>
        <Col className='main-background-1 w-100'>
            <Row>
                <Col lg={4}></Col>
                <Col lg={8} className='logo-1 mt-3'>
                    <img src={logo} alt="Logo" />
                    <div className='label-1'>
                        <b>sto radimo</b>
                    </div>
                    <div className='label-2'>Distribucija tehnike<br/>i zdrave prehrane</div>
                    <div className='label-3'>Na moderni sustav distribucije nadovezuje se i podrška posebno educiranog prodajnog osoblja koje brine o potrebama svakog kupca.</div>
                    <div className='d-flex mt-4'>
                        <img src={logo} alt="Logo1" />
                        <img src={logo} alt="Logo1" />
                    </div>
                </Col>
            </Row>
        </Col>
        <Col lg={6} className='main-background-2 w-100'>
        part2
        </Col>
    </Row>
  );
}

export default LandingPageMain;
