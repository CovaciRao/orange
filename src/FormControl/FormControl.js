import React from 'react';
import SubmitFormButton from '../SubmitFormButton/SubmitFormButton';
import './FormControl.css';

function FormControl(props) {
 return (
  <form>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" />
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1" />
    </div>
    <SubmitFormButton theme={"btn btn-primary"} type={"submit"} label={"submit"}/>
  </form>
 );
}

export default FormControl;