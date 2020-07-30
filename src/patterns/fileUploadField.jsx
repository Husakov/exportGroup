import React, { useState } from 'react';
import { Col } from 'reactstrap';
import Switch from "react-switch";
import './../styles/landingPage.css'

const FileUploadField = ({text, checkboxText}) => {
    const button = {
        backgroundColor: "black",
        color: "white",
        minWidth: "200px"
    }
  return (
    <>
        <h6 className='mx-3 my-3 py-3'>{text}</h6>
        <Col className='d-flex'>
            <input style={button} type="button" value="Add images"/>
        <Col>
            <input type="checkbox" className='my-3 mx-3'/> 
            <span className='pb-2'>{checkboxText}sda</span>
        </Col>
        </Col>
    </>
  );
}

export default FileUploadField;
