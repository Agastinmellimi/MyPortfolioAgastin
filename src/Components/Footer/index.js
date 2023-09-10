import { AiFillGithub} from 'react-icons/ai'
import {GrLinkedinOption, GrFacebookOption} from 'react-icons/gr'
import {SiInstagram} from 'react-icons/si'
import {FiMail} from 'react-icons/fi'
import {HiOutlineAtSymbol} from 'react-icons/hi'
import './index.css'


const Footer = () => (
    <div className='footer-container'>
        <ul className='footer-links-container'>
             <li className='s-link'>
              <a href='https://www.linkedin.com/in/agastin/' target='_blank' className='social-link' rel="noreferrer"><GrLinkedinOption size={28} /></a>
             </li>
             <li className='s-link'>
             <a href='https://github.com/Agastinmellimi' target='_blank' className='social-link' rel="noreferrer"><AiFillGithub  size={28}/></a>
             </li>
             <li className='s-link'>
               <a href="mailto: agastinmellimi2001@gmail.com" target='_blank' className='social-link' rel="noreferrer"><FiMail  size={28}/></a>
             </li>
             <li className='s-link'>
             <a href='https://www.facebook.com/chintu.agastin' target='_blank' className='social-link' rel="noreferrer"><GrFacebookOption size={28}/></a>
             </li>
             <li className='s-link'>
               <a href='https://www.instagram.com/agastin1983/' target='_blank' className='social-link' rel="noreferrer"><SiInstagram  size={28}/></a>
             </li>
        </ul>
        <p className='my-name'><HiOutlineAtSymbol size={18}/>Agastin Mellimi</p>
    </div>
)

export default Footer