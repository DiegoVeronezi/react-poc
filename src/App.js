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
    otherState: 'some other value',
    showPersons: false
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

  const nameChangedHandler = (event) => {
    setPersonsState({
      persons: [
        { name: event.target.value, age: 29 },
        { name: 'Manu', age: 30 },
        { name: 'Stephanie', age: 27 },
      ],
      otherState: personsState.otherState
    })
  }

  const togglePersonsHandler = () => {
    const doesShow = personsState.showPersons;
    setPersonsState({
      persons: [
        { name: 'Max', age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 26 },
      ],
      otherState: 'some other value',
      showPersons: !doesShow
    });
  }

  let persons = null;

  if (personsState.showPersons) {
    persons = (
      <div>
        <Person
          name={personsState.persons[0].name}
          age={personsState.persons[0].age}
          click={() => switchNameHandler("Diego!")}
          changed={nameChangedHandler}>Children</Person>
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
      </div>
    )
  }

  return (
    <div className="App">
      <h1>Hello World!</h1>
      <button onClick={togglePersonsHandler}>Toggle Persons</button>
      {persons}
    </div>
  );
}

export default app;