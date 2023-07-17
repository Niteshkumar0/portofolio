'use client'
import React,{useState,useEffect} from 'react'
import axios from 'axios';
import '../globals.css'
import { RiStarLine } from 'react-icons/ri';
import {BiGitRepoForked} from 'react-icons/bi'
import { useSelector } from 'react-redux';
export default function Github() {
  let isforDarkTheme = useSelector((state) => state.theme.dark)

    let token = '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';

    let headers = {
      Authorization : `Bearer ${token}`
    }
  
  let [respo,setRespo] = useState([])

  
  let fetchData = async() => {
          try {
           let res = await axios.get('https://api.github.com/users/Niteshkumar0/repos', { headers })
          //  .then((data)=> setRespo('data',data))
           setRespo(res.data)
          } catch (error) {
            console.log("err",error)
          }       
  }
  
    useEffect(()=>{
      fetchData();
      console.log("respo",respo)
    },[respo])
    
  return (
    <>
        {/* <div className=' min-w-screen min-h-screen  bg-slate-100'>
        {Object.values(respo).map((data) =>(
                <li>{data.name}</li>
            ))}
        </div> */}
          <section id='github' className={`min-w-screen min-h-screen p-4 ${isforDarkTheme ? 'bg-slate-600' : 'bg-slate-300'} f:grid-cols-4 m:grid m:gap-3 ml:grid-cols-3 m:grid-cols-2`}>
          <h1 className={`${isforDarkTheme ? 'text-white': 'text-black'} m:col-span-2 ml:col-span-3 f:col-span-4 text-center text-3xl italic my-6 font-bold`}>My GitHub Portfolio</h1>
        {Object.values(respo).map((data) => (
          <div key={data.url} className={` min-w-90 ${isforDarkTheme ? 'bordering2' : 'bordering1'} rounded-md p-2 mb-5 ${isforDarkTheme ? ' text-slate-100': 'text-black'}`}>
            <a href={data.clone_url}>
             <p className=' inline underline'> {data.owner.login}</p>  / <p className='inline underline'>{data.name}</p>
            </a>
            <div>
            <RiStarLine className=' inline'/> {data.stargazers_count} stars / <BiGitRepoForked  className=' inline'/> {data.forks} forks
            </div>
          </div>
        ))}
        </section>

    </>
  )
}
