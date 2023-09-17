import React, { useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import {FaHandPointDown} from 'react-icons/fa'


import 'reactjs-popup/dist/index.css'
import './index.css'

export const ContactUs = () => {
  const form = useRef();

  const [name, updatedName] = useState('')
  const [email, updatedEmail] = useState('')
  const [text, updatedText] = useState('')

  const [nameError, handleNameError] = useState(false)
  const [emailError, handleEmailError] = useState(false)
  const [textError, handleTextError] = useState(false)
  const [sendStatus, setSendStatus] = useState(false)



  const nameInput = (event) => {
    updatedName(event.target.value)
  }
  const emailInput = (event) => {
    updatedEmail(event.target.value)
  }
  const textInput = (event) => {
    updatedText(event.target.value)
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
        setSendStatus(true)
        updatedName("")
        updatedText('')
        updatedEmail('')
        emailjs.sendForm('service_d7u407a', 'template_lv0o8xb', form.current, '0hOJoRWtY0kN6tPGt')
        
    }
  };

  return (
    <div className='contact-container'>
        <h1 className='heading'>Send Message <FaHandPointDown className='hand-icon'/></h1>
        <div className='form-card'>
    <form ref={form} onSubmit={sendEmail} className='form-container'>
      <label className='label' htmlFor='name'>Name</label>
      <input type="text" id='name' name="name" value={name} className='input-bar' onChange={nameInput}/>
      {nameError ? <p className='error-msg'>Please Provide your name</p> : null}
      <label className='label' htmlFor='email'>Email</label>
      <input type="email" name="user_email" id='email' value={email} className='input-bar' onChange={emailInput} />
     
      {emailError ? <p className='error-msg'>Please Provide your email</p> : null}
      <label className='label' htmlFor='message'>Message</label>
      <textarea name="message" className='text' value={text} id='message' onChange={textInput}/>
      {textError ? <p className='error-msg'>Please Provide Message</p> : null}
      <input type="submit" value={sendStatus ? 'Send Successfully': 'Send'} className='submit-btn' />
    </form>
    </div>
   
    </div>
  );
};

export default ContactUs