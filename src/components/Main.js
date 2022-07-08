import {nanoid} from 'nanoid';
import {useState, useEffect} from 'react';

import data from '../data.json';
import StyledMain from '../style/StyledMain';

export default function Form() {
  const [selectedBodypart, setSelectedBodypart] = useState('');
  const [plans, setPlans] = useState([]);
  const [weeks, setWeeks] = useState(JSON.parse(localStorage.getItem('my_plan')) || []);
  //handlesubmit
  function handleSubmit(event) {
    event.preventDefault();
    saveWeek();
  }
  //setting the day workout
  function createPlan(event) {
    const newPlan = event.target.value;
    setPlans([...plans, {name: newPlan, id: nanoid()}]);
  }
  // workouts store
  useEffect(() => {
    localStorage.setItem('my_plan', JSON.stringify(weeks));
  }, [weeks]);
  //setting the sets
  function updateSets(index, value) {
    setPlans([...plans.slice(0, id), {...plans[id], sets: value}, ...plans.slice(id + 1)]);
  }
  //save multiple workouts
  function saveWeek() {
    const newSet = {exercise: plans, bodyPart: selectedBodypart};
    setWeeks([...weeks, newSet]);
    setPlans([]);
    setSelectedBodypart('');
  }
  //delete day-plan
  function deletMyPlan(id) {
    setWeeks([...weeks.slice(0, id), ...weeks.slice(id + 1)]);
  }
  //filtering data from the json
  const allBodyParts = Object.values(data);
  const filteredExercises = data.find(workout => workout.parts === selectedBodypart)?.exercises;

  return (
    <StyledMain>
      <form onSubmit={handleSubmit}>
        <label htmlFor="input1">Body part</label>
        <select name="input1" value={selectedBodypart} onChange={event => setSelectedBodypart(event.target.value)}>
          <option>Choose a body part:</option>
          {allBodyParts.map(part => (
            <option key={part.id}>{part.parts}</option>
          ))}
        </select>
        {filteredExercises && (
          <>
            <label htmlFor="input2">Exercise:</label>
            <select name="input2" onChange={createPlan}>
              <option value={'default'}>Choose an exercise</option>
              {filteredExercises?.map(exercise => (
                <option key={exercise.id}>{exercise.name}</option>
              ))}
            </select>
          </>
        )}
        <ul>
          {plans.map((plan, index) => (
            <li key={plan.id} className="workout-plan">
              {plan.name}
              <input
                name={'plan' + plan.id}
                className="sets-input"
                min="1"
                type="number"
                onChange={event => updateSets(index, event.target.value)}
              />
            </li>
          ))}
        </ul>
        <button type="submit">button</button>
      </form>
      <div className="weeks-plan">
        {weeks.map((week, index) => (
          <div className="day-plan" key={nanoid()}>
            <h3>{week.bodyPart}</h3>
            <ul>
              {week.exercise.map(workout => (
                <li key={workout.id} className="workout-plan2">
                  {workout.name}: {workout.sets}
                </li>
              ))}
              <button
                className="done-button"
                onClick={() => {
                  deletMyPlan(index);
                }}
              >
                Done
              </button>
            </ul>
          </div>
        ))}
      </div>
    </StyledMain>
  );
}
