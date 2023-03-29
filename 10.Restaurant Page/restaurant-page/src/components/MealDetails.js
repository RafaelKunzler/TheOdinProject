import styles from './MealDetails.module.css';

const MealDetails = (props) => {
  return (props.trigger) ? (
    <div className={styles.mealDetails}>
        <div className={styles.mealDetails_inner}>
            <img src={props.meal.img} alt={props.meal.name} />
            <h2>{props.meal.name}</h2>
            <p>{props.meal.details}</p>
            <button className={styles.close_btn} onClick={() => props.setTrigger(false)}>X</button>
            {props.children}
        </div>
    </div>
  ) : "";
}

export default MealDetails