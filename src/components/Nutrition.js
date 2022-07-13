import {nanoid} from 'nanoid';
import {useState, useEffect} from 'react';

import bau from '../images/icons8-arbeit-80.png';
import StyledNutrition from '../style/StyledNutrition';

//setting nutrients goals
export default function Nutrition() {
  const [nutrients, setNutrients] = useState(JSON.parse(localStorage.getItem('my_goal')) || []);
  //setting taken nutrients
  const [takenNutrients, setTakenNutrients] = useState(JSON.parse(localStorage.getItem('my_real')) || []);
  //storing the goal nutrients & the really taken nutrients
  useEffect(() => {
    localStorage.setItem('my_goal', JSON.stringify(nutrients));
    localStorage.setItem('my_real', JSON.stringify(takenNutrients));
  }, [nutrients, takenNutrients]);
  //reste functions

  function deleteGoal() {
    setNutrients('');
  }
  function deleteReal() {
    setTakenNutrients('');
  }
  //show nutrients goal
  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setNutrients({...nutrients, [name]: value});
  }
  //show taken nutrients
  function handleSecondChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setTakenNutrients({...takenNutrients, [name]: value});
  }

  // function showTakenNutrients() {

  // }
  function handleSubmit(event) {
    event.preventDefault();
    event.target.reset();
  }
  return (
    <StyledNutrition onSubmit={handleSubmit}>
      <div className="input-field1">
        <div className="input-block1">
          <input type="number" name="calories" onChange={handleChange} />
          <input type="number" name="protein" onChange={handleChange} />
          <input type="number" name="carbs" onChange={handleChange} />
          <input type="number" name="fat" onChange={handleChange} />
        </div>
        <button onClick={deleteGoal}>Reset</button>
        <ul key={nanoid()}>
          <li>
            {nutrients.calories}
            <bold>Kcal</bold>
          </li>
          <li>
            {nutrients.protein}
            <bold>g</bold>
          </li>
          <li>
            {nutrients.carbs}
            <bold>g</bold>
          </li>
          <li>
            {nutrients.fat}
            <bold>g</bold>
          </li>
        </ul>
      </div>
      <section>
        <img src={bau} alt="bau" />
      </section>
      <div className="input-field2">
        <ul key={nanoid()}>
          <li>{takenNutrients.takenCalories}</li>
          <li>{takenNutrients.takenProtein}</li>
          <li>{takenNutrients.takenCarbs}</li>
          <li>{takenNutrients.takenFat}</li>
        </ul>
        <div className="input-block1">
          <input type="number" name="takenCalories" onChange={handleSecondChange} />
          <input type="number" name="takenProtein" onChange={handleSecondChange} />
          <input type="number" name="takenCarbs" onChange={handleSecondChange} />
          <input type="number" name="takenFat" onChange={handleSecondChange} />
          <button onClick={deleteReal}>Delete</button>
        </div>
      </div>
    </StyledNutrition>
  );
}
