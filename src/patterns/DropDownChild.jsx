import React, { useState } from 'react';
import { Dropdown, DropdownMenu, DropdownToggle } from 'reactstrap';
import Toast from './../patterns/Toast'
import DropDown from './DropDown';

const DropDownChild = ({data, text}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(data[0]);
  const dropDownStyle =  {
    border: "1px solid",
    width: '100%',
    padding: "4px",
    cursor: "pointer"
  }
  const dropDownItem = {
    borderBottom: "1px solid"
  }

  const dropDownMenu = {
    border: "1px solid",
    minWidth: 500
  }

  const toggle = () => setDropdownOpen(prevState => !prevState);

  const changeValue = (item) => {
    setSelectedValue(item)
    setDropdownOpen(prevState => !prevState);
  }

  return (
    <>
    <div className="my-3 mx-3 py-3">{text}</div>
    <Dropdown className='my-3 mx-3' style={dropDownStyle} isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle
        tag="div"
        data-toggle="dropdown"
        aria-expanded={dropdownOpen}
      >
        {selectedValue.fieldValue && selectedValue.fieldValue}<span className='float-right mr-2'>˅</span>
      </DropdownToggle>
      <DropdownMenu className='w-150' style={dropDownMenu}>
        {data && data.map((item, index) =>{
          return <div key={index} className="my-2 mx-2" style={dropDownItem} onClick={() => changeValue(item)}>  {item.fieldValue && item.fieldValue}  </div>
        })}
      </DropdownMenu>
    </Dropdown>
    {(selectedValue.inverseParent.length && selectedValue.inverseParent[0].fieldType === "Notification") ? <Toast info={selectedValue.inverseParent[0].fieldValue} /> : null}
    {(selectedValue.inverseParent.length && selectedValue.inverseParent[0].fieldType === "Label") ? <DropDownChild data={selectedValue.inverseParent} /> : null}
    </>
  );
}

export default DropDownChild;