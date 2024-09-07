import React from 'react';
import './Footer.css';
import linkedin from '../images/linkedin.png';
import github from '../images/github.png';
import instagram from '../images/instagram.png';
import gmail from '../images/email.png';
function Footer() {
  return (
    <div className='Footer'>
       <div>
      <h4> copyright (©) 2024-2025</h4>
    </div>
      <div className="home-add">
        <a href="https://www.linkedin.com/in/majedsaoudi/" target="_blank"> <img src={linkedin} alt="" /></a>
        <a href="https://github.com/MajedSaoudi" target="_blank"> <img src={github} alt="" /></a>
        <a href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRttWWmmKgsFTNzwLclgKxhFVHhSFcvQGLWMvGPKvJSDvswmHMqpbTwVLHzpDJvXxwDtDSV" target="_blank"> <img src={gmail} alt="" /></a>
        <a href="https://www.instagram.com/abdelmadjed_saoudi/" target="_blank"> <img src={instagram}alt="" /></a>
      </div>
   <h4>Designed by Majed Saoudi</h4>
    </div>
  )
}

export default Footer