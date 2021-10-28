import React from 'react';
import './FormControl.css';

function FormControl(props) {
 return (
  <div className="form-control">
    <label htmlFor="filterBox">Filter</label>
    <input name="filterBox" id="filterBox" type="text" placeholder="Gonna filt'hem all" onChange={props.setFilterValue} />
  </div>
 );
}

export default FormControl;