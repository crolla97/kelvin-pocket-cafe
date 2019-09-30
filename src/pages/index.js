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
        <p className="description">An independent cafe situated at Kelvinbridge Subway. We create and bake all our own sweet and savoury treats. We serve Climpson and Sons Coffee.</p>
        <div className="gallery">
          <img className="gallery1" src={require('../images/coffee.png')} alt="coffee in leaves"/>
          <img className="gallery2" src={require('../images/insta-1.png')} alt="coffee bags"/>
          <img className="gallery3" src={require('../images/coffee-portrait.jpg')} alt="girl making coffee"/>
        </div>
        <Menu />
        <Instagram />
      </div>
    </main>
  </Layout>
)

export default IndexPage
