
import {useEffect} from 'react'

import AOS from 'aos'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import {PiBookOpenTextDuotone} from 'react-icons/pi'
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
            <VerticalTimeline className='card-timeline'>
                    <VerticalTimelineElement
                                contentStyle={{ backgroundColor: '#eeeba9',
                                    backgroundImage: 'linear-gradient(225deg, #eeeba9 0%, #a7f5c8 50%, #c9aada 100%)', color: '#000'}}
                                contentArrowStyle={{ borderRight: '7px solid  #c9aada' }}
                                className="vertical-timeline-element--work"
                                iconStyle={{ backgroundColor: '#FEE140',
                                    backgroundImage: 'linear-gradient(90deg, #FEE140 0%, #FA709A 100%)',color: '#09759c' }}
                                icon={<PiBookOpenTextDuotone/>}
                                date='2018 - 2022'
                                >
                                    
                                <h1 className="Education-name vertical-timeline-element-title">Kakinada Institute of Technology and Science, Divili, East Godavari District</h1>
                                
                                <p className='marks' data-aos='zoom-in'>CGPA - <span className='marks-line'>7.0</span></p>
                                <p className='college-name'><FcApproval size={20} className='icon'/> B.Tech(Bachelor's of Technology)_CIVIL ENGINEERING</p>
                                    
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                            contentStyle={{ backgroundColor: '#eeeba9',
                            backgroundImage: 'linear-gradient(225deg, #eeeba9 0%, #a7f5c8 50%, #c9aada 100%)', color: '#000'}}
                            contentArrowStyle={{ borderRight: '7px solid  #c9aada' }}
                            className="vertical-timeline-element--work"
                            iconStyle={{ backgroundColor: '#FEE140',
                                    backgroundImage: 'linear-gradient(90deg, #FEE140 0%, #FA709A 100%)',color: '#09759c' }}
                            icon={<PiBookOpenTextDuotone/>}
                            date='2016 - 2018'
                            >
                            
                            <h1 className="Education-name vertical-timeline-element-title" >S.K.P.Govt.National.Junior.College, Ramachandrapuram, East Godavari District</h1>
                            
                            <p className='marks' data-aos='zoom-in'>Percentage - <span className='marks-line'>60.5%</span></p>
                           <p className='college-name' ><FcApproval size={20} className='icon'/>Intermediate_MPC</p>
                        
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                                contentStyle={{ backgroundColor: '#eeeba9',
                                backgroundImage: 'linear-gradient(225deg, #eeeba9 0%, #a7f5c8 50%, #c9aada 100%)', color: '#000'}}
                                contentArrowStyle={{ borderRight: '7px solid  #c9aada' }}
                                className="vertical-timeline-element--work"
                                iconStyle={{ backgroundColor: '#FEE140',
                                    backgroundImage: 'linear-gradient(90deg, #FEE140 0%, #FA709A 100%)',color: '#09759c' }}
                                icon={<PiBookOpenTextDuotone/>}
                                date='2015 - 2016'
                                >
                                    
                                <h1 className="Education-name vertical-timeline-element-title">Z.P High School, Kotipalli, East Godavari District</h1>
                              
                                <p className='marks' data-aos='zoom-in'>GPA - <span className='marks-line'>8.8</span></p>
                                <p className='college-name'><FcApproval size={20} className='icon'/>SSC (Secondary School Of Certificate)</p>
                        
                    </VerticalTimelineElement>
             </VerticalTimeline>
             
        </div>
    )
}

export default Education