import React, { useEffect } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar'
import { useDispatch, useSelector } from 'react-redux'
import { surveyActionRequest } from '../features/survey';
import StepPage from './surveyPage/stepPage';
import './../styles/surveyPage.css'

const SurveyPage = () => {
    const dispatch = useDispatch();
    const stepper = useSelector(state => state.survey.stepperData)
    useEffect(() => {
        dispatch(surveyActionRequest());
     }, [dispatch])
  return (
    <div className="survey">
        <div className='my-4 pl-4'>{stepper && stepper[1].fieldValue}<span className='float-right'>step 1</span></div>
        <div className='my-4 pl-4'><ProgressBar variant="success" now={60} /></div>
        {
            stepper && stepper.map((step,index) =>{
                return <StepPage data={step} />
            })
        }
    </div>
  );
}

export default SurveyPage;
