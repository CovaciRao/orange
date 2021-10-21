import React from 'react';
import './Form.css'

function Button(props) {
  return(
    <button className={props.theme ? props.theme : ''}>
      {props.icon ?
        <React.Fragment>
          <span className={props.icon}></span>
          <span>{props.label}</span>
        </React.Fragment>
      :
        <React.Fragment>
          {props.label}
        </React.Fragment>
      }
    </button>
  );
}

export default Button;