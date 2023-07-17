'use client'
import React, { useState } from 'react'
import {AiFillLinkedin,AiFillTwitterCircle} from 'react-icons/ai'
import {BsGithub} from 'react-icons/bs'
import '../globals.css'
import {useSelector,useDispatch} from 'react-redux';
import Link from 'next/link'
export default function Main() {

  let isforDarkTheme =  useSelector((state) => state.theme.dark);
  // useSelector((state) => state.theme.dark);

  return (
    <>
        <section id='Home' className={`${isforDarkTheme? ' bg-slate-500': ' bg-slate-100'} min-w-screen min-h-screen p-7 flex flex-col text-center items-center m:items-start mx-auto m:flex-row m:justify-around`}>
          <div>
          <div className={`${isforDarkTheme ? 'transformOneSame': 'transformOne'} m:mt-24 xs:mt-20 flex text-center justify-center px-4 w-60 ${isforDarkTheme? '': 'border'}  py-4  ${isforDarkTheme? ' shadow-2xl': 'shadow-xl'} ${isforDarkTheme? ' text-slate-200':' text-black'}  rounded-md`}>
             <h4 className=' text-3xl'> &#x1F44B; Hello , I'am <br /> <b> Nitesh Kumar</b></h4>
          </div>

          <h4 className={`pl-5 mt-4 transformOne font-satify italic border-b-2 ${isforDarkTheme ? ' text-white': 'text-black'} border-black ${isforDarkTheme? ' border-white' : ' border-black'}   w-56`}> <b>FRONTED DEVELOPER </b></h4>

          <div className={` transformOne mt-3 text-4xl flex ml-5 m:flex-col ${isforDarkTheme ? ' text-white' : ' text-black'}`}>
            <Link href='https://www.linkedin.com/in/nitesh-kumar-a30707245/' passHref>
            <AiFillLinkedin className='mr-3 '/>
            </Link>
            <Link href='https://github.com/Niteshkumar0' passHref>
            <BsGithub className=' mr-3 m:my-2'/>
            </Link>
            <Link href='https://twitter.com/Nitesh_Kumar_77' passHref>
            <AiFillTwitterCircle />
            </Link>
          </div>
          <div className=' flex flex-row pt-4 mt-2 '>
              <button className={`text-white text-lg ${isforDarkTheme? 'bg-slate-700':'bg-gray-400'} px-7 py-2 rounded-lg shadow-xl`}>
               <Link href='https://drive.google.com/drive/folders/1h9_A0f_0MFw3ZtXIdj0D_ge7RN6R8Fu4'>Resume</Link>
                </button>
          </div>
      </div>

          <img src="./images/niteshpic.png" alt="" className={`transform ${isforDarkTheme? 'bg-slate-400': 'bg-slate-300'}  w-80 h-80 rounded-full m:mt-24 m:h-96 m:w-96 xs:w-60 xs:mt-5 xs:h-60 object-cover`} />
     

        </section>
    </>
  )
}