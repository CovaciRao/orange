import React from 'react';
import FormControl from '../FormControl/FormControl';
import SubmitFormButton from '../SubmitFormButton/SubmitFormButton';
import './UserForm.css';

function UserForm(props) {
 return (
   <div>
    <h2>{props.title}</h2>
    <form>
      <React.Fragment> 
        {props.children}
      </React.Fragment>
      <SubmitFormButton theme={props.buttonTheme} type={props.buttonType} label={props.buttonLabel} />
    </form>
   </div>
 );
}

export default UserForm;