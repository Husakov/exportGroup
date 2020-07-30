import React, { useEffect } from 'react';
import { Col } from 'reactstrap';
import TrueFalseField from '../../patterns/trueFalseField';
import FileUploadField from '../../patterns/fileUploadField';
import DropDown from '../../patterns/DropDown';
import MultipleDropDowns from '../../patterns/MultipleDropDowns';
import { useDispatch } from 'react-redux';
import { setStep } from '../../features/survey';

const StepPage = ({data, step}) => {
  const dispatch = useDispatch()
  return (
    <Col>
        {data.inverseParent && data.inverseParent.map((item, index) => {
            return item.inverseParent.length ? (
                item.inverseParent[0].fieldType === 'Checkbox' ? <TrueFalseField key={index} text={item.fieldValue} />
                : item.inverseParent[0].fieldType === 'FileUpload' ? <FileUploadField key={index} text={item.fieldValue} checkboxText={item.inverseParent[1].fieldValue} />
                : item.inverseParent[0].fieldType === 'DropDown' ? <DropDown key={index} data={item.inverseParent} text={item.fieldValue} />
                : item.inverseParent[0].fieldType === 'Label' ? item.inverseParent[0].inverseParent[0].fieldType==='DropDown' && <MultipleDropDowns key={index} data={item.inverseParent} text={item.fieldValue} /> : null
                ) : null
        })}
    </Col>
  );
}

export default StepPage;
