import './About.css';
import React ,{ useEffect } from 'react';



function About  () {

 useEffect(() => {
      const about = document.querySelectorAll('.About-info');
  
      
        const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.style.animation = 'fadeup 0.6s ease forwards';
              observer.unobserve(entry.target);
            }
          });
        }, {
          threshold: 0,
        });
  
        about.forEach(about => observer.observe(about));
   
    }, []);

  

  return (
    <section className='About' id='About'>
       <div className='About-container' >
        <div className='About-info'  >
       <h1>About me</h1>
       <div className='aboutme-par'>
       <h4 >
       Hey ! ,Welcome to my Portfolio!I am a frontend web developer , I am a Mathematics and Computer Science graduate with a specilisation in information systems and software engineering, passionate about Web development, algebra, and applying mathematics to solve complex problems and create innovative solutions. Fluent in English, French, and Arabic, I am eager to utilize my knowledge and expertise to make a positive impact both academically and professionally.
       </h4>
       </div>
       </div>
       </div>
       
         
    </section>
  )
}
export default About;