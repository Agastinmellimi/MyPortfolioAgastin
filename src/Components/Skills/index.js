import {useEffect} from 'react'

import AOS from 'aos'

import 'aos/dist/aos.css';
import './index.css'

const technologiesImages = [
    {text: 'HTML', url: 'https://res.cloudinary.com/dkrpgt9kd/image/upload/v1692002372/evzlvnnfowrodvd43mhg.png'},
    {text: 'CSS', url: 'https://res.cloudinary.com/dkrpgt9kd/image/upload/v1692002447/zachyui35vvposrmz8sq.png'},
    {text: 'JavaScript', url: 'https://res.cloudinary.com/dkrpgt9kd/image/upload/v1692002372/dgikgjwu6qhllh6y1pkk.png'},
    {text: 'Bootstrap', url: 'https://res.cloudinary.com/dkrpgt9kd/image/upload/v1692002372/tbuxgzh53g7aidhc6gbp.png'},
    {text: 'Python', url: 'https://res.cloudinary.com/dkrpgt9kd/image/upload/v1692002371/amh149fmhefvdclxkm6y.png'},
    {text: 'MySql', url: 'https://res.cloudinary.com/dkrpgt9kd/image/upload/v1692001926/j9tjlzwxk8s5qpbjodji.png'},
    {text: 'React Js', url: 'https://res.cloudinary.com/dkrpgt9kd/image/upload/v1692002374/kkzxtgjhqke1u0vidusi.png'},
    {text: 'Node Js', url: 'https://res.cloudinary.com/dkrpgt9kd/image/upload/v1692004157/i0407hgohrtjbzkuwjdx.png'}

]

const Skills = () => {
    useEffect(() => {
        AOS.init({duration: 2000})
        
   }, []);
    return (
      <div className='skills-container' id='Skills'>
           <h1 className='skill-heading' data-aos='flip-down'>Skills</h1>
           <ul className='skill-list-container'>
                {technologiesImages.map(eachItem => (
                    <li className='skill-list-option'>
                        <img className='tecnology-img' src={eachItem.url} data-aos='flip-down' alt={eachItem.text}/> 
                        <p className='technology-name' data-aos='zoom-in'>{eachItem.text}</p>
                    </li>
                ))}
           </ul>
      </div>
)
}
export default Skills