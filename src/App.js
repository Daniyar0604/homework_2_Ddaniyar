import { Component } from "react";
import Circle from "./components/Circle/Circle";
import './App.css'

class App extends Component {

  random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  state = {
    numbers: [
      {number: 6},
      {number: 7},
      {number: 8},
      {number: 9},
      {number: 10},
    ]
  }

  changeNumber = () => {
    console.log('Click');
    const numbersCopy = this.state.numbers;
    numbersCopy[0].number = this.random(5, 36);
    numbersCopy[1].number = this.random(5, 36);
    numbersCopy[2].number = this.random(5, 36);
    numbersCopy[3].number = this.random(5, 36);
    numbersCopy[4].number = this.random(5, 36);
  
    for (let i = 0; i < numbersCopy.length; i++) {
      for (let j = i + 1; j < numbersCopy.length; j++) {
        while (numbersCopy[i].number === numbersCopy[j].number) {
         numbersCopy[j].number = this.random(5, 36) 
        };
      };
    };
  
    const comparer = (a, b) => {
      return a.number - b.number
    };
  
    numbersCopy.sort(comparer);
  
    this.setState({numbers: numbersCopy});
  }

  render() {
    return (
      <div className="App">
        <div className="CircleContainer">
          <Circle numberl={this.state.numbers[0].number}></Circle>
          <Circle numberl={this.state.numbers[1].number}></Circle>
          <Circle numberl={this.state.numbers[2].number}></Circle>
          <Circle numberl={this.state.numbers[3].number}></Circle>
          <Circle numberl={this.state.numbers[4].number}></Circle>
        </div>
      <button onClick={this.changeNumber} className="btn">Поменять цифры</button>
      </div>
    )
  } 
}

export default App;
