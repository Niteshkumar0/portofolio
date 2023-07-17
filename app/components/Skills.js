'use client'
import React from 'react'
import ContactMe from './ContactMe'
import '../globals.css'
import {useDispatch,useSelector} from 'react-redux';

export default function Skills() {
   let isforDarkTheme = useSelector((state) => state.theme.dark);
  return (
    <>
      <div id='Skill' className={`min-w-screen flex flex-col items-center min-h-screen ${isforDarkTheme ? ' bg-slate-500': 'bg-slate-200'} text-center`}>

            <h3 className={`text-4xl my-7  font-bold italic text-center pt-6 ${isforDarkTheme ? ' text-white' : ' text-black'}`}>Skills</h3>

            <div className={`w-4/5 min-h-4/5 p-4 xs:grid xs:grid-cols-1 xs:mb-7 grid gap-6 ml:grid-cols-2 rounded ${isforDarkTheme? ' bg-slate-600' : 'bg-slate-50'} shadow-2xl mt-7`}>

               {/* FIRST SKILL */}
               <div className={` shadow-xl rounded   pt-3 flex items-center ${isforDarkTheme ? 'bg-slate-700': 'bg-slate-200'} shadow-2xl`}>
                  <div>
                     <img src="./images/html2.png" className='h-14  inline-block' alt="" />
                  </div>
                  <div className=' w-full flex flex-col text-left mx-3'>
                     <div className={`${isforDarkTheme? 'text-white':'text-gray-700'}`}>HTML</div>
                     <div className={`w-full  h-2 rounded ${isforDarkTheme?'bg-slate-500': 'bg-slate-400'}`}>
                        <div className={`w-11/12 ${isforDarkTheme? 'bg-white': 'bg-slate-700'}  h-2 rounded `}>
                      </div>
                     </div>
                 </div>
               </div>
               {/* END */}
               <div className={` shadow-xl rounded  pt-3 flex items-center ${isforDarkTheme ? 'bg-slate-700': 'bg-slate-200'} `}>
                  <div>
                     <img src="./images/css2.png" className='h-14 ml-2  inline-block' alt="" />
                  </div>
                  <div className=' w-full flex flex-col text-left mx-3'>
                     <div className={`${isforDarkTheme? 'text-white':'text-gray-700'}`}>CSS</div>
                     <div className={`w-full ${isforDarkTheme?'bg-slate-500': 'bg-slate-400'} h-2 rounded `}>
                        <div className={` w-10/12 ${isforDarkTheme? 'bg-white': 'bg-slate-700'} h-2 rounded `}>
                      </div>
                     </div>
                 </div>
               </div>
               {/* END */}
               <div className={` shadow-xl rounded  py-3 flex items-center ${isforDarkTheme ? 'bg-slate-700': 'bg-slate-200'} shadow-2xl`}>
                  <div>
                     <img src="./images/js.png" className='h-10 ml-1  inline-block' alt="" />
                  </div>
                  <div className=' w-full flex flex-col text-left mx-4'>
                     <div className={`${isforDarkTheme? 'text-white':'text-gray-700'}`}>JS</div>
                     <div className={`w-full mt-1 ${isforDarkTheme?'bg-slate-500': 'bg-slate-400'} h-2 rounded  `}>
                        <div className={` w-3/4 ${isforDarkTheme? 'bg-white': 'bg-slate-700'} h-2 rounded `}>
                      </div>
                     </div>
                 </div>
               </div>
               {/* END */}
                  <div className={` rounded ${isforDarkTheme ? 'bg-slate-700': 'bg-slate-200'} py-3 flex items-centershadow-xl shadow-2xl`}>
                  <div>
                     <img src="./images/react.png" className='h-10 ml-1  inline-block' alt="" />
                  </div>
                  <div className=' w-full flex flex-col text-left mx-4'>
                     <div className={`${isforDarkTheme? 'text-white':'text-gray-700'}`}>React</div>
                     <div className={`${isforDarkTheme?'bg-slate-500': 'bg-slate-400'} w-full mt-1 bg-gray-400 h-2 rounded  `}>
                        <div className={` ${isforDarkTheme? 'bg-white': 'bg-slate-700'} w-3/4 bg-slate-700 h-2 rounded `}>
                      </div>
                     </div>
                 </div>
               </div>
               {/* END */}
               <div className={` rounded  py-3 flex items-center ${isforDarkTheme ? 'bg-slate-700': 'bg-slate-200'} shadow-2xl`}>
                  <div>
                     <img src="./images/wordpress1.png" className={`h-10 ml-1  inline-block rounded-xl`} alt="" />
                  </div>
                  <div className=' w-full flex flex-col text-left mx-4'>
                     <div className={`${isforDarkTheme? 'text-white':'text-gray-700'}`}>Wordpress</div>
                     <div className={`${isforDarkTheme?'bg-slate-500': 'bg-slate-400'} w-full mt-1 h-2 rounded  `}>
                        <div className={` ${isforDarkTheme? 'bg-white': 'bg-slate-700'} w-4/5  h-2 rounded `}>
                      </div>
                     </div>
                 </div>
               </div>
               {/* END */}
               <div className={` rounded  py-3 flex items-center ${isforDarkTheme ? 'bg-slate-700': 'bg-slate-200'} shadow-2xl`}>
                  <div>
                     <img src="./images/tailwind.jpeg" className='h-10 ml-1 rounded-2xl  inline-block' alt="" />
                  </div>
                  <div className=' w-full flex flex-col text-left mx-4'>
                     <div  className={`${isforDarkTheme? 'text-white':'text-gray-700'}`}>Tailwind</div>
                     <div className={`w-full mt-1 ${isforDarkTheme?'bg-slate-500': 'bg-slate-400'} h-2 rounded  `}>
                        <div className={` w-4/5 ${isforDarkTheme?'bg-white': 'bg-slate-700'} h-2 rounded `}>
                      </div>
                     </div>
                 </div>
               </div>
               {/* END */}
               <div className={`rounded  py-3 flex items-center ${isforDarkTheme ? 'bg-slate-700': 'bg-slate-200'} shadow-2xl`}>
                  <div>
                     <img src="./images/firebase.jpeg" className='h-10 ml-1 rounded-2xl inline-block' alt="" />
                  </div>
                  <div className=' w-full flex flex-col text-left mx-4'>
                     <div  className={`${isforDarkTheme? 'text-white':'text-gray-700'}`}>Firebase</div>
                     <div className={`w-full mt-1 ${isforDarkTheme?'bg-slate-500': 'bg-slate-400'} h-2 rounded  `}>
                        <div className={` w-4/5 ${isforDarkTheme?'bg-white': 'bg-slate-700'} h-2 rounded`}>
                      </div>
                     </div>
                 </div>
               </div>






            </div>
            {/* <div className=' w-4/5  py-5 min-h-screen  flex flex-col m:flex-none m:grid m:grid-cols-2 ml:grid-cols-3 ml:gap-6 gap-5 mx-auto items-center'>
              
                 <div className=' flex flex-col text-center p-3 w-72 se:mt-4 items-center'>
                    <p className={` text-2xl -mb-8 ${isforDarkTheme ? ' text-white': ' text-black'}`}>HTML</p>
                    <img src="./images/html2.png" alt="HTML" className=' w-full '  />
                 </div>
                
                 <div className='flex flex-col text-center p-3 w-56 se:mt-6 items-center'>
                    <p className={` text-2xl -mb-8 ${isforDarkTheme? 'text-white' : ' text-black'}`}>CSS</p>
                    <img src="./images/css2.png" alt="CSS" className=' w-full' />
                 </div>

                  
                 <div className='flex flex-col  text-center p-3 w-52 se:mt-6 items-center'>
                    <p className={` ${isforDarkTheme? ' text-white': ' text-black'} text-3xl mb-4 `}>JS</p>
                    <img src="./images/js.png" alt="JS" className=' w-full' />
                 </div>

                 <div className='flex flex-col text-center p-3 w-72 se:mt-6 items-center'>
                    <img src="./images/wordpress.png" alt="wordpress" className={` w-full ` } />
                 </div>

                 <div className='flex flex-col text-center m:col-span-2 m:mx-auto p-3 w-72 se:mt-6 items-center'>
                    <p className={` text-2xl ${isforDarkTheme? ' text-white': 'text-black'}`}>REACT</p>
                    <img src="./images/react.png" alt="REACT" className=' w-full' />
                 </div>
            </div> */}

      </div>
    </>
  )
}
