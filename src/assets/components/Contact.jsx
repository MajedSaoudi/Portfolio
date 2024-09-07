import React from 'react';
import './Contact.css';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import AOS from 'aos';
import 'aos/dist/aos.css';
function Contact() {

  const[Contact] = useTypewriter ({
    words : ['Contact me',"Let's Get in touch!"],
    typeSpeed:100,
    deleteSpeed:100,
    loop : {},
  });




  return (
    <div className='Contact' id='Contact'>
              <div className='Contact-bck'> 
          <div className='Contact-container'>
            
            <h1>{Contact}</h1>
            <form class="form"  action="https://formspree.io/f/xwpelkdn" method="POST">
            <input type="text" placeholder='First Name' name="first_name" data-aos="zoom-in" required/>
            <input type="text" placeholder='Second Name' name="Second_name" data-aos="zoom-in" required/>
            <input type="email" placeholder='Email' name="email" data-aos="zoom-in" required/>
            <textarea name="" id="" rows="6" Name="Message" placeholder='Write a Message ..' data-aos="zoom-in" required ></textarea>
            <button type='Submit' >Send</button>
            </form>
          </div>
          

         </div>

    </div>
  )
}

export default Contact