import React, { useState } from 'react';
import { Col } from 'reactstrap';
import Switch from "react-switch";

const TrueFalseField = ({text, className}) => {
    const [check, setCheck] = useState(false)
    const handleChange = () =>{
        setCheck(!check);
    }
  return (
    <Col className='d-flex'>
        <div className='pb-2 pr-2'>{text}</div>
        <div className='mx-3 mt-1'>
        <Switch
             onChange={handleChange} checked={check}
            uncheckedIcon={false}
            checkedIcon={false}
            height={20}
            width={38}
         />
         </div>
    </Col>
  );
}

export default TrueFalseField;
