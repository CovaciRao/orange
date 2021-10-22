import React from 'react';
import './FormControl.css';

function FormControl(props) {
 return (
  <div className="form-control">
    <label htmlFor={props.for}>{props.label}</label>
    <br/>
    {props.type == "textarea" ? 
      <textarea type={props.type} name={props.name} id={props.id} value={props.value}></textarea>
    :
      props.type == "radio" ?
       <React.Fragment>
         <input type={props.type} name={props.name} id={props.id} defaultChecked={props.isChecked == "true" ? props.isChecked : ''}/> {props.val1}
         <input type={props.type} name={props.name} id={props.id} defaultChecked={props.isChecked == "false" ? props.isChecked : ''}/> {props.val2}
       </React.Fragment>
      :
        <input type={props.type} name={props.name} value={props.value} id={props.id} />
    }
  </div>
 );
}

export default FormControl;