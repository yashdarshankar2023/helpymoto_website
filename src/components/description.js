import React from 'react'
import "../styles/description.css"
import { useSpring, animated } from "react-spring"
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
// import { useInView } from "react-intersection-observer";
// import { useEffect } from "react"



function Number({ n }) {



  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 5,
    config: { mass: 1, tension: 20, friction: 10 },

  });
  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>
}

const description = () => {

  return (
    <div className='description'>
      <br />
      <br />
      <div className='description_container'>
        <div className='description_left'>
          <h1 className='heading'>This got Stuck</h1>
          <h1 className='heading'>Don't worry get a mechanic now.....</h1>



          <Link to="/hire"><button id='home_description_btn'>Hire Now</button></Link>


        </div>
        <div className='description_right'>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTPUXiVpF954YAeB4DplFMigqLwO7BA9B3_A&usqp=CAU' id='car' alt='car' />
        </div>

      </div>






      <div className='numbers'>
        <div className='num1'>
          <h2><Number n={18000} />+</h2>
          <h4>No. of service Done</h4>
        </div>
        <div className='num1'>
          <h2><Number n={5000} />+</h2>
          <h4>Mechanics Hired</h4>
        </div>
        <div className='num1'>
          <h2><Number n={4000} />+</h2>
          <h4>Drivers Hired</h4>
        </div>
        <div className='num1'>
          <h2><Number n={19000} />+</h2>
          <h4>PlayStore Downloads</h4>
        </div>





      </div>
      <div className='services'>
        <h1>Our Best Services</h1>
        <div className='cards_description'>
          <motion.div animate={{ x: 150 }} transition={{ duration: 2 }} ><div className='card'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmMJ1BAv6dT7YfdXwYnQgelplMAlllSM7WTg&usqp=CAU' alt='card' />
            General Maintanence
          </div></motion.div>
          <motion.div animate={{ x: 450 }} transition={{ duration: 2 }}><div className='card'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWq5_ohoKJZqLeCP5YRA-2nFM9fqIojyx2SQ&usqp=CAU' alt='card' />
            Emergency service</div></motion.div>
          <motion.div animate={{ x: 750 }} transition={{ duration: 2 }}><div className='card'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSbKomBYLkSeD-Xl0159tcAx6Fu1lixWf9Gg&usqp=CAU' alt='card' />
            Towing service</div></motion.div>
          <motion.div animate={{ x: 1050 }} transition={{ duration: 2 }}><div className='card'>
            <img src='data:image/jpeg;base64,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' />
            HM Store</div></motion.div>



        </div>
        <br />
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

        <hr />
        <br /><br /><br /><br />
      </div>


    </div>

  )
}

export default description