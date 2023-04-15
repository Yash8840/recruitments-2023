import React from 'react'
import './Footer.css'
import facebook from './images/facebook.png'
import instagram from './images/instagram.png'
import world from './images/world.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-div'>
      <a href='https://www.facebook.com/jssmmil/about/' target='#'><img src={facebook} className='facebook'/></a>
      <a href='https://www.instagram.com/jssmmil/' target='#'><img src={instagram} /></a>
      <a href='https://www.jssmmil.in/' target='#'><img src={world} /></a>
      <a href='https://www.jssmmil.in/' target='#'><span>/jssmmil</span></a>
      </div>
    </div>
  )
}

export default Footer