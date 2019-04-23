import React from 'react'

const Header = props => {
  return (
    <header className='headerComponent' data-test='header-component'>
      <h1 className='title' data-test='header-title'>
        Webbapplikationer
      </h1>
    </header>
  )
}

export default Header
