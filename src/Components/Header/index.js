import {useState, useEffect} from 'react'
import {PiDotsThreeOutlineVerticalBold} from 'react-icons/pi'
import {RxCross2} from 'react-icons/rx'


import './index.css'




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
       
           
    }, [])
    return (
      <>
       <nav className={hideNavbar}>
        <div className='nav-inner-container'>
            <a href='#Home' className='logo-link'>
              <img src='https://res.cloudinary.com/djpsdllur/image/upload/v1694242940/bs57nw2cyv3h53caurbi.png' data-aos='fade-right' className='logo' alt='Website logo'/>
            </a>
          <ul className='nav-options-container'>
               <li className='option-list' >
                   <a href='#Home' className='link-option'>Home</a>
               </li>
               <li className='option-list' >
                   <a href='#Education' className='link-option'>Education</a>
               </li>
               <li className='option-list' >
                   <a href='#Skills' className='link-option'>Skills</a>
               </li>
               <li className='option-list' >
                   <a href='#Projects' className='link-option' >Projects</a>
               </li>
               <li className='option-list'>
                   <a href='#About' className='link-option'>About</a>
               </li>
          </ul>
          <button className='menu-btn' type='button' onClick={onClickMenuBtn}>
              {clickMenu ? <RxCross2 size={22}/> : <PiDotsThreeOutlineVerticalBold size={22}/>}
          </button>
          </div>
          {clickMenu ? <ul className={hideOptions}>
                <li className='option'>
                    <a href='#Home' className='link-option' onClick={() => setMenu(false)}>Home</a>
                </li>
                <li className='option' >
                    <a href='#Education' className='link-option' onClick={() => setMenu(false)}>Education</a>
                </li>
                <li className='option' >
                    <a href='#Skills' className='link-option' onClick={() => setMenu(false)}>Skills</a>
                </li>
                <li className='option'>
                    <a href='#Projects' className='link-option' onClick={() => setMenu(false)}>Projects</a>
                </li>
                <li className='option'>
                    <a href='#About' className='link-option' onClick={() => setMenu(false)}>About</a>
                </li>
          </ul> : null}
       </nav>
       
</>
)}

export default Header