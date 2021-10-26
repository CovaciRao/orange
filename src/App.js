import React from 'react';
import './App.css';
import ArrayLand from './ArrayLand/ArrayLand';
import Clock from './Clock/Clock';
import FormControl from './FormControl/FormControl';
import OrangeCounter from './OrangeCounter/OrangeCounter';
import UserForm from './UserForm/UserForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  MoreOranges = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  render() {
    return (
      <div className="App">
        {/* <button onClick={this.MoreOranges}>AdaugaProtocale</button>
        <OrangeCounter protocale={this.state.counter}/> */}
        <ArrayLand />
      </div>
    );
  }
}

export default App;
