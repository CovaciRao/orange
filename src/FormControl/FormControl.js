import React from 'react';
import './FormControl.css';

function FormControl(props) {
 return (
  <div className="form-control">
    <label htmlFor="filterBox">Filter</label>
    <input name="filterBox" id="filterBox" type="text" placeholder="filter" onChange={props.setFilterValue} />
  </div>
 );
}

export default FormControl;