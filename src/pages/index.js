import React from "react"

import Layout from "../components/layout"
import Menu from "../components/menu/menu"
import Instagram from '../components/instagram'

import '../styles/pages/index.scss'

const IndexPage = () => (
  <Layout>
    <main className="indexMain">
      <img src={require('../images/kelvin-outside.jpg')} alt="Outside Kelvin Pocket" className="cover"/>
      <div className="indexContainer">
        <p className="description">An independent cafe situated at Kelvinbridge Subway. We create and bake all our own sweet and savoury treats for your pleasure.</p>
        <div className="gallery">
          <img className="gallery1" src={require('../images/coffee.png')} alt="coffee in leaves"/>
          <img className="gallery2" src={require('../images/insta-1.png')} alt="coffee bags"/>
          <img className="gallery3" src={require('../images/coffee-portrait.jpg')} alt="girl making coffee"/>
        </div>
        <div className="coffeeContainer">
          <h3>WE'RE CRAZY ABOUT COFFEE</h3>
        <div className="coffeeDescription">
          <p>We serve Climpson and Sons coffee where freshness and seasonality is the centre of their ethos.</p> 
          <p>They source some of the best coffee from around the world before roasting and packaging in their East London Roastery.</p>
          <p>Four coffee bean varieties are on offer from their amazing range, each possessing their own unique flavours.</p>
          <p>We love them and we know you will too!</p>
        </div>
          
        </div>
      </div>
        <div id="parallax"></div>
      <div className="indexContainer">
        <Menu />
        <Instagram />
      </div>
    </main>
  </Layout>
)

export default IndexPage
