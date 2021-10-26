import React from "react";
import './ArrayLand.css';

class ArrayLand extends React.Component {
  constructor(props) {
    super(props);
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
      ]
    }
  }

  SortFruits = () => {
    let fruits = this.state.boxes;
    let sortOrder = ['🍊','🍌','🍋'];
    fruits.map((fruit) => fruit.sort((a,b) => sortOrder.indexOf(a) - sortOrder.indexOf(b)));
    this.setState({
      boxes: fruits,
    });
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
    })
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