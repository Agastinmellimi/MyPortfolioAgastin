import {useEffect} from 'react'

import AOS from 'aos'

import './index.css'
import 'aos/dist/aos.css';

const About = () => {
    useEffect(() => {
        AOS.init({duration: 2000});
   }, []);
    return (
    <div className='about-container' id='About'>
            <h1 className='about-heading' data-aos='flip-down'>About Me</h1>
            <ul className='about-points-container'>
                <li className='points'>
                    Welcome to my portfolio! I am Agastin Mellimi, I passionate about web Developer from India.
                    I have Bachelor's degree in the stream of Civil Engineering. 
                    After my graduation I joined in Nxtwave ccbp intensive program to develop skills regarding frontend and backend technologies
                </li>
                <li className='points'>
                    I have hands on experience with technologies like HTML, CSS, JavaScript, Python, SQL (MySQL) for Database Management, React Js, Node Js, Express Js.
                </li>
                <li className='points'>
                    I am excited about the opportunity to work on diverse projects and contribute to the success of businesses through my Web development skills. If you have an idea or
                    project in mind, let's connect and disscuss how we can bring it to life.
                </li>
                
                <li className='points'>
                Thank you for visiting my portfolio. I look forward to the possibility of working together and creating exceptional web experiences.
                </li>
            </ul>
    </div>
)
}
export default About