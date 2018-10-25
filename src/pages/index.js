import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Card from '../components/Card';
import Section from '../components/Section';
import Wave from '../components/Wave';

const IndexPage = () => (
  <Layout>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Learn to design and code React apps</h1>
        <p>Complete courses about the best tools and design systems.Prototype and build apps with React and Swift</p>
        <Link to="/video">Watch the video</Link>
        <div className="logos">
          <img src={require('../images/logo-sketch.png')} width="50"/>
          <img src={require('../images/logo-figma.png')} width="50"/>
          <img src={require('../images/logo-studio.png')} width="50"/>
          <img src={require('../images/logo-framer.png')} width="50"/>
          <img src={require('../images/logo-react.png')} width="50"/>
          <img src={require('../images/logo-swift.png')} width="50"/>
        </div>
        <Wave />
      </div>
    </div>
    
    <div className="Cards">
      <h2>11 courses,more comming</h2>
      <div className="CardGroup">
        <Card
          title="Design Systems"
          text="10 Sections"
          image={require('../images/wallpaper.jpg')} />
        <Card
          title="React for Designers"
          text="12 Sections"
          image={require('../images/wallpaper.jpg')} />
        <Card
          title="Sound Design"
          text="5 Sections"
          image={require('../images/wallpaper.jpg')} />
        <Card
          title="ARKit 2"
          text="10 Sections"
          image={require('../images/wallpaper.jpg')} />
      </div>
    </div>

    <Section
      image={require('../images/wallpaper2.jpg')}
      logo={require('../images/logo-react.png')}
      title="React For Designers"
      text="Learn how to build a modern site    using React and the most efficient libraries to get your site/product online. Get familiar with components, Grid CSS, animations, interactions, dynamic data with Contentful and deploying your site with Netlify."
      />

  </Layout>
)

export default IndexPage
