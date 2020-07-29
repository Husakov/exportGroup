import React, { useEffect } from 'react';
import { Col } from 'reactstrap';
import TrueFalseField from '../../patterns/trueFalseField';
import FileUploadField from '../../patterns/fileUploadField';
import DropDown from '../../patterns/DropDown';

const StepPage = ({data}) => {
  return (
    <Col>
        {data.inverseParent && data.inverseParent.map((item, index) => {
            return item.inverseParent.length ? (
                item.inverseParent[0].fieldType === 'Checkbox' ? <TrueFalseField text={item.fieldValue} />
                : item.inverseParent[0].fieldType === 'FileUpload' ? <FileUploadField text={item.fieldValue} checkboxText={item.inverseParent[1].fieldValue} />
                : item.inverseParent[0].fieldType === 'DropDown' ? <DropDown /> : null
                ) : null
        })}
    </Col>
  );
}

export default StepPage;
