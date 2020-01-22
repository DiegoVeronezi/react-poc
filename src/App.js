import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 },
    ]
  });

  const [showPersonState, setShowPersonState] = useState(false);

  const deletePersonHandler = (personIndex) => {
    const persons = [...personsState.persons];
    persons.splice(personIndex, 1);
    setPersonsState({
      persons: persons
    });
  }

  const nameChangedHandler = (event, index) => {
    const personIndex = index;
    console.log('index', personIndex);

    const person = {
      ...personsState[personIndex]
    };

    person.name = event.target.value;

    const persons = [...personsState.persons];
    persons[personIndex] = person;

    setPersonsState({persons: persons});
  }

  const togglePersonsHandler = () => {
    const doesShow = showPersonState;
    setShowPersonState(!doesShow);
  }

  let persons = null;

  if (showPersonState) {
    persons = (
      <div>
        {personsState.persons.map((person, index) => {
          return <Person
          click={() => deletePersonHandler(index)}
          name={person.name}
          age={person.age}
          key={index}
          changed={(event) => nameChangedHandler(event, index)} />
        })}
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