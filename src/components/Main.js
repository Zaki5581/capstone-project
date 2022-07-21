import {motion} from 'framer-motion';
import {nanoid} from 'nanoid';
import {useState, useEffect} from 'react';
import {Slide} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
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
    setPlans([...plans.slice(0, index), {...plans[index], sets: value, date}, ...plans.slice(index + 1)]);
  }
  //save multiple workouts
  function saveWeek() {
    if (plans.length > 0) {
      const newSet = {exercise: plans, bodyPart: selectedBodypart, date};
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

  //slider
  const slideImages = [
    {
      url: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1375&q=80',
      caption: '',
    },
    {
      url: 'https://images.unsplash.com/photo-1590239926044-4131f5d0654d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1582&q=80',
      caption: '',
    },
    {
      url: 'https://images.unsplash.com/photo-1604233098531-90b71b1b17a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      caption: '',
    },
    {
      url: 'https://images.unsplash.com/photo-1542684377-0b875fde9563?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTM2fHxneW18ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
      caption: '',
    },
  ];
  //workout box animation
  const boxAnimation = {
    initial: {y: '-100%', opacity: 0, scale: 0.1},
    animate: {y: '0', opacity: 1, scale: 1},
    exit: {
      x: '50%',
      y: '-100%',
      opacity: 0,
      transition: {duration: 0.5},
    },
    transition: {duration: 0.5, ease: 'easeOut'},
  };

  return (
    <StyledMain>
      <form onSubmit={handleSubmit}>
        <div className="bodypart-row">
          <div className="group1">
            <label htmlFor="input1">Body part</label>
            <select name="input1" value={selectedBodypart} onChange={event => setSelectedBodypart(event.target.value)}>
              <option disabled>Choose a body part:</option>
              {allBodyParts.map(part => (
                <option key={part.id}>{part.parts}</option>
              ))}
            </select>
          </div>
          <div className="group2">
            <label htmlFor="date">Date</label>
            <input className="date-input" name="date" type="date" onChange={e => setDate(e.target.value)} required />
          </div>
        </div>
        {filteredExercises && (
          <div className="exercise-row">
            <label htmlFor="input2">Exercise</label>
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
          {filteredExercises && (
            <button className="set-button" type="submit">
              save
            </button>
          )}
        </dl>
      </form>
      {!filteredExercises && (
        <div className="slide-container">
          <Slide>
            {slideImages.map((slideImage, index) => (
              <div className="each-slide" key={index}>
                <div
                  style={{
                    backgroundImage: `url(${slideImage.url})`,
                    backgroundPosition: 'center 100%',
                    backgroundSize: 'cover',
                    height: '13rem',
                  }}
                >
                  <span>{slideImage.caption}</span>
                </div>
              </div>
            ))}
          </Slide>
        </div>
      )}

      <div className="weeks-plan">
        {weeks.map((week, index) => (
          <div className="workout-block" key={nanoid()}>
            {!filteredExercises && (
              <motion.dl {...boxAnimation} className="plan-bottom">
                <h4>{week.date}</h4>
                <h3>{week.bodyPart}</h3>
                {week.exercise.map(workout => (
                  <dd key={nanoid()}>
                    {workout.name} <p>{workout.sets}Sets</p>{' '}
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
              </motion.dl>
            )}
          </div>
        ))}
      </div>
    </StyledMain>
  );
}
