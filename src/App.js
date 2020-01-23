import React, { useState } from 'react';
import Radium from 'radium';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const style = {
    backgroundColor: 'green',
    color: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: 'lightgreen',
      color: 'black'
    }
  };

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

    style.backgroundColor = 'red';
    style[':hover'] = {
      backgroundColor: 'lightred',
      color: 'black'
    }
  }

  const classes = [];
  if (personsState.persons.length <=2) {
    classes.push('red');
  }
  if (personsState.persons.length <=1) {
    classes.push('bold');
  }

  return (
    <div className="App">
      <p className={classes.join(' ')}>Hello World!</p>
      <button style={style} onClick={togglePersonsHandler}>Toggle Persons</button>
      {persons}
    </div>
  );
}

export default Radium(app);