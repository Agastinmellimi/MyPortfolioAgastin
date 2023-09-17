import React, { useRef, useState, useEffect} from 'react';
import emailjs from '@emailjs/browser';
import AOS from 'aos'
import {FaHandPointDown} from 'react-icons/fa'
import {TailSpin} from 'react-loader-spinner'
import {GrRefresh} from 'react-icons/gr'
import {BsFillSendFill} from 'react-icons/bs'
import {BsFillEmojiSmileFill} from 'react-icons/bs'

import './index.css'
import 'reactjs-popup/dist/index.css'

import 'aos/dist/aos.css';



export const ContactUs = () => {
  const form = useRef();

  useEffect(() => {
    AOS.init({duration: 2000});
}, []);

  const [name, updatedName] = useState('')
  const [email, updatedEmail] = useState('')
  const [text, updatedText] = useState('')
  

  const [nameError, handleNameError] = useState(false)
  const [emailError, handleEmailError] = useState(false)
  const [textError, handleTextError] = useState(false)
  const [sendStatus, setSendStatus] = useState("INTIALIZE")
  



  const nameInput = (event) => {
    updatedName(event.target.value)
  }
  const emailInput = (event) => {
    updatedEmail(event.target.value)
  }
  const textInput = (event) => {
    updatedText(event.target.value)
  }

  const onRefresh = () => {
    setSendStatus("INTIALIZE")
    updatedName("")
        updatedText('')
        updatedEmail('')
    handleNameError(false)
    handleEmailError(false)
    handleTextError(false)
  }
  


  const sendEmail = (e) => {
    e.preventDefault();
    
    
    

    if (name === '' && email !== '' && text !== '') {
        handleNameError(true)
        handleTextError(false)
        handleEmailError(false)
       
    } if (name !== '' && email !== '' && text === '')  {
        handleNameError(false)
        handleEmailError(false)
        handleTextError(true)
        
    } if (name !== '' && email === '' && text !== '') {
        handleEmailError(true)
        handleNameError(false)
        handleTextError(false)
       
    } if (email === '' && name === '' && text === ''){
        handleNameError(true)
        handleEmailError(true)
        handleTextError(true)
      
    } 
    if (email === '' && name !== '' && text === '') {
        handleNameError(false)
        handleEmailError(true)
        handleTextError(true)
    } 
    if (email !== '' && name === '' && text === '') {
        handleNameError(true)
        handleEmailError(false)
        handleTextError(true)
    } 
    if (email === '' && name === '' && text !== '') {
        handleNameError(true)
        handleEmailError(true)
        handleTextError(false)
    } 

    if (email !== '' && name !== '' && text !== '') {
       handleNameError(false)
        handleEmailError(false)
        handleTextError(false)
       
        
        setSendStatus("LOADING")
        emailjs.sendForm('service_d7u407a', 'template_lv0o8xb', form.current, '0hOJoRWtY0kN6tPGt').then(
          (result) => {
            if (result.text === 'OK') {
              setSendStatus('SUCCESS')
              updatedName("")
              updatedText('')
              updatedEmail('')
            }
          }
        )
       
    }
  }; 
  const baseOnSendStatus = () => {
    switch (sendStatus) {
      case "LOADING":
          return (
            <TailSpin
              height="20"
              width="20"
              color="#fff"
              ariaLabel="tail-spin-loading"
              radius="1"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          )
      case "SUCCESS":
        return "Sended"
      case "INTIALIZE":
        return 'Send'
      default:
        return 'Send'
    }
  }

  return (
    <div className='contact-container'>
        <h1 className='heading' data-aos='flip-down'>Send Message <FaHandPointDown className='hand-icon'/></h1>
        <div className='form-card'>
    <form ref={form} onSubmit={sendEmail} className='form-container'>
      <label className='label' htmlFor='name'>Name</label>
      <input type="text" id='name' name="name" value={name} className='input-bar' onChange={nameInput}/>
      {nameError ? <p className='error-msg'>Please Provide your name</p> : null}
      <label className='label' htmlFor='email'>Email</label>
      <input type="email" name="user_email" id='email' value={email} className='input-bar' onChange={emailInput} />
     
      {emailError ? <p className='error-msg' >Please Provide your email</p> : null}
      <label className='label' htmlFor='message'>Message</label>
      <textarea name="message" className='text' value={text} id='message' onChange={textInput}/>
      {textError ? <p className='error-msg' >Please Provide Message</p> : null}
      <div className='btn-container'>
        
      <div className='send-btn-container'>
        <button type="submit" className='submit-btn'>
            { baseOnSendStatus() } {sendStatus === "SUCCESS" ? (<BsFillSendFill color='#45d640' className='send-icon' size={20}/>) : null}
        </button>
        {sendStatus === "SUCCESS" ? <p className='wish'>Thanks for your wishes<BsFillEmojiSmileFill className='smile-icon' size={25}/></p>: null}
      </div>
      {sendStatus === "SUCCESS" ? (
          <button type="submit" className='refresh-btn' onClick={onRefresh}>
                <GrRefresh/>
          </button>
        ) : null}
      </div>
    </form>
    </div>
   
    </div>
  );
};

export default ContactUs