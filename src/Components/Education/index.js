
import {useEffect} from 'react'

import AOS from 'aos'
import {FcApproval} from 'react-icons/fc'
import 'react-vertical-timeline-component/style.min.css';


import './index.css'
import 'aos/dist/aos.css';


const Education = () => {
    useEffect(() => {
        AOS.init({duration: 2000});
   }, []);
    return (
        <div className='Education-container' id='Education'>
            <h1 className='heading' data-aos='flip-down'>Education</h1>
            <ul className='card-timeline'>
                    <li className='education-card' data-aos='zoom-in'>
                                 <div className='education-name-container'>
                                     <h1 className="Education-name vertical-timeline-element-title">Kakinada Institute of Technology and Science, Divili</h1>
                                     <p className='date'>2018 - 2022</p>
                                </div>  
                                <p className='college-name'><FcApproval size={20} className='icon'/> B.Tech(Bachelor's of Technology)_CIVIL ENGINEERING</p>
                                <p className='marks'>CGPA - <span className='marks-line'>7.0</span></p>
                                
                                    
                    </li>
                    <li className='education-card' data-aos='zoom-in'>
                            <div className='education-name-container'>
                                <h1 className="Education-name vertical-timeline-element-title" >S.K.P.G.National.Jr.College, Ramachandrapuram, Andhra Pradesh</h1>
                                <p className='date'>2016 - 2018</p>
                            </div>  
                            <p className='college-name' ><FcApproval size={20} className='icon'/>Intermediate_MPC</p>
                            <p className='marks'>Percentage - <span className='marks-line'>60.5%</span></p>
                          
                        
                    </li>
                    <li className='education-card' data-aos='zoom-in'>
                            <div className='education-name-container'>
                                <h1 className="Education-name">Z.P High School, Kotipalli, Andhra Pradesh</h1>
                                <p className='date'>2015 - 2016</p>
                            </div>  
                            <p className='college-name'><FcApproval size={20} className='icon'/>SSC (Secondary School Of Certificate)</p>
                                <p className='marks'>GPA - <span className='marks-line'>8.8</span></p>
                                
                        
                    </li>
             </ul>
             
        </div>
    )
}

export default Education