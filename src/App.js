import React from 'react';
import './App.css';
import Clock from './Clock/Clock';
import FormControl from './FormControl/FormControl';
import UserForm from './UserForm/UserForm';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    }
  }

  componentDidMount() {
    this.someTimer = setInterval(() => {
      this.setState({
        date: new Date(),
      })
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.someTimer);
  }

  render() {
    const TheProfile = {
      username: 'Rara',
      email: 'Rara@test.com',
      motto: 'Rarararararrarararara',
      personalized: false,
    }
    return (
      <div className="App">
        <div className="forms">
          <UserForm
            title="Register"
            buttonTheme="button"
            buttonType="submit"
            buttonLabel="Register"
          >
            <FormControl type="text" label="Username" for="text" name="username" id="username" />
            <FormControl type="email" label="Email" for="email" name="email" id="email" />
            <FormControl type="password" label="Password" for="password" name="password" id="password" />
            <FormControl type="password" label="Confirm Password" for="password" name="confirmPassword" id="confirmPassword" />
            <FormControl type="textarea" label="Motto" for="textarea" name="motto" id="motto" />
            <FormControl type="radio" label="User personalized" for="radiozxcxzc" name="userPersonalizedssz" id="userPersonalized" val1="yes" val2="no" isChecked="false" />
          </UserForm>
          <UserForm
            title="Edit Profile"  
            buttonTheme="button"
            buttonType="submit"
            buttonLabel="Update"
          >
            <FormControl label="Username" type="text" name="username" id="username" value={TheProfile.username}/>
            <FormControl label="Email" type="email" name="email" id="email" value={TheProfile.email}/>
            <FormControl type="textarea" label="Motto" for="textarea" name="motto" id="motto" value={TheProfile.motto}/>
            <FormControl type="radio" label="User personalized" for="radio" name="userPersonalized" id="userPersonalized" isChecked={TheProfile.personalized} val1="yes" val2="no"/>
          </UserForm>
        </div>
        <Clock date={this.state.date}/>
      </div>
    );
  }
}

export default App;
