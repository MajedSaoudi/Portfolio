import './Navbar.css';
import burger from '../images/clipart365828.png';
import {Link} from 'react-scroll';
import { useState } from 'react';
import close from '../images/close.png';


const closetag = {
    display:'block',

}
const menubar ={
   display:'none',
}


function Navbar(){
 
  const [isOpen , setisOpen] = useState(false);
  const handleLinkClick = () => {
    setisOpen(!isOpen);
  };

 

    return(
         
    <div className="Nav-bar">
     <div className="Nav-bar-container"> 
      
          <Link to="Home" spy={true} smooth={true} duration={500}><h1 className='Logo'>&lt; Majed <span> /&gt;</span> </h1></Link>
         
         
          <nav>
             <input type="checkbox" id="check" />
          <label for="check" class="checkbtn">
          <img src={burger} alt="" className='burger' onClick={() => setisOpen(!isOpen)} style={
            isOpen? menubar : closetag
          }/>
          <img src={close} alt="" className='close-png'onClick={() => setisOpen(!isOpen)} style={
            !isOpen? null: closetag
          }/> 
          </label>
          <ul className='nav-ul' style={{
            right: isOpen? '0' : '-200%',
            
          }}>
           <li className='nav-li' ><Link to="Home" className="nav-a" spy={true} smooth={true} duration={500} onClick={() => setisOpen(!isOpen)}>Home</Link></li>
           <li className='nav-li' ><Link to='About' onClick={() => setisOpen(!isOpen)} className="nav-a" spy={true} smooth={true}  duration={500}> ABOUT</Link></li>
           <li className='nav-li' ><Link to="Projects" onClick={() => setisOpen(!isOpen)} className="nav-a" spy={true} smooth={true} duration={500}>PROJECTS</Link></li>
           <li className='nav-li' ><Link to="Contact" onClick={() => setisOpen(!isOpen)} className="nav-a" spy={true} smooth={true} duration={500} >CONTACT</Link></li>
           </ul>
           <div className='scroll-watcher'></div>
           </nav>
           
        </div>
        </div>
      
        );
}

export default Navbar;