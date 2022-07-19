import {nanoid} from 'nanoid';
import {useState, useEffect} from 'react';
import {toast} from 'react-toastify';

import StyledNutrition from '../style/StyledNutrition';

import BarChart from './charts/BarChart';

export default function Nutrition() {
  const [nutrients, setNutrients] = useState(JSON.parse(localStorage.getItem('my_goal')) || []);
  //setting taken nutrients
  const [takenNutrients, setTakenNutrients] = useState(JSON.parse(localStorage.getItem('my_real')) || []);
  //storing the goal nutrients & the really taken nutrients
  useEffect(() => {
    localStorage.setItem('my_goal', JSON.stringify(nutrients));
    localStorage.setItem('my_real', JSON.stringify(takenNutrients));
  }, [nutrients, takenNutrients]);
  //getting the values for the chart
  const Nutrients = Array.of(nutrients);
  const TakenNutrients = Array.of(takenNutrients);
  const average1 = TakenNutrients[0].takenCalories / Nutrients[0].calories;
  const average2 = TakenNutrients[0].takenProtein / Nutrients[0].protein;
  const average3 = TakenNutrients[0].takenCarbs / Nutrients[0].carbs;
  const average4 = TakenNutrients[0].takenFat / Nutrients[0].fat;
  //setting the chart data
  const user = {
    labels: ['Average intake'],

    datasets: [
      {
        label: 'Calories',
        data: [average1],
        backgroundColor: ['#E8C014'],
        borderColor: '#000030',
        borderWidth: 0.5,
      },
      {
        label: 'Protein',
        data: [average2],
        backgroundColor: ['#A08C59'],
        borderColor: '#000030',
        borderWidth: 0.5,
      },
      {
        label: 'Carbs',
        data: [average3],
        backgroundColor: ['#FFEFCA'],
        borderColor: '#000030',
        borderWidth: 0.5,
      },
      {
        label: 'Fat',
        data: [average4],
        backgroundColor: ['#005246'],
        borderColor: '#000030',
        borderWidth: 0.5,
      },
    ],
  };

  //reset functions
  function deleteGoal() {
    setNutrients('');
    toast.success('Deleted!!Set new nutrients goals!!');
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

  function handleSubmit(event) {
    event.preventDefault();
    event.target.reset();
  }
  return (
    <StyledNutrition onSubmit={handleSubmit}>
      <div>
        <div className="input-block">
          <input type="number" name="calories" onChange={handleChange} placeholder="Calories" />
          <input type="number" name="protein" onChange={handleChange} placeholder="Protein" />
          <input type="number" name="carbs" onChange={handleChange} placeholder="Carbs" />
          <input type="number" name="fat" onChange={handleChange} placeholder="Fat" />
        </div>
        <small>Your setted Nutrients Goal!</small>
        <ul key={nanoid()}>
          <li>
            {nutrients.calories}
            Kcal
          </li>
          <li>{nutrients.protein}g</li>
          <li>{nutrients.carbs}g</li>
          <li>{nutrients.fat}g</li>
        </ul>
        <button onClick={deleteGoal}>Reset</button>
      </div>
      <div className="chart">
        <BarChart chartData={user} />
      </div>
      <div>
        <button onClick={deleteReal}>Delete</button>
        <ul key={nanoid()}>
          <li>{takenNutrients.takenCalories}Kcal</li>
          <li>{takenNutrients.takenProtein}g</li>
          <li>{takenNutrients.takenCarbs}g</li>
          <li>{takenNutrients.takenFat}g</li>
        </ul>
        <small>current intake</small>
        <div className="input-block">
          <input type="number" name="takenCalories" onChange={handleSecondChange} placeholder="Calories" />
          <input type="number" name="takenProtein" onChange={handleSecondChange} placeholder="Protein" />
          <input type="number" name="takenCarbs" onChange={handleSecondChange} placeholder="Carbs" />
          <input type="number" name="takenFat" onChange={handleSecondChange} placeholder="Fat" />
        </div>
      </div>
    </StyledNutrition>
  );
}
