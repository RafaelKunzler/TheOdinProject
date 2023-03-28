import { useNavigate } from 'react-router-dom'
import styles from './Home.module.css'

const Home = () => {

  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/menu")
  }

  return (
    <div className={styles.home}>
        <div>
          <p>Discover Brazilian food</p>
          <h2>Eat the best cousine Brazil has to offer</h2>
          <button onClick={handleClick}>Discover Menu</button>
        </div>
        <img src='https://img.freepik.com/fotos-gratis/arranjo-de-comida-brasileira-de-alto-angulo_23-2148725054.jpg' alt="Brazilian meals"></img>        
    </div>
  )
}

export default Home