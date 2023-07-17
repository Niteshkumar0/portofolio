'use client'
import React from 'react'
import '../globals.css'
import {useSelector } from 'react-redux'


export default function About() {
  let isforDarkTheme = useSelector((state) => state.theme.dark)

  return (
    <>
    <div>
      <section id='About' className={` min-sw-screen min-h-screen flex items-center justify-center flex-col ${isforDarkTheme ? ' bg-slate-600' : ' bg-slate-300'}  bg-slate-300`}>
        
                <h1 className={`text-4xl mt-4 sm:mt-6  font-bold italic ${isforDarkTheme ? ' text-white' : ' text-black'} `}>About Me </h1>
            <div className=' se:w-4/5 m:w-2/3 h-2/3 bg-white px-8 py-8 m:leading-9 rounded-md my-7 se:text-lg m:text-xl'>
                <p>Hi, I'm Nitesh Kumar, a software engineer based in Karachi, Pakistan. I have a strong background in web development and a passion for creating interactive and user-friendly applications. With expertise in HTML, CSS, Bootstrap, JavaScript, React, Firebase, Tailwind and WordPress, I strive to deliver high-quality and visually appealing web solutions.
                I have successfully completed various projects, including a Tic Tac Toe game developed using HTML, CSS, and JavaScript, and an e-commerce landing page.and Pokemon App they show Pokemon Detail using React and third party api integration These projects have allowed me to enhance my skills in front-end development and problem-solving.</p>
            </div>
        
      </section>
    </div>
    </>
  )
}
