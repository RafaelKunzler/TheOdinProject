import styles from './MealCard.module.css';

const MealCard = ({meal}) => {    
  return (    
    <div className={styles.mealCard}> 
        <div>
            <img src={meal.img} alt={meal.name} />
        </div> 
        <div>
            <h2>{meal.name}</h2>
            <h3>${meal.price}</h3>
            <button>Details</button>
        </div>          
    </div>
  )
}

export default MealCard