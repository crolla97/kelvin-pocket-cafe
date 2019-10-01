import React from 'react'
import '../styles/components/footer.scss'

const Footer = () => {

  return (
    <footer>
      <section>
        <div className="address">
          <h3>WHERE ARE WE?</h3>
          <span>72 S Woodside Rd,<br/>
          Glasgow G4 9HG</span>
        </div>
        <div className="hours">
          <h3>HOURS</h3>
          <span>Weekdays / 8-5</span>
          <span>Weekdays / 10-5</span>
        </div>
        <div className="contact">
          <h3>CONTACT</h3>
          <span>07793 315700</span>
          <span>@kelvinpocketcafe</span>
        </div>
      </section>
      <img src={require('../images/kelvin-logo.png')} alt="logo"/>
      <p>© {new Date().getFullYear()}, Built by
      {` `}
      </p>
      <a href="https://cristianocrolla.netlify.com" target="_blank" rel="noopener noreferrer">Crolla Creations</a>
    </footer>
  )
}

export default Footer;