import {nanoid} from 'nanoid';
import {useState, useEffect} from 'react';
import {toast} from 'react-toastify';

import data from '../data.json';
import StyledMain from '../style/StyledMain';

export default function Form() {
  const [date, setDate] = useState();
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
  function updateSets(index, value, date) {
    setPlans([...plans.slice(0, index), {...plans[index], sets: value, date: date}, ...plans.slice(index + 1)]);
  }
  //save multiple workouts
  function saveWeek() {
    if (plans.length > 0) {
      const newSet = {exercise: plans, bodyPart: selectedBodypart, date: date};
      setWeeks([...weeks, newSet]);
      setPlans([]);
      setSelectedBodypart('');
      setDate('');
      toast.success('Your training is saved!!');
    }
  }
  //delete day-plan
  function deletMyPlan(index) {
    setWeeks([...weeks.slice(0, index), ...weeks.slice(index + 1)]);
    toast.success('DELETED!');
  }
  //filtering data from the json
  const allBodyParts = Object.values(data);
  const filteredExercises = data.find(workout => workout.parts === selectedBodypart)?.exercises;

  //dnd state/function

  return (
    <StyledMain>
      <form onSubmit={handleSubmit}>
        <div className="bodypart-row">
          <label htmlFor="input1">Body part:</label>
          <select name="input1" value={selectedBodypart} onChange={event => setSelectedBodypart(event.target.value)}>
            <option disabled>Choose a body part:</option>
            {allBodyParts.map(part => (
              <option key={part.id}>{part.parts}</option>
            ))}
          </select>
          <label htmlFor="date">Date:</label>
          <input className="date-input" name="date" type="date" onChange={e => setDate(e.target.value)} required />
        </div>
        {filteredExercises && (
          <div className="exercise-row">
            <label htmlFor="input2">Exercise:</label>
            <select name="input2" onChange={createPlan}>
              <option value={'default'} disabled>
                Choose an exercise
              </option>
              {filteredExercises?.map(exercise => (
                <option key={exercise.id}>{exercise.name}</option>
              ))}
            </select>
          </div>
        )}
        <dl className="plan-top">
          {plans.map((plan, index) => (
            <dd key={plan.id} className="workout-plan">
              {plan.name}
              <input
                name={'plan' + plan.id}
                className="sets-input"
                min="1"
                type="number"
                onChange={event => updateSets(index, event.target.value)}
                required
              />
            </dd>
          ))}
        </dl>
        <button type="submit">save</button>
      </form>
      <div className="weeks-plan">
        {weeks.map((week, index) => (
          <div className="workout-block" key={nanoid()}>
            <dl>
              <h4>{week.date}</h4>
              <h3>{week.bodyPart}</h3>
              {week.exercise.map(workout => (
                <dd key={nanoid()}>
                  {workout.name}: {workout.sets}
                </dd>
              ))}
              <button
                className="done-button"
                onClick={() => {
                  deletMyPlan(index);
                }}
              >
                Done
              </button>
            </dl>
          </div>
        ))}
      </div>
    </StyledMain>
  );
}
