import React from "react";
import './ArrayLand.css';

class ArrayLand extends React.Component {
  constructor(props) {
    super(props);
    this.timerHandle = null;
    this.state = {
      boxes: [
        [
          '🍊','🍊','🍋','🍌','🍋','🍌','🍋','🍊','🍌','🍌',
        ],
        [
          '🍋','🍋','🍊','🍌','🍊','🍌','🍋','🍋','🍊','🍊','🍌',
        ],
        [
          '🍌','🍋','🍌','🍋','🍊','🍌','🍌',
        ]
      ],
    }
  }

  SortFruits = () => {
    let fruits = this.state.boxes;
    let sortOrder = ['🍊','🍌','🍋'];
    fruits.map((fruit) => fruit.sort((a,b) => sortOrder.indexOf(a) - sortOrder.indexOf(b)));
    this.setState({
      boxes: fruits,
    }, () => this.TimeOutFruits());
  }

  SortBoxes = () => {
    let fruits = this.state.boxes;
    let sortedBoxes = ['🍊','🍌','🍋'];
    let newBoxes = new Array(sortedBoxes.length).fill([]);
    let newarray = [].concat.apply([], fruits);
    for(let i=0; i<newarray.length; i++) {
      for(let j=0; j<sortedBoxes.length; j++) {
        if(newarray[i] == sortedBoxes[j]) {
          newBoxes[j] = [...newBoxes[j], newarray[i]];
        }
      }
    }
    this.setState({
      boxes: newBoxes,
    }, () => this.setTimer())
  }

  ShuffleFruits = () => {
    let fruits = this.state.boxes;
    let newBoxes = new Array(3).fill([]);
    let newarray = [].concat.apply([], fruits);
    let counter;
    newarray = newarray.sort(() => 0.5 - Math.random());
    newarray.map((fruit) => {
      counter = this.getRandomInt(3);
      newBoxes[counter] = [...newBoxes[counter],fruit]
    })
    return newBoxes;
  }

   getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  TimeOutFruits = () => {
    this.timerHandle = setTimeout(() => {
      this.setState({
        boxes: this.ShuffleFruits(),
      })
    }, 3000)
    return this.timerHandle;
  }

  setTimer = () => {
    if(this.timerHandler) {
      return;
    } else 
    this.TimeOutFruits();
  }

  clearTimer = () => {
    if(this.timerHandle) {
      clearTimeout(this.timerHandle);
      this.timerHandle = null;
    }
  };

  componentDidUpdate() {
    this.clearTimer();
  }

  componentWillUnmount() {
    this.clearTimer();
  }

  render() {
    return (
    <>
      {this.state.boxes.map((fruits, index) => 
        <div className="box" key={index} >{fruits}</div>
      )}
      <button onClick={this.SortFruits}>Sort fruits</button>
      <button onClick={this.SortBoxes}>Sort boxes</button>
    </>
    );
  }
}

  export default ArrayLand;