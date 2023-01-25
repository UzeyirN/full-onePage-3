import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <>
      <div className="footer-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <h5 style={{ fontSize: "30px" }}>Mary Byrd</h5>
              <form action="">
                <input className='footer-input' type="text" />
                <button className='footer-send'>Send</button>
              </form>
            </div>
            <div className="col-3">
              <h5 style={{ fontSize: "30px" }}>About</h5>
              <h5>About Us</h5>
              <h5>Our Partners</h5>
              <h5>Our Services</h5>
            </div>
            <div className="col-3">
              <h5 style={{ fontSize: "30px" }}>Contact</h5>
              <h5>Contact Us</h5>
              <h5>FAQ Page</h5>
              <h5>About Me</h5>

            </div>
            <div className="col-3">
              <h5 style={{ fontSize: "30px" }}>Follow Us</h5>

            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Footer