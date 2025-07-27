import React from 'react';
// import amazon from "../assets/hero-card-images/amazon1.png"
export default function HeroSection(props) {
  return (
    <div className=''>
      <div className='flex flex-col items-center space-y-5 mt-10 shadow-md p-5'> 
        <h2 className='font-bold text-2xl '>{props.name}</h2>
        <img src={props.Image} alt="amazon1" className='w-96 h-50 p-3 border rounded-lg' />
        <button className='bg-[#4fc3dc] text-white py-2 px-4 rounded-md p-3' >
          <a href={props.link}>project link</a>
        </button>
      </div>
     
    </div>
    
        
  )
}

