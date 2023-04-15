import React, { useEffect, useState } from 'react'
import logo from './logo.png'
import minion from './minion.png'
import './Landing.css'
import Type from './Type'

const Landing = () => {
  
  return (
    <>
    <div className='landing'>
      <div className='logo'>
        <img src={logo} alt="MMIL logo"/>
      </div>
      <div className='recruitment'>
        <div className='type'>
        <Type/>
        </div>
        <span className='invent mew'>Invent.</span>
        <span className='inspire mew'>Inspire.</span>
        <span className='innovate mew'>Innovate.</span>
      </div>
      <div className='minion'>
        <img src={minion} alt="minion logo"/>
      </div>
    </div>
    </>
  )
}

export default Landing