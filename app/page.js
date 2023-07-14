'use client'
import About from "@/app/components/About"
import Navbar from "./components/Navbar"
import Main from "@/app/components/Main"
import Skills from "@/app/components/Skills"
import ContactMe from "@/app/components/ContactMe"
import Github from "@/app/components/Github"
import Footer from "./components/Footer"
export default function Home() {

  return (
    <>
        <Navbar/>
         <Main/>
        <About/>
        <Skills/>
        <Github/>
        <ContactMe/>
        <Footer/> 
    </>
        
  )
}
