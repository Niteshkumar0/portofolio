'use client'
import React from 'react'
import {BsFillMoonStarsFill} from 'react-icons/bs';
import '../globals.css'
import {useDispatch,useSelector} from 'react-redux'
import {forDarkTheme} from '../redux/theme'

export default function Navbar() {
   let isforDarkTheme =  useSelector((state) => state.theme.dark); 
   let dispatch = useDispatch() 

  return (
    <>
        <section className={`w-screen  h-20  ${isforDarkTheme?' shadow-xl':' shadow-lg'} ${isforDarkTheme ? 'text-white': 'text-black'} fixed top-0 left-0 backdrop-blur-lg z-10  ${isforDarkTheme? ' bg-opacity-60': 'bg-opacity-5'} ${isforDarkTheme? ' bg-slate-900': ' bg-slate-100'}`}>
          <nav className={` px-8 h-20  flex text-center justify-between items-center `}>
                <div className="font-satify italic text-2xl">
                    Nitesh Kumar
                </div>
                <div className=" text-3xl">
                    <BsFillMoonStarsFill className="hover:cursor-pointer" onClick={() => dispatch(forDarkTheme())} />
                </div>
          </nav>
       </section>
    </>
  )
}

// onClick={() => dispatch(forDarkTheme())}