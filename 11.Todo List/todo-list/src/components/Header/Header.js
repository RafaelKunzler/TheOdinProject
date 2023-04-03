// CSS
import styles from './Header.module.css'

// LOGO
import todo from './check-mark.png'

const Header = () => {
  return (
    <div className={styles.header}>
        <img src={todo} alt="ToDo logo" />
        <h1>ToDo List</h1>
    </div>
  )
}

export default Header