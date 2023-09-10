import {useState, useEffect} from 'react'
import {PiDotsThreeOutlineVerticalBold} from 'react-icons/pi'
import {RxCross2} from 'react-icons/rx'
import AOS from 'aos'

import './index.css'
import 'aos/dist/aos.css';



const Header = () => {
    const [hideNavbar, handleNavbar ] = useState('nav-container')
    const [hideOptions, handleOptions] = useState('mobile-options-container')
    const [clickMenu, setMenu] = useState(false)
    const onClickMenuBtn = () => {
      setMenu((prevState) => !prevState)
    }
    useEffect(() => {
        var prevScrollpos = window.scrollY;
        window.onscroll = function() {
          var currentScrollPos = window.scrollY;
          if (prevScrollpos > currentScrollPos) {
            handleNavbar('nav-container')
            handleOptions('mobile-options-container')
          } else {
            handleNavbar('nav-container-hide')
            handleOptions('hide-options')
          }
          prevScrollpos = currentScrollPos;
        }
       
            AOS.init({duration: 2000});
     
    }, [])
    return (
      <>
       <nav className={hideNavbar}>
        <div className='nav-inner-container'>
          <img src='https://res.cloudinary.com/djpsdllur/image/upload/v1694242940/bs57nw2cyv3h53caurbi.png' data-aos='fade-right' className='logo' alt='Website logo'/>
          <ul className='nav-options-container'>
               <li className='option-list' data-aos='fade-right'>
                   <a href='#Home' className='link-option'>Home</a>
               </li>
               <li className='option-list' data-aos='fade-right'>
                   <a href='#Education' className='link-option'>Education</a>
               </li>
               <li className='option-list' data-aos='fade-right'>
                   <a href='#Projects' className='link-option'>Projects</a>
               </li>
               <li className='option-list' data-aos='fade-right'>
                   <a href='#About' className='link-option'>About</a>
               </li>
          </ul>
          <button className='menu-btn' type='button' onClick={onClickMenuBtn} data-aos='fade-right'>
              {clickMenu ? <RxCross2 size={22}/> : <PiDotsThreeOutlineVerticalBold size={22}/>}
          </button>
          </div>
          {clickMenu ? <ul className={hideOptions}>
                <li className='option'>
                    <a href='#Home' className='link-option'>Home</a>
                </li>
                <li className='option'>
                    <a href='#Education' className='link-option'>Education</a>
                </li>
                <li className='option'>
                    <a href='#Projects' className='link-option'>Projects</a>
                </li>
                <li className='option'>
                    <a href='#About' className='link-option'>About</a>
                </li>
          </ul> : null}
       </nav>
       
</>
)}

export default Header