import React from 'react';
import './App.css';
import StorageLand from './StorageLand/StorageLand';

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
        <StorageLand />
      </div>
    );
  }
}

export default App;
