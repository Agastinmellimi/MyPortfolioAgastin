
import {useEffect} from 'react'
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai'
import {FaFacebook} from 'react-icons/fa'
import {TypeAnimation} from 'react-type-animation'
import AOS from 'aos'

import './index.css'
import 'aos/dist/aos.css';



const Home = () => {
    useEffect(() => {
        AOS.init({duration: 2000});
   }, []);
    return (
    <div className='home-container' id='Home'>
    <div className='profile-container'>
     <div className='profile-content'>
         <h1 className='name' data-aos='fade'><span className='greeting'>Hey!, My Self</span>
         <br/>Agastin</h1>
         <TypeAnimation sequence={[
          'I am Fresher', 1000,
          'Looking for Job', 1000,
          "Open to Work", 1000
         
         ]} wrapper="span"
         speed={55}
         className='anim-text'
         repeat={Infinity}/>
         <p className='bio' data-aos='fade'>
             Passionate MERN Stack Developer, weaving creativity and code to craft seamless digital experiences. Eager to embark on a journey of innovation, learning, and growth. Let's bring ideas to life through elegant and efficient solutions.
         </p>
         <ul className='options-container'>
             <li>
              <a href='https://www.linkedin.com/in/agastin/' target='_blank' className='link' rel="noreferrer"><AiFillLinkedin size={28} /></a>
             </li>
             <li>
             <a href='https://github.com/Agastinmellimi' target='_blank' className='link' rel="noreferrer"><AiFillGithub  size={28}/></a>
             </li>
             <li>
             <a href='https://www.facebook.com/chintu.agastin' target='_blank' className='link' rel="noreferrer"><FaFacebook  size={28}/></a>
             </li>
         </ul>
         
        <a href='https://drive.google.com/file/d/1Ohv7vnGP243r3TT6Ggz_oWlx_aKm8xEM/view?usp=sharing' download='resume' className='link-resume btn-grad' target='_blank' rel='noreferrer'>Resume</a>
         
     </div>
     <img src='https://res.cloudinary.com/dkrpgt9kd/image/upload/v1694491999/unwhjxt3ugorwso8gijj.png' alt='agastin' className='profile'/>
     </div>
   </div>
)
}
export default Home