import React from 'react'
import image from "../src/assets/hero-card-images/amazon1.png"
import HeroSection from "./components/HeroSection"
import Thanks from "./components/Thanks"

export default function App() {
  return (
    <>
    <div className='shadow-md bg-gradient-to-r from-purple-500 to-pink-500' ><header className='font-bold text-center text-5xl p-9 '>REACT PROJECTS</header></div>
    <div className='flex flex-col gap-10 md:flex-row md:gap-20 justify-center '>
      <HeroSection 
        name= "Tijani Abdullah Adebukola"
        Image= {image}
        link= "https://my-react-app-d8cf.vercel.app/"
      />

      <HeroSection 
        name= "Tijani Abdullah Adebukola"
        Image= "src//assets/hero-card-images/amazon1.png"
        link= "https://my-react-app-d8cf.vercel.app/"
      />

      
    </div>

    <div className='flex flex-col gap-10 md:flex-row md:gap-20 justify-center '>
      <HeroSection 
        name= "Tijani Abdullah Adebukola"
        Image= "src//assets/hero-card-images/amazon1.png"
        link= "https://my-react-app-d8cf.vercel.app/"
      />

      <HeroSection 
        name= "Tijani Abdullah Adebukola"
        Image= "src//assets/hero-card-images/amazon1.png"
        link= "https://my-react-app-d8cf.vercel.app/"
      />
      
      
    </div>
    <Thanks />
    </>
  )
}
