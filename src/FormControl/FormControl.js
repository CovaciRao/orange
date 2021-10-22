import React from 'react';
import './FormControl.css';

function FormControl(props) {
 return (
  <div className="form-control">
    <label htmlFor={props.for}>{props.label}</label>
    <br/>
    {props.for == "textarea" ? 
      <textarea type={props.type} name={props.name} id={props.id} value={props.value}></textarea>
    :
      props.type == "radio" ?
       <React.Fragment>
        {props.isChecked == true ? 
        <React.Fragment>
          <input type={props.type} name={props.name} id={props.id} value={true} checked/> {props.val1}
          <input type={props.type} name={props.name} id={props.id} value={false} /> {props.val2}
        </React.Fragment>
        : props.isChecked == false ? 
          <React.Fragment>
            <input type={props.type} name={props.name} id={props.id} value={true} /> {props.val1}
            <input type={props.type} name={props.name} id={props.id} value={false} checked/> {props.val2}
          </React.Fragment>
          :
          <React.Fragment>
            <input type={props.type} name={props.name} id={props.id} value={true} /> {props.val1}
            <input type={props.type} name={props.name} id={props.id} value={false}/> {props.val2}
          </React.Fragment>
        }
       </React.Fragment>
      :
        <input type={props.type} name={props.name} value={props.value} id={props.id} />
    }
  </div>
 );
}

export default FormControl;