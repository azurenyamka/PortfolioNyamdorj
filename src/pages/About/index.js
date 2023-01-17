import React from 'react';
import styles from './style.module.scss';
import { FaUserNinja } from 'react-icons/fa';


const About = () => {
  return (
    <div className={styles.About}>
      <div className={styles.Header}>
        <h1><FaUserNinja size={35}/>  About <span className={styles.aquared}>Me</span></h1>
      </div>
      <div className={styles.Section}>
        <div className={styles.SectionLeft}>
          <img src='https://i.pinimg.com/474x/36/be/f1/36bef1cf9e5075bd401dab57a8c2e463.jpg'></img>
        </div>
        <div className={styles.SectionRight}></div>
      </div>
  </div>
  )
}

export default About;