import { NavLink } from "react-router-dom"

import styles from "./NavBar.module.css"

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
        <NavLink to="/" className={styles.brand}>
            Restaurant <span>Page</span>
        </NavLink>
        <ul className={styles.links_list}>
            <li>
                <NavLink to ="/"
                className={({isActive}) => (isActive ? styles.active : '')}>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to ="/menu"
                className={({isActive}) => (isActive ? styles.active : '')}>
                    Menu
                </NavLink>
            </li>
            <li>
                <NavLink to ="/about"
                className={({isActive}) => (isActive ? styles.active : '')}>
                    About
                </NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar