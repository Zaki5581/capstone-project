import {nanoid} from 'nanoid';
import {useState} from 'react';

import data from '../data.json';
import StyledForm from '../style/StyledForm';

export default function Form() {
  const [plans, setPlans] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleChange(event) {
    const newExercise = event.target.value;
    setPlans([...plans, newExercise]);
  }

  const exercises = data[0].exercise;
  return (
    <StyledForm onSubmit={handleSubmit}>
      <label htmlFor="input1">Exercise:</label>
      <select value={exercises.value} onChange={handleChange}>
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
