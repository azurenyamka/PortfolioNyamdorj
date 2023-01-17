import styles from './style.module.scss';
import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from "framer-motion";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom';
const NavbarMenu = () => {
  return (
    <div className={styles.container}>
      <motion.div 
      initial={{y: -250}}
      animate={{y:-70}}
      transition={{duration: 2}}
      ><Navbar bg="dark" expand="lg" fixed='top'>
        <Container>
          <Navbar.Brand><SocialIcon network='github'bgColor='rgb(255, 123, 0)'/> <Link to='/'>Nyamdorj</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
            </Nav>
            <Nav className={styles.menu}>
              <Nav.Link><Link to='/'>Home</Link></Nav.Link>
              <Nav.Link><Link to='/about'>About</Link></Nav.Link>
              <Nav.Link><Link to='/skills'>Skills</Link></Nav.Link>
              <Nav.Link><Link to='/project'>Project</Link></Nav.Link>
              <Nav.Link><Link to='/contact'>Contact</Link></Nav.Link>
            </Nav>
         </Navbar.Collapse>
         </Container>
      </Navbar>
      </motion.div>
    </div>
  )
}

export default NavbarMenu;

{/* <motion.div 
initial={{y: -250}}
animate={{y:0}}
transition={{duration: 1}}
>
 <SocialIcon network='instagram' bgColor='black' fgColor='aqua' className='App-logo'/>
 <SocialIcon network='facebook' bgColor='black' fgColor='aqua' className='App-logo'/>
 <SocialIcon network='discord' bgColor='black' fgColor='aqua' className='App-logo'/>
 <SocialIcon network='youtube' bgColor='black' fgColor='aqua' className='App-logo'/>
</motion.div>
<h1 style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }}>
   Life is simple{' '}
   <span style={{ color: 'red', fontWeight: 'bold' }}>
     <Typewriter
      words={['Work out','Eat healthy','Sleep early','Concentrate on your work!']} loop={false}
     />
   </span>
 </h1> */}