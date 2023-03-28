import styles from './Menu.module.css';

import MealCard from "../../components/MealCard"

import { useFetchDocuments } from "../../hooks/useFetchDocument"

const Menu = () => {

  const { documents: meals } = useFetchDocuments("meals")
  
  return (
    <div className={styles.menu}>
        <h1>Meals</h1>
        <div className={styles.container}>
          {meals && meals.map((meal) => 
            <MealCard key={meal.id} meal={meal}/>
          )}
        </div>
        
    </div>
  )
}

export default Menu