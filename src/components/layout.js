/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Header from './header'
import Footer from './footer'
import SEO from './head'

import "../styles/styles.scss"
import "../styles/components/layout.scss"

const Layout = ({ children }) => {

  return (
    <>
      <SEO/>
      <div>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
