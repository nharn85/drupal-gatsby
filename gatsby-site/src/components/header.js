import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <div className="banner"
    style={{
      backgroundColor: '#bf8891',
      color: '#635470',
      height: '150px',
      lineHeight: '150px',
      marginBottom: '20px',
      position: 'relative',
      textAlign: 'center',
      zIndex: '-1',
    }}>
    <div className="banner-title" style={{
      display: 'inline-block',
      padding: '0 20px',
      background: 'white',
      lineHeight: '3',
      borderRadius: '2px',
    }}>
      <span className="sans-serif" style={{
        display: 'inline-block',
        fontFamily: "'Raleway',sans-serif",
        fontSize: '20px',
        lineHeight: '1',
        textTransform: 'uppercase',
        verticalAlign: 'middle',
      }}>Nicole Dawn</span>
      <span className="cursive" style={{
        display: 'inline-block',
        fontFamily: "'Pacifico',cursive",
        fontSize: '23px',
        lineHeight: '1',
        paddingBottom: '4px',
        paddingLeft: '3px',
        textTransform: 'capitalize',
        verticalAlign: 'middle',
      }}>Design</span>
    </div>
  </div>
)

export default Header
