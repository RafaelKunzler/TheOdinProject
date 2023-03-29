import styles from './MealCard.module.css';

import MealDetails from './MealDetails';

import { useState } from 'react';

const MealCard = ({meal}) => {    
  const [buttonPopup, setButtonPopup] = useState(false)
  return (    
    <div className={styles.mealCard}> 
        <div>
            <img src={meal.img} alt={meal.name} />
        </div> 
        <div>
            <h2>{meal.name}</h2>
            <h3>${meal.price}</h3>
            <button onClick={() => setButtonPopup(true)}>Details</button>
            <MealDetails meal={meal} trigger={buttonPopup} setTrigger={setButtonPopup}/>            
        </div>          
    </div>
  )
}

export default MealCard