import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 },
    ],
    otherState: 'some other value'
  });

  const switchNameHandler = (Newname) => {
    setPersonsState({
      persons: [
        { name: Newname, age: 29 },
        { name: 'Yasmim', age: 30 },
        { name: 'Giordana', age: 27 },
      ],
      otherState: personsState.otherState
    })
  }

  console.log('->', personsState);

  return (
    <div className="App">
      <h1>Hello World!</h1>
      <button onClick={() => switchNameHandler("Diego!")}>SwitchName</button>
      <Person 
        name={personsState.persons[0].name} 
        age={personsState.persons[0].age}
        click={() => switchNameHandler("Diego!")}>Children</Person>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
    </div>
  );
}

export default app;