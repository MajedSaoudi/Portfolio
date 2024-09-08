
import './Projects.css'
import html from '../images/html.png';
import css from '../images/css.png';
import js from '../images/js.png';
import php from '../images/php_PNG23.png';
import sql from '../images/sql.png';
import react from '../images/react.png';
import restau from '../images/project1.png';
import egym from '../images/gymm.jpeg';
import logo from '../images/Portfoliod.PNG';
import githubz from '../images/githubw.png';
import demo from '../images/demo.png';
import React ,{ useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
function Projects() {

  
    useEffect(() => {
      AOS.init(
        {duration:500}
      );
    },[]);
  



  return (
    <div className='Projects' id='Projects'>
  <div className="projects-container">
   <div className="title"><h1 className="title-head" data-aos="fade-down">My Projects</h1>
    <div className="PROJECTS">



   <div className="projects" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-delay="0">
    <img src={restau} alt="" />
    <div className="pro-par">
    <h2>Univ Canteen</h2>
    <p>Our Site streamlines the dining experience by allowing students and staff to reserve meals and seating.</p>
    <h1>Tools</h1>
     <div className='tools'>
     <img src={html} alt="" />
     <img src={css} alt="" />
     <img src={js} alt="" />
     <img src={php} alt="" />
     <img src={sql} alt="" />
     </div>
     <h1>See demo</h1>
     <div className='Live-demo'>
     <a href="https://github.com/MajedSaoudi/University-Restaurant" target="_blank"><img src={githubz} alt="" /></a>
     <a href="http://universityrestaurant.free.nf/home.php" target="_blank"><img src={demo} alt="" /></a>
     </div>
    </div>
   </div>


   <div className="projects" data-aos="fade-up"
   data-aos-anchor-placement="bottom-bottom"
   data-aos-delay="200">
     <a href=""><img src={logo} alt="" /></a>
     <div className="pro-par">
  
     <h2>Portfolio</h2>
     <p>Welcome to my portfolio, a showcase of my creative journey and professional expertise.</p>
     <h1>Tools</h1>
     <div className='tools'>
     <img src={react} alt="" />
   
     </div>
     <h1>See demo</h1>
     <div className='Live-demo'>
     <a href="https://github.com/MajedSaoudi/Portfolio" target="_blank"><img src={githubz} alt="" /></a>
     <a href="https://majedsaoudi.github.io/Portfolio/" target="_blank"><img src={demo} alt="" /></a>
     </div>
    </div>
    
  </div>


  <div className="projects" data-aos="fade-up"
data-aos-anchor-placement="bottom-bottom"
data-aos-delay="400"
  >
    <img src={egym} alt="" /> 
     <div className="pro-par">
     <h2>EGym</h2>
     <p>EGym's website is a comprehensive platform designed to inspire and inform visitors about their fitness journey. </p>
     <h1>Tools</h1>
     <div className='tools'>
     <img src={react} alt="" />
   
     </div>
    <h1>See demo</h1>
     <div className='Live-demo'>
     <a href="https://github.com/MajedSaoudi/EGym" target="_blank"><img src={githubz} alt="" /></a>
     <a href="https://majedsaoudi.github.io/EGym/" target="_blank"><img src={demo} alt="" /></a>
     </div>

    </div>
    
  </div>


   </div>
 
  </div>


    </div>
    </div>
  )
}

export default Projects