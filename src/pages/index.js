import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Card from '../components/Card';
import Section from '../components/Section';
import Wave from '../components/Wave';
import staticdata from '../../staticdata.json'
import Cell from '../components/Cell';
import styled from 'styled-components'

const SectionCaption = styled.p`
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  color: #94A4BA;
  text-align: center;
`

const SectionCellGroup = styled.div`
  max-width: 800px;
  margin: 0 auto 100px;
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const IndexPage = () => (
  <Layout>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>学习并编程React程序</h1>
        <p>无聊学习react程序，这样子就可以自己写网站，博客啥的---马头</p>
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

    <SectionCaption>12 sections - 6 hours</SectionCaption>
    <SectionCellGroup>
      {staticdata.cells.map(cell => (
        <Cell
            image = {cell.image}
            title = {cell.title}
        />
      ))}
    </SectionCellGroup>
  </Layout>
)

export default IndexPage
