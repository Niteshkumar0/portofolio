'use client'
import React,{useRef} from 'react'
import {AiOutlineMail,AiOutlineWhatsApp} from 'react-icons/ai'
import emailjs from '@emailjs/browser'
import '../globals.css'
import {useDispatch,useSelector} from 'react-redux'
import {forDarkTheme} from '../redux/theme'

export default function ContactMe() {
    let isforDarkTheme = useSelector((state) => state.theme.dark)
    let form = useRef();

    let sendEmail = (e) => {
        emailjs.sendForm('service_znag942','template_9cmsxzb',form.current,'FNQ-i5mlXmUxuZcXd')
        .then((r) => console.log(r))
        .catch((e)=> console.log(e))
    }


  return (
    <>
<div id='ContactUs' className={`p-2 min-w-screen flex flex-col ml:justify-evenly items-center text-center min-h-screen ${isforDarkTheme ? ' bg-slate-500': 'bg-slate-200'}`}>

        <div>
            <div className={`${isforDarkTheme? 'text-white': 'text-black'} my-5 `}>
                <p className=' text-xl'>Get In Touch</p>
                <h1 className=' text-4xl'>Contact Me</h1>
            </div>
        </div>

    <div className=' w-80 m:w-3/4 ml:grid ml:grid-cols-2 ml:w-2/3'>
        <div className=' m:grid m:grid-cols-2 ml:grid-rows-2 ml:flex  ml:flex-col ml:w-full  m:w-full m:gap-5 '>
            <div className={` shadow-2xl   ${isforDarkTheme? 'text-white': 'text-black'} ${isforDarkTheme? ' bg-slate-700': ' bg-white'}  p-3 rounded-lg mt-9 w-full flex flex-col ml:w-64 ml:mx-auto text-center items-center `}>
                <AiOutlineMail className=' font-bold text-gray-500 text-4xl'/>
                <p className=' font-bold text-lg'>Email</p> 
                 <p className=' font-bold text-lg m:text-base  m:w-96 text-gray'>niteshgoindani99@gmail.com</p>
                <p>send a message</p>
            </div>

            <div className={` shadow-2xl  p-3 rounded-lg mt-9 w-full ml:w-64 ml:mx-auto flex flex-col text-center items-center ${isforDarkTheme? 'text-white': 'text-black'} ${isforDarkTheme? 'bg-slate-700': 'bg-white'}`}>
                <AiOutlineWhatsApp className=' font-bold text-4xl text-gray-500'/>
                <p className=' font-bold text-lg'>Whatsapp</p> 
                 <p className=' font-bold text-lg text-gray'>03333250624</p>
                <p>send a message</p>
            </div>
        </div>

            <div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder='Your Name' required className={`hover:outline-black rounded w-full mt-8 mb-4 pl-3 h-12 shadow-2xl ${isforDarkTheme? 'bg-slate-600': 'bg-white'} `} />
                    <input type="email" name="email" placeholder='Your Email' required className={`hover:outline-black rounded w-full pl-3 h-12 shadow-2xl mb-4 ${isforDarkTheme? 'bg-slate-600': 'bg-white'}` } />
                    <textarea name="message" placeholder='Your Message' className={`hover:outline-black rounded px-5 py-5 w-full h-48 shadow-2xl resize-none ${isforDarkTheme? 'bg-slate-600': 'bg-white'}`}></textarea>
                    <button type=' submit' value='send' className={`hover:border bg-slate-300 flex flex-row ml-1 my-4 ${isforDarkTheme? 'text-white': 'text-black'} shadow-2xl rounded px-5 py-2 ${isforDarkTheme? 'bg-slate-700': 'bg-white'}`}>Send Message</button>
                </form>
            </div>
    </div>

</div> 
    </>
  )
}
