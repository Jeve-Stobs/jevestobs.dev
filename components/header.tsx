import React from 'react'
import Title from './title'
import Subtitle from './subtitle'
import Info from './info'

const Header: React.FC = () => {
  return (
    <React.Fragment>
      <header>
        <Title text="Hi, I'm Sam 👋" />
        <Subtitle text="16 y/o developer with a passion for building websites & blazing fast applications." />
        <Info />
      </header>
      {/* language=CSS */}
      <style jsx>{`
        header {
          padding-top: 130px;
        }
      `}</style>
    </React.Fragment>
  )
}

export default Header
