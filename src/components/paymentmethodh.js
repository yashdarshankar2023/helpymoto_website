import React, { useState } from "react";
import "../styles/payment.css"
import { Link } from 'react-router-dom';
import Navbar from './navbar'

const Paymentmethodh = () => {
  const [bgColor1, setBgColor1] = useState(true);
  const [bgColor2, setBgColor2] = useState(true);
  const [bgColor3, setBgColor3] = useState(true);
  const [bgColor4, setBgColor4] = useState(true);
  const [bgColor5, setBgColor5] = useState(true);

  const changeColor1 = () => {setBgColor1(!bgColor1) }
  const changeColor2 = () => {setBgColor2(!bgColor2) }
  const changeColor3 = () => {setBgColor3(!bgColor3) }
  const changeColor4 = () => {setBgColor4(!bgColor4) }

  return (
    <div className='paymentmethodh'>
      
        <h4>Preferred Payment Methods</h4>
        <br/>
        <button className='paymentmethodh_btn' onClick={changeColor1} style={{ background: bgColor1 ? "white" : "#5D5FEF" ,color: bgColor1?"black":"white" ,height:"50px"}}>UPI - Phonepe</button>
        <br/>
        <button className='paymentmethodh_btn' onClick={changeColor2} style={{ background: bgColor2 ? "white" : "#5D5FEF" ,color: bgColor2?"black":"white" ,height:"50px"}}>UPI - Google Pay </button>
        <br/> <br/>
        <h4>Cards, UPI & More</h4>
        <br/>
        <button className='paymentmethodh_btn' onClick={changeColor3} style={{ background: bgColor3 ? "white" : "#5D5FEF" ,color: bgColor3?"black":"white" ,height:"50px"}}>Card</button>
        <br/>
        <button className='paymentmethodh_btn' onClick={changeColor4} style={{ background: bgColor4 ? "white" : "#5D5FEF" ,color: bgColor4?"black":"white" ,height:"50px"}}>UPI - Google Pay </button>
        <br/>
        <button className='paymentmethodh_btn'>Netbanking</button>
        <br/>
        <button className='paymentmethodh_btn'>Wallet </button>
        <br/>
        <button className='paymentmethodh_btn'>Pay Later</button>
        
        <br/> <br/>
        <Link to="/track"><button   className="book_appointment_continue_btn">Continue</button></Link>
        


    </div>
  )
}

export default Paymentmethodh