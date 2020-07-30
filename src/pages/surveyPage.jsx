import React, { useEffect, useState } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar'
import { useDispatch, useSelector } from 'react-redux'
import { surveyActionRequest, setStep } from '../reducers/survey';
import StepPage from './surveyPage/stepPage';
import './../styles/surveyPage.css'

const SurveyPage = () => {
    const dispatch = useDispatch();
    const stepper = useSelector(state => state.survey.stepperData)
    const steps = useSelector(state => state.survey.step)

    const button = {
        backgroundColor: "black",
        color: "white",
        minWidth: "200px",
        marginBottom: "10%",
        marginTop: "10%",
        float: "right"
    }

    useEffect(() => {
        dispatch(surveyActionRequest());
     }, [])

     if(!stepper.length){
        return null
    }
  return (
    <div className="survey pt-4">
        <div className='my-4 pl-4'>{steps < stepper.length && stepper ? stepper[steps].fieldValue : 'Final'}<span className='float-right'>{steps < stepper.length ? `step ${steps}` : 'Completed'}</span></div>
        <div className='my-4 pl-4'><ProgressBar variant="success" now={(steps-1)/(stepper.length-1)*100} /></div>
        {steps < stepper.length && <StepPage data={stepper[steps]} />}
        {steps < stepper.length && <input style={button} type="button" value={steps < stepper.length-1 ? "Next Step ⇨" : 'Submit Form'} onClick={() => dispatch(setStep(steps+1))}/>}
    </div>
  );
}

export default SurveyPage;
