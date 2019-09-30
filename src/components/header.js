import React from 'react';
import '../styles/components/header.scss'

const Header = () => {


  return (
    <header>
      <p>07793 315700</p>
      <img src={require('../images/kelvin-logo.png')} alt="logo" className="logo"/>
      <p>72 S Woodside Rd</p>
    </header>
  )
}

export default Header;