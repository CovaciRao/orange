import React from 'react';
import './FormControl.css';

function FormControl(props) {
 return (
  <div className='form-control'>
    <label className={props.type}>{props.type}</label>
    <br/>
    {props.for == 'textarea' ? 
      <textarea htmlFor={props.for} name={props.name} id={props.id} value={props.value}></textarea>
    :
      props.for == 'radio' ?
       <React.Fragment>
         <input type={props.for} htmlFor={props.for} name={props.name} id={props.id} value={true} checked={props.isChecked == true ? props.isChecked : ''} /> yes
         <input type={props.for} htmlFor={props.for} name={props.name} id={props.id} value={false} checked={props.isChecked == false ? props.isChecked  : ''}/> no
       </React.Fragment>
      :
        <input htmlFor={props.for} name={props.name} value={props.value} id={props.id} />
    }
  </div>
 );
}

export default FormControl;