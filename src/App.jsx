import React from 'react'
import image from "../image/slack.png"
import haleemah from "../image/discord.png"
import roqeeb from "../image/git.png"
import zainab from "../image/amazon1.png"
import hawa from "../image/tesla.png"
import HeroSection from "./components/HeroSection"
import Thanks from "./components/Thanks"

export default function App() {
  return (
    <>
    <div className='shadow-md bg-gradient-to-r from-purple-500 to-pink-500' ><header className='font-bold text-center text-5xl p-9 '>REACT PROJECTS</header></div>
    <div className='flex flex-col gap-10 md:flex-row md:gap-20 justify-center '>
      <HeroSection 
        name= "Tijani Abdullah Adebukola"
        image= {image}
        link= "https://my-react-app-d8cf.vercel.app/"
      />

      <HeroSection 
        name= "Olaniyan Haleemah Abiona"
        image= {haleemah}
        link= "https://discord-gold-nine.vercel.app/"
      />

      
    </div>

    <div className='flex flex-col gap-10 md:flex-row md:gap-20 justify-center '>
      <HeroSection 
        name= "Sharifiyu Roqeeb Taiwo"
        image= {roqeeb}
        link= "https://roqeeb-dev.github.io/github-clone/"
      />

      <HeroSection 
        name= "Abdulganiyu Zainab Ometere"
        image= {zainab}
        link= "https://amazonclone-self-ten.vercel.app/"
      />

      
      
      
    </div>

    <div className='flex flex-col gap-10 md:flex-row md:gap-20 justify-center '>
      <HeroSection 
        name= "Owonikoko Hawawu Olanike"
        image= {hawa}
        link= "https://tesla-page-silk.vercel.app/"
      />

      

      
      
      
    </div>
    <Thanks />
    </>
  )
}
