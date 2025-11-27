import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div className='h-screen'>
      <div className='h-[10%] bg-amber-400 text-5xl'>

      <Header/>
      </div>
      <div className='h-[80%] bg-sky-300 text-center flex justify-center items-center'>

      <Outlet/>
      </div>
      <div  className='h-[10%] bg-amber-400 text-5xl'>
      <Footer/>
      </div >
    </div>
  )
}

export default MainLayout
