import React from 'react';
import './FormControl.css';

function FormControl(props) {
 return (
  <div className="form-control">
    <label>{props.label}</label>
    <br/>
    {props.for == "textarea" ? 
      <textarea type={props.type} htmlFor={props.for} name={props.name} id={props.id} value={props.value}></textarea>
    :
      props.for == "radio" ?
       <React.Fragment>
         <input type={props.type} htmlFor={props.for} name={props.name} id={props.id} value={true} checked={props.isChecked == true ? props.isChecked : ''} /> yes
         <input type={props.type} htmlFor={props.for} name={props.name} id={props.id} value={false} checked={props.isChecked == false ? props.isChecked  : ''}/> no
       </React.Fragment>
      :
        <input type={props.type} htmlFor={props.for} name={props.name} value={props.value} id={props.id} />
    }
  </div>
 );
}

export default FormControl;