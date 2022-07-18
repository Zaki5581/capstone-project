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
    labels: ['How the day is going'],

    datasets: [
      {
        label: 'Calories',
        data: [average1],
        backgroundColor: ['#E8C014'],
        borderColor: 'gray',
        borderWidth: 2,
      },
      {
        label: 'Protein',
        data: [average2],
        backgroundColor: ['#A08C59'],
        borderColor: 'gray',
        borderWidth: 2,
      },
      {
        label: 'Carbs',
        data: [average3],
        backgroundColor: ['#FFEFCA'],
        borderColor: 'gray',
        borderWidth: 2,
      },
      {
        label: 'Fat',
        data: [average4],
        backgroundColor: ['#005246'],
        borderColor: 'gray',
        borderWidth: 1,
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
            Kcal
          </li>
          <li>{nutrients.protein}g</li>
          <li>{nutrients.carbs}g</li>
          <li>{nutrients.fat}g</li>
        </ul>
      </div>
      <div className="chart">
        <BarChart chartData={user} />
      </div>
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
