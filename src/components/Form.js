import {useState} from 'react';

import StyledForm from '../style/StyledForm';

import {Workouts} from './db';

export default function Form() {
  const [plans, setPlans] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleChange(event) {
    const newExercise = event.target.value;
    setPlans([...plans, newExercise]);
  }

  const Exercise = Workouts[0].exercise;
  return (
    <StyledForm onSubmit={handleSubmit}>
      <label htmlFor="input1">Exercise:</label>
      <select value={Exercise.value} onChange={handleChange}>
        {Exercise.map(workout => (
          <option key={workout.id}>{workout}</option>
        ))}
      </select>
      <ul>
        {plans.map(plan => (
          <li key={Workouts.id}>
            {plan}
            <input className="setsInput" type="number" />
          </li>
        ))}
      </ul>
    </StyledForm>
  );
}
