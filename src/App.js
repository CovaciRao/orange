import React from 'react';
import './App.css';
import DataLand from './DataLand/DataLand';

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
        {/* <ArrayLand /> */}
        {/* <UserList /> */}
        <DataLand />
      </div>
    );
  }
}

export default App;
