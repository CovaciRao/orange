import React from 'react';
import './SubmitFormButton.css';

function SubmitFormButton(props) {
 return (
   <button 
    className={props.theme ? props.theme : ''} 
    type={props.type ? props.type : ''}
   >
     {props.label}
   </button>
 );
}

export default SubmitFormButton;