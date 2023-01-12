import React from 'react';
import styles from './style.module.scss';
import { SocialIcon } from 'react-social-icons';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from "framer-motion";
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";


const Hero = () => {
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
}, []);
  const particlesLoaded = useCallback(async container => {
  await console.log(container);
}, []);
  return (
    <div className={styles.container}>
      <div className={styles.containerItem}>
      <motion.div 
        initial={{x: -500}}
        animate={{x:2}}
        transition={{duration: 2}}>
        <h1>Hi Bitches,</h1>
        <h1>I'm Nyamdorj <span>Ochirsukh</span></h1>
        <h3>I'm into <span><Typewriter words={['Web Development.','Gaming.','Streaming.','Balling.']} loop={false}/> </span></h3>
        <SocialIcon network='instagram' bgColor='black' fgColor='aqua' className='App-logo'/>
        <SocialIcon network='facebook' bgColor='black' fgColor='aqua' className='App-logo'/>
        <SocialIcon network='discord' bgColor='black' fgColor='aqua' className='App-logo'/>
        <SocialIcon network='youtube' bgColor='black' fgColor='aqua' className='App-logo'/>
      </motion.div>
      </div>
      <div className={styles.containerItem}>
        <div className={styles.containerItemImg}>
        <motion.div 
        initial={{x: 1000}}
        animate={{x:1}}
        transition={{duration: 3}}>
          <img src='https://i.pinimg.com/564x/42/60/a8/4260a887e48489127f6a1a10804b879e.jpg'></img>
        </motion.div>
        </div>
      </div>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#00FFFF",
            },
            links: {
              color: "#00FFFF",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              directions: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 3,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />

    </div>
  )
}

export default Hero;