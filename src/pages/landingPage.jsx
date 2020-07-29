import React, { useEffect } from 'react';
import { Col } from 'reactstrap';
import { useDispatch } from 'react-redux'
import LandingPageMain from './landingPage/landingPageMain';
import LandingPageComp from './landingPage/landingPageComp';
import LandingPageFood from './landingPage/landingPageFood';
import LandingPageFooter from './landingPage/landingPageFooter';
import { surveyActionRequest } from '../features/survey';

const LandingPage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(surveyActionRequest());
     }, [dispatch])
  return (
    <Col>
        <LandingPageMain />
        <LandingPageComp />
        <LandingPageFood />
        <LandingPageFooter />
    </Col>
  );
}

export default LandingPage;
