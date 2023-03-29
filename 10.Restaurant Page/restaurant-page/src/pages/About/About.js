import styles from './About.module.css'
import githubPic from './github.png'
import linkedinPic from './linkedin.png'

const About = () => {
  return (
    <div className={styles.about}>
        <h1>Restaurant Page Project</h1>
        <h3>Restaurant Page is a task from The Odin Project, made by Rafael Rodrigues</h3>
        <p>This project was made with React for the front-end and Firebase on the back-end</p>
        <div className={styles.logoContainer}>
          <a href="https://github.com/RafaelKunzler/TheOdinProject/tree/main/10.Restaurant%20Page/restaurant-page" target="_blank">
            <img src={githubPic} alt="github logo" />
          </a>        
          <a href="https://www.linkedin.com/in/rafael-rodrigues-do-patroc%C3%ADnio-nunes-3984921a2/" target="_blank"> 
            <img src={linkedinPic} alt="Linkedin logo" />
          </a>
        </div>
        
    </div>
  )
}

export default About