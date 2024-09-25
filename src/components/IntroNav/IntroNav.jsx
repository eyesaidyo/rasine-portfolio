import { AviWrap, IntroWrapper } from "./IntroNavStyles"
import { Outlet } from 'react-router-dom'
import Avi from '../../assets/rajon.jpg'
import { Link } from 'react-router-dom'
import { ReactComponent as GithubIcon } from '../../assets/github.svg'
import { ReactComponent as TwitterXIcon } from '../../assets/twitterx.svg'
import { ReactComponent as LinkedInIcon } from '../../assets/linkedin.svg'
import { ReactComponent as Ham } from '../../assets/bars-solid.svg'
import { useLocation } from 'react-router-dom'
import { motion } from "framer-motion"
import { useState, useEffect } from "react"


export const IntroComponent = () => {
  const location = useLocation()
  const isHome = location.pathname === '/'
  return <IntroWrapper isHome={isHome}>
    <div className="ham">
      <Ham className='ham-icon' />
    </div>
    {/* <TypingAnimation /> */}
    <div>

      <AviWrap src={Avi} />

      <motion.h1 initial={{ x: '-100vw' }} // Starting off-screen
        animate={{ x: 0 }}        // Sliding to the original position
        transition={{ type: 'keyframes', stiffness: 50, duration: 0.5 }} // Smooth spring effect
      >
        Hey, my name is Rasine. <motion.span animate={{
          rotate: [0, -30, 0, 30, 0], // Keyframes for rotation: left (-30deg), right (30deg)
        }}
          transition={{
            duration: 2, // Animation duration (2 seconds)
            ease: "easeInOut", // Easing function
            repeat: Infinity, // Loop the animation
          }}
          style={{
            display: 'inline-block', // Ensure the element is inline for rotation
            fontSize: '2rem',          // You can adjust the element's dimensions
            // height: '100px',
            // backgroundColor: 'lightblue', // Background color to make the element visible
          }}>👋</motion.span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{
          opacity: 1, y: 100, transition: {
            duration: 0.9
          }
        }}
        transition={{ type: 'keyframes', stiffness: 50, duration: 2 }}
      >
        I'm a front-end developer using web technologies to create accessible, interactive interfaces for the end user.

      </motion.p>
    </div>
    <div>

      <motion.p whileHover={{ scale: 2.2 }}><Link className="my-link" to='projects'>Projects</Link></motion.p>
      <motion.p whileHover={{ scale: 2.2 }}><Link className="my-link" to='/articles'>Articles</Link></motion.p>
      <motion.a whileHover={{ scale: 1.2 }} style={{ display: 'inline-block' }} href="https://github.com/eyesaidyo"><GithubIcon className='icon' /></motion.a>
      <motion.a whileHover={{ scale: 1.2 }} style={{ display: 'inline-block' }} href="https://x.com/rasine_era"><TwitterXIcon className='icon' /></motion.a>
      <motion.a whileHover={{ scale: 1.2 }} style={{ display: 'inline-block' }} href="https://www.linkedin.com/in/johnirem/"><LinkedInIcon className='icon' /></motion.a>
    </div>
  </IntroWrapper>
}
const IntroNav = () => {
  return (
    <>
      <IntroComponent />
      <Outlet className='other' />
    </>

  )
}
export default IntroNav