import React from 'react'
import './header.css'


const Header = (props) => {
  const [isOpen, setIsOpen] = React.useState(false)

  const handleClick = () => {
    setIsOpen(prevIsOpen => !prevIsOpen)
  }

  return (
    <header className={isOpen ? "open" : ""}>
      <div className='container'>
        <div className='logo-box'>
          <img src={props.logo} alt="" className="logo" />
        </div>
        <nav className={isOpen ? "open": ""}>
          <ul>
            <li><a href='index.html'>home</a></li>
            <li><a href='index.html'>shop</a></li>
            <li><a href='index.html'>about</a></li>
            <li><a href='index.html'>contact</a></li>
          </ul>
        </nav>
        <div className="menu">
          <button onClick={handleClick}>
            <img src={isOpen ? props.close : props.menu} alt="menu" />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header


