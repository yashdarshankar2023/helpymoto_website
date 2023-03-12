import React from 'react'
import "../styles/footer.css"

const footer = () => {
  return (
    <div className='footer'>
      <div className='footer_container'>
        <div className='footer_text1'>
          <h1>HELPY MOTO PVT.LTD</h1>
          <br/>
          <h3>Our venture is to restore motors all over India in an efficient manner without getting their car to the restore keep and saving their precious time.</h3>
        </div>
        <div className='footer_text2'>
          <h2>Practice Areas</h2>
          <h4>Repairing</h4>
          <h4>Engine</h4>
          <h4>Painting</h4>
          <h4>Body & Tires</h4>
          
        </div>
        <div className='footer_text3'>
          <h2>Useful Links</h2>
          <h4>Your Account</h4>
          <h4>Become a Custombers</h4>
          <h4>View our TOP OFFERS</h4>
          <h4>GET Help</h4>
          
        </div>
        <div className='footer_text4'>
          <h2>Sign up to our newsletter</h2>
          <h4>We will substanically email newsletters to you</h4>
          <div className='input_button'>
            <input/>
            <button id='footer_btn'>Submit</button>
          </div>
        </div>
        
      </div>
      <div className='footer_text5'>
        <h2>Contact Us</h2>
        <h3>Ed Sheeran</h3>
        <h3>Grumpy Old Management LTD.,</h3>
        <h3>PO box 83, 22 Notting Hill Gate,W11 3JE UK</h3>
        <h3>Ed sheran2022@gmail.com</h3>
        <h3>+91 xxxxx xxxxx</h3>
        
      </div>
    </div>
  )
}

export default footer