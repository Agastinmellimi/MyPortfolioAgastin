import {useEffect} from 'react'

import {BsGithub} from 'react-icons/bs'
import {RiArrowRightUpLine} from 'react-icons/ri'

import AOS from 'aos'

import './index.css'
import 'aos/dist/aos.css';

const projectsList = [
    {id: 1,   projectTitle: 'Todo Lists', gitLink: 'https://github.com/Agastinmellimi/TodoListWebsite.git',  projectUrl: 'https://agastintodo.ccbp.tech/', publishLink: 'agastintodo.ccbp.tech', imageUrl: 'https://res.cloudinary.com/dkrpgt9kd/image/upload/v1692073976/uwrnwh1ax7ycfdncdfvr.png', technologies: ['HTML', 'CSS', 'JS', 'Bootstrap']},
    {id: 2,  projectTitle: 'IPL Dashboard', gitLink: 'https://github.com/Agastinmellimi/IplDashBoardAgastin.git',  projectUrl: 'https://agastinipl.ccbp.tech/',publishLink: 'agastinipl.ccbp.tech',  imageUrl: 'https://res.cloudinary.com/dkrpgt9kd/image/upload/v1692073983/ts7vztghmbi040ivhrwd.png', technologies: ['React JS', 'CSS', 'JS', 'Routing', 'REST API Calls']},
    {id: 3,   projectTitle: 'Jobby App', gitLink: 'https://github.com/Agastinmellimi/jobbyAgastin.git', projectUrl:'https://agastinjobby.ccbp.tech/', publishLink: 'agastinjobby.ccbp.tech', imageUrl: 'https://res.cloudinary.com/dkrpgt9kd/image/upload/v1692073978/ygp9fato04foceri7hwo.png', technologies: ['React JS', 'JS', 'CSS', 'Routing', 'REST API Calls', 'Local Storage', 'JWT Token',
    'Authorization', 'Authentication']},
    {id: 4,  projectTitle: 'CCBP Timeline', gitLink: 'https://github.com/Agastinmellimi/tutorial.git',  projectUrl: 'https://agastintimeline.ccbp.tech/', publishLink: 'agastintimeline.ccbp.tech', imageUrl: 'https://res.cloudinary.com/dkrpgt9kd/image/upload/v1692073982/oia9iscx33mkamy5up4y.png', technologies: ['React JS', 'CSS', 'JS', 'React Chrono']},
]

const Projects = () => {
    useEffect(() => {
        AOS.init({duration: 2000});
   }, []);
    return (
       <div className='projects-container' id='Projects'>
            <h1 className='heading' data-aos='flip-down'>Projects</h1>
            <ul className='projects-list-container'>
               {projectsList.map(eachItem => (
                <li className='project-card'>
                    <img src={eachItem.imageUrl} className='image' alt={eachItem.projectTitle}/>
                    <div className='project-content'>
                        <div className='project-name-container'>
                            <h1 className="project-name" data-aos='fade'>{eachItem.projectTitle}</h1>
                            <a href={eachItem.gitLink} target='_blank' rel='noreferrer'><BsGithub size={23} className='link-icon'/></a>
                        </div>
                        <p className='topics-heading' >Technologies Used</p>
                        <ul className='topics-container'>
                            {eachItem.technologies.map(item => (
                                <li className='topic' data-aos='zoom-in'>{item}</li>
                            ))}
                        </ul>
                       <a href={eachItem.projectUrl}  className='link-container' target='_blank' rel='noreferrer'><RiArrowRightUpLine size={20} className='icon'/>{eachItem.publishLink}</a>
                    </div>
                </li>
                ))}

            </ul>
       </div>
)}
export default Projects