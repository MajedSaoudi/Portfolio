import React from 'react';
import './Home.css';
import linkedin from '../images/linkedin.png';
import github from '../images/github.png';
import gmail from '../images/email.png';
import mypicture from '../images/ChatGPT Image May 21, 2025, 11_52_05 PM (1).jpg';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { Link } from 'react-scroll';
export const Home = () => {

const[text] = useTypewriter ({
  words : ['Junior frontend software developer'],
  typeSpeed: 50,
});

  return (
    <div className='Home' id='Home'>
             <div className='Home-container'>
               <div className='Home-info'>
                 <div className='home-par'>
                 <h2>Hi it's </h2>
                 <h1>Majed </h1> 
                 <h2>I'm a <span style={{fontfamily: 'Arial, Helvetica, sans-serif', fontSize:'25px', color:'cyan'}}> {text} </span> <span style={{color : 'cyan'}}></span></h2>
                 </div>
 

                 <div className='home-add'>
                 <a href="https://www.linkedin.com/in/majedsaoudi/" target="_blank"> <img src={linkedin} alt="" /></a>
              <a href="https://github.com/MajedSaoudi" target="_blank"> <img src={github} alt="" /></a>
              <a href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRttWWmmKgsFTNzwLclgKxhFVHhSFcvQGLWMvGPKvJSDvswmHMqpbTwVLHzpDJvXxwDtDSV" target="_blank"> <img src={gmail} alt="" /></a>
                 </div>
               
                 <div className='btn-group'>
                 <Link className="btn" to='Contact' spy={true} smooth={true} duration={500}>Contact</Link>
                 </div>

               </div>


                   <div className="pro-img"> 
                   <Link to="About" spy={true} smooth={true} duration={500}><img src={mypicture} alt="" /></Link>
                   </div>


             </div>
    </div>
  )
}
export default Home;
