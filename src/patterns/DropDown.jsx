import React, { useState } from 'react';
import { Dropdown, DropdownMenu, DropdownToggle } from 'reactstrap';

const DropDown = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropDownStyle =  {
    border: "1px solid",
    width: '100%',
    padding: "4px",
    cursor: "pointer"
  }

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <>
    <div className="my-3 mx-3">some text</div>
    <Dropdown className='my-3 mx-3' style={dropDownStyle} isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle
        tag="div"
        data-toggle="dropdown"
        aria-expanded={dropdownOpen}
      >
        Custom Dropdown Content <span className='float-right mr-2'>˅</span>
      </DropdownToggle>
      <DropdownMenu className='w-150' style={{minWidth: 500}}>
        <div onClick={toggle}>Custom dropdown item</div>
        <div onClick={toggle}>Custom dropdown item</div>
        <div onClick={toggle}>Custom dropdown item</div>
        <div onClick={toggle}>Custom dropdown item</div>
      </DropdownMenu>
    </Dropdown>
    </>
  );
}

export default DropDown;