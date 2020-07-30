import React, { useState } from 'react';
import { Dropdown, DropdownMenu, DropdownToggle } from 'reactstrap';

const DropDown = ({data, text}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
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

  return (
    <>
    <div className="my-3 mx-3 py-3">{text}</div>
    <Dropdown className='my-3 mx-3' style={dropDownStyle} isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle
        tag="div"
        data-toggle="dropdown"
        aria-expanded={dropdownOpen}
      >
        Choose ... <span className='float-right mr-2'>˅</span>
      </DropdownToggle>
      <DropdownMenu className='w-150' style={dropDownMenu}>
        {data && data.map((item, index) =>{
          return <div className="my-2 mx-2" style={dropDownItem} onClick={toggle}>  {item.fieldValue}  </div>
        })}
      </DropdownMenu>
    </Dropdown>
    </>
  );
}

export default DropDown;