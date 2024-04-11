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
