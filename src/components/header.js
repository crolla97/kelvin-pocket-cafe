import React from 'react';
import '../styles/components/header.scss'

const Header = () => {


  return (
    <header>
      <span>72 S Woodside Rd</span>
      <img src={require('../images/kelvin-logo.png')} alt="logo" className="logo"/>
      <span>Glasgow</span>
    </header>
  )
}

export default Header;