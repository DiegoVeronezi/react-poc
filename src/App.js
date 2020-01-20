import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Stephanie', age: 26},      
    ]
  }

  switchNameHandler = () => {
    this.setState({
      persons: [
        {name: 'Maxmilian', age: 29},
        {name: 'Yasmim', age: 30},
        {name: 'Giordana', age: 27},      
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hello World!</h1>
        <button onClick={this.switchNameHandler}>SwitchName</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>Children</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
