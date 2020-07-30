import React from 'react';
import { Col, Row } from 'reactstrap';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons"
import './../../styles/landingPage.css'
const LandingPageFooter = () => {
    const facebookIcon = <FontAwesomeIcon icon={faFacebook} />
    const twitterIcon = <FontAwesomeIcon icon={faTwitter} />
    const youtubeIcon = <FontAwesomeIcon icon={faYoutube} />
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
                            <Col lg={6}>E-mail: </Col><Col lg={6}><div className='contact-info'><div>info@expertgroup.ba</div><div>prodaja@expertgroup.ba</div></div></Col>
                        </div>
                        <div className='contact-item d-flex ml-n2 mt-3'>
                        <Col lg={6}>Adresa: </Col><Col lg={6}><div className='contact-info'>Ul. Školska bb</div></Col>
                        </div>
                        <div className='contact-item d-flex ml-n2 mt-3'>
                        <Col lg={6}>Telefon: </Col><Col lg={6}><div className='contact-info'>+387 63 422 574</div></Col>
                        </div>
                        <div className='contact-item d-flex ml-n2 mt-3'>
                        <Col lg={6}>Fax: </Col><Col lg={6}><div className='contact-info'>+387 63 422 574</div></Col>
                        </div>
                        <div className='contact-item d-flex ml-n2 mt-3'>
                        <Col lg={6}>ID broj: </Col><Col lg={6}><div className='contact-info'>123 456 567 708</div></Col>
                        </div>
                        <div className='contact-item d-flex ml-n2 mt-3'>
                        <Col lg={6}>PDV broj: </Col><Col lg={6}><div className='contact-info'>23 456 567 708</div></Col>
                        </div>
                        <div className='contact-item d-flex ml-n2 mt-3'>
                        <Col lg={6}>IBAN: </Col><Col lg={6}><div className='contact-info'>123 456 789</div></Col>
                        </div>
                        <div className='contact-item d-flex ml-n2 mt-3'>
  <Col lg={6}>Drustvene mreze: </Col><Col lg={6}><div className='contact-info'>{facebookIcon}  {twitterIcon}  {youtubeIcon}</div></Col>
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
