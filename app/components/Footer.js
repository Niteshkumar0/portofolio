'use client'
import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {forDarkTheme} from '../redux/theme'
import {AiFillLinkedin,AiFillTwitterCircle,AiFillFacebook,AiOutlineInstagram} from 'react-icons/ai'
import {BsGithub} from 'react-icons/bs'
import Link from 'next/link' 
export default function Footer() {
  let isforDarkTheme = useSelector((state) => state.theme.dark)
  
    return (
    <>
        <div className={` min-w-screen py-9  min-h-60 ${isforDarkTheme? ' bg-slate-600': 'bg-slate-300'} `}>
            <section className='w-60 h-4/5 s:w-full mt-16 mx-auto text-center'>
            <div className={` font-extrabold ${isforDarkTheme ? 'text-white': 'text-black'} font-satify my-4 italic text-3xl `}>
                    Nitesh Kumar
            </div> 
                <div>
                    <nav className={` mx-auto s:flex s:flex-row  s:justify-center s:gap-4 my-10 s:my-8 leading-loose text-lg list-none ${isforDarkTheme? 'text-white': 'text-black'}`}>
                        <li className=' mr-4'><a href="#Home">Home</a></li>
                        <li className=' mr-4'><a href="#About">About</a></li>
                        <li className=' mr-4'><a href="#Skill">Skills</a></li>
                        <li className=' mr-4'><a href="#github">Github</a></li>
                        <li className=' mr-4'><a href="#ContactUs">Contact Us</a></li>
                    </nav>
                </div>
                <div className={` flex gap-4 s:justify-center s:mt-10 s:mb-14 mx-auto mt-10 mb-12 w-4/5 text-2xl ${isforDarkTheme? 'text-white' : 'text-black'}`}>
                    <Link href='https://www.facebook.com/nitesh.goindani.31/'>
                    <AiFillFacebook/>
                    </Link>
                    <Link href='https://www.instagram.com/nitesh_goindani/'>
                    <AiOutlineInstagram/>
                    </Link>
                    <Link href='https://www.linkedin.com/in/nitesh-kumar-a30707245/'>
                        <AiFillLinkedin/>
                    </Link>
                    <Link href='https://twitter.com/Nitesh_Kumar_77'>
                        <AiFillTwitterCircle />
                    </Link>
                    <Link href='https://github.com/Niteshkumar0'>
                        <BsGithub/>
                    </Link>
                </div>
                <div className={`text-sm ${isforDarkTheme? 'text-white' : 'text-black'}`}>
                    Nitesh Kumar © 2023
                </div>
            </section>
        </div> 
    </>
  )
}
