import React, { useEffect } from 'react';
import { Col,Row } from 'reactstrap';
import TrueFalseField from '../../patterns/trueFalseField';
import FileUploadField from '../../patterns/fileUploadField';
import DropDown from '../../patterns/DropDown';
import { useDispatch } from 'react-redux';
import Dropdown from './../../patterns/DropDown';

const StepPage = ({data, step}) => {
  const dispatch = useDispatch()
  return (
    <Col>
        {data.inverseParent && data.inverseParent.map((item, index) => {
            return item.inverseParent.length ? (
                item.inverseParent[0].fieldType === 'Checkbox' ? <TrueFalseField key={index} text={item.fieldValue} />
                : item.inverseParent[0].fieldType === 'FileUpload' ? <FileUploadField key={index} text={item.fieldValue} checkboxText={item.inverseParent[1].fieldValue} />
                : item.inverseParent[0].fieldType === 'DropDown' ? <DropDown key={index} data={item.inverseParent} text={item.fieldValue} />
                : (item.inverseParent[0].fieldType === 'Label' && item.inverseParent[0].inverseParent[0].fieldType==='DropDown') ?
                <>
                <div className="mx-3 pt-3">{item.fieldValue}</div>
                 <Row className='d-flex'>
                   {item.inverseParent.map((items) => {
                   console.log(items)
                   return(
                     <Col lg={12/items.inverseParent}>
                      <Dropdown data={items.inverseParent} text={items.fieldValue} />
                    </Col>
                   )
                 })}
                 </Row>
                 </> 
                 : null
                ) : null
        })}
    </Col>
  );
}

export default StepPage;
