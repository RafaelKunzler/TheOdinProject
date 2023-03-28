import { useFetchDocuments } from "../../hooks/useFetchDocument"

const Menu = () => {

  const { documents: meals } = useFetchDocuments("meals")

  console.log(meals)
  return (
    <div>
        <h1>Menu</h1>
        {meals && meals.map((meal) => <p id={meal.id}>{meal.name}</p>)}
    </div>
  )
}

export default Menu