import './About.css';
import React ,{ useEffect } from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import AOS from 'aos';
import 'aos/dist/aos.css';

function About  () {


  const[About] = useTypewriter ({
    words : [' Hey ! ,Welcome to my Portfolio!I am a frontend web developer , I am a Mathematics and Computer Science graduate with a specilisation in information systems and software engineering, passionate about Web development, algebra, and applying mathematics to solve complex problems and create innovative solutions. Fluent in English, French, and Arabic, I am eager to utilize my knowledge and expertise to make a positive impact both academically and professionally.'],
    typeSpeed:10,
  });
  

  return (
    <section className='About' id='About'>
       <div className='About-container' >
        <div className='About-info'  data-aos="zoom-in">
       <h1>About me</h1>
       <p >
       {About}
       </p>
       </div>
       </div>
       
         
    </section>
  )
}
export default About;