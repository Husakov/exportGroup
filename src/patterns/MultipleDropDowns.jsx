import React, { useState } from 'react';
import { Dropdown, DropdownMenu, DropdownToggle, Col, Row } from 'reactstrap';

const MultipleDropDowns = ({data, text}) => {
    console.log(data)
  const [dropdownOpen, setDropdownOpen] = useState();
  const dropDownStyle =  {
    border: "1px solid",
    padding: "4px",
    cursor: "pointer"
  }
  const dropDownItem = {
    borderBottom: "1px solid"
  }

  const dropDownMenu = {
    border: "1px solid"
  }
  const DropDown = ({text, id}) => {
      return (
        <Col>
        <div className="my-3 mx-3">{text}</div>
        <Dropdown className='my-3 mx-3' style={dropDownStyle} isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle
            tag="div"
            data-toggle="dropdown"
            aria-expanded={dropdownOpen}
          >
            ... <span className='float-right mr-2'>˅</span>
          </DropdownToggle>
          <DropdownMenu className='w-150' style={dropDownMenu}>
            {data && data.map((item, index) =>{
              return <div className="my-2 mx-2" style={dropDownItem} onClick={toggle}>  {item.fieldValue}  </div>
            })}
          </DropdownMenu>
        </Dropdown>
        </Col>
      )
  }

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <>
    <div className="my-3 mx-3 py-3">{text}</div>
    <Row className="d-flex">
        {data.map((item, index) => {
            console.log(item)
            return DropDown(item.fieldValue, index)
        })}
    </Row>
    </>
  );
}

export default MultipleDropDowns;