import React from 'react';
import '../styles/components/header.scss'

const Header = () => {


  return (
    <header>
      <span>07793 315700</span>
      <img src={require('../images/kelvin-logo.png')} alt="logo" className="logo"/>
      <span>72 S Woodside Rd</span>
    </header>
  )
}

export default Header;