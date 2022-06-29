import {nanoid} from 'nanoid';
import {useState} from 'react';

import data from '../data.json';
import StyledForm from '../style/StyledForm';

export default function Form() {
  const [plans, setPlans] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
  }
  //setting the day workout
  function handleChange(event) {
    const newExercise = event.target.value;
    setPlans([...plans, newExercise]);
  }
  //filtering data from the json
  const bodyPart = Object.values(data);

  const exercises = data[0].exercise;
  return (
    <StyledForm onSubmit={handleSubmit}>
      <label htmlFor="input2">Body part:</label>
      <select name="input2" value={data.value}>
        <option key={nanoid()}>Choose a body part:</option>
        {bodyPart.map(part => (
          <option key={nanoid()}>{part.parts}</option>
        ))}
      </select>
      <label htmlFor="input1">Exercise:</label>
      <select value={exercises.value} onChange={handleChange}>
        <option value={'default'}>Choose an exercise</option>
        {exercises.map(exercise => (
          <option key={nanoid()}>{exercise}</option>
        ))}
      </select>
      <ul>
        {plans.map(plan => (
          <li key={nanoid()}>
            {plan}
            <input className="sets-input" type="number" />
          </li>
        ))}
      </ul>
    </StyledForm>
  );
}
