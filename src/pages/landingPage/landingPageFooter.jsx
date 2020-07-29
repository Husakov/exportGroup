import React from 'react';
import { Col, Row } from 'reactstrap';
import './../../styles/landingPage.css'
const LandingPageFooter = () => {
  return (
    <Row>
        <Col lg={6} className='main-background-8'>
        </Col>
        <Col className='main-background-7'>
            <Row>
                <Col lg={8} className='logo-1 mt-3 pt-3 ml-4'>
                    <div className='label-contact'>
                        IMATE PITANJA?
                    </div>
                    <div className='contact-headline'>Kontaktirajte nas:</div>
                    <div className='mt-3'>
                        <div className='contact-item d-flex ml-n2'>
                            <Col lg={6}>E-mail: </Col><Col><div className='float-right contact-info'><div>info@expertgroup.ba</div><div>prodaja@expertgroup.ba</div></div></Col>
                        </div>
                        <div className='contact-item d-flex ml-n2 mt-3'>
                        <Col lg={6}>Adresa: </Col><Col><div className='float-right contact-info'>Ul. Školska bb</div></Col>
                        </div>
                        <div className='contact-item d-flex ml-n2 mt-3'>
                        <Col lg={6}>Telefon: </Col><Col><div className='float-right contact-info'>+387 63 422 574</div></Col>
                        </div>
                        <div className='contact-item d-flex ml-n2 mt-3'>
                        <Col lg={6}>Fax: </Col><Col><div className='float-right contact-info'>+387 63 422 574</div></Col>
                        </div>
                        <div className='contact-item d-flex ml-n2 mt-3'>
                        <Col lg={6}>ID broj: </Col><Col><div className='float-right contact-info'>123 456 567 708</div></Col>
                        </div>
                        <div className='contact-item d-flex ml-n2 mt-3'>
                        <Col lg={6}>PDV broj: </Col><Col lg={6}><div className='float-right contact-info'>23 456 567 708</div></Col>
                        </div>
                        <div className='contact-item d-flex ml-n2 mt-3'>
                        <Col lg={6}>IBAN: </Col><Col lg={6}><div className='float-right contact-info'>123 456 789</div></Col>
                        </div>
                        <div className='contact-item d-flex ml-n2 mt-3'>
                        <Col lg={6}>Drustvene mreze: </Col><Col lg={6}><div className='float-right contact-info'>Ul. Školska bb</div></Col>
                        </div>
                    </div>
                </Col>
                <Col lg={4}></Col>
            </Row>
        </Col>
    </Row>
  );
}

export default LandingPageFooter;
