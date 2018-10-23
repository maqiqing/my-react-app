import React from 'react'
import { Link } from 'gatsby'
import '../components/Header.css'

const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup">
      <Link to="/"><img src={require('../images/logo-designcode.svg')} width="30" /></Link>
      <Link to="/Course">Courses</Link>
      <Link to="/Downloads">Downloads</Link>
      <Link to="/Workshops">Workshops</Link>
      <Link to="/Buy"><button>Buy</button></Link>
    </div>
  </div>
)

export default Header
