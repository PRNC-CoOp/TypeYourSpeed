import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (

    <div className="min-w-screen min-h-screen bg-linear-to-br from-pink-300 via-pink-200 to-purple-300 flex items-center justify-center p-6">

      <div className="content-wrapper flex items-center justify-center gap-8 max-w-7xl w-full">

        <div className="flex-1 p-8 flex items-center justify-center bg-white/10 rounded-lg min-h-80 hover:bg-linear-to-br hover:from-pink-200 hover:to-pink-300 hover:text-pink">

          <p className='text-center text-base leading-relaxed font-[Martel_Sans] text-pink-900 '>Our WPM checker helps users improve typing speed, accuracy, and productivity through real-time performance tracking. Practice regularly to build confidence, reduce mistakes, and type efficiently daily.</p>

        </div>

        <Link to="/start">

          <button className='px-8 py-12 bg-linear-to-br from-green-100 to-green-50 text-pink-800 font-bold text-3xl font-anta rounded-3xl shadow-lg min-w-max hover:cursor-pointer hover:bg-linear-to-br hover:from-pink-200 hover:to-pink-600 hover:text-white'>Start</button>

        </Link>

        <div className="flex-1 p-8 flex items-center justify-center bg-white/10 rounded-lg min-h-80 hover:bg-linear-to-br hover:from-pink-200 hover:to-pink-300 hover:text-pink">

          <p className='text-center text-gray-800 text-base leading-relaxed font-[Martel_Sans] hover:bg-linear-to-br '>Faster typing saves time, increases productivity, improves communication, and helps complete work efficiently. Strong typing skills also boost confidence for studies, jobs, and daily tasks.</p>

        </div>

      </div>

    </div>
  )
}

export default Home