import {nanoid} from 'nanoid';
import {useState} from 'react';
import StyledNutrition from '../style/StyledNutrition';

//setting nutrients goals
export default function Nutrition() {
  const [nutrients, setNutrients] = useState({
    calories: '',
    protein: '',
    carbs: '',
    fat: '',
  });
  //setting taken nutrients
  const [takenNutrients, setTakenNutrients] = useState({
    takenCalories: '',
    takenProtein: '',
    takenCarbs: '',
    takenFat: '',
  });
  //show nutrients goal
  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setNutrients({...nutrients, [name]: [value]});
  }
  //show taken nutrients
  function handleSecondChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setTakenNutrients({...takenNutrients, [name]: [value]});
  }
  //state for all nutrients/goal/taken
  const [text, setText] = useState('');
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [text3, setText3] = useState('');
  const [text4, setText4] = useState('');
  const [text5, setText5] = useState('');
  const [text6, setText6] = useState('');
  const [text7, setText7] = useState('');

  function showNutrients() {
    setText(nutrients.calories);
    setText1(nutrients.protein);
    setText2(nutrients.carbs);
    setText3(nutrients.fat);
  }
  function showTakenNutrients() {
    setText4(takenNutrients.takenCalories);
    setText5(takenNutrients.takenProtein);
    setText6(takenNutrients.takenCarbs);
    setText7(takenNutrients.takenFat);
  }
  function handleSubmit(event) {
    event.preventDefault();
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
        <button onClick={showNutrients}>Button</button>
        <ul key={nanoid()}>
          <li>{text}</li>
          <li>{text1}</li>
          <li>{text2}</li>
          <li>{text3}</li>
        </ul>
      </div>
      <div className="input-field2">
        <ul key={nanoid()}>
          <li>{text4}</li>
          <li>{text5}</li>
          <li>{text6}</li>
          <li>{text7}</li>
        </ul>
        <div className="input-block1">
          <input type="number" name="takenCalories" onChange={handleSecondChange} />
          <input type="number" name="takenProtein" onChange={handleSecondChange} />
          <input type="number" name="takenCarbs" onChange={handleSecondChange} />
          <input type="number" name="takenFat" onChange={handleSecondChange} />
        </div>
        <button onClick={showTakenNutrients}>Button</button>
      </div>
    </StyledNutrition>
  );
}
