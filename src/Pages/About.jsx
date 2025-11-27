import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
 const navigate =   useNavigate();
  return (
    <div className='flex flex-col'>
      <h1>About</h1>
      <button onClick={()=>navigate("/20")} className='bg-amber-500'>Go to Details page</button>
    </div>
  )
}

export default About
