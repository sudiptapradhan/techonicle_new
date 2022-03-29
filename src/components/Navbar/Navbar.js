import React, {useState} from 'react'
import './Navbar.css'
import { FiShoppingBag } from 'react-icons/fi';
import { CgProfile } from 'react-icons/cg';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className='main-nav'>
        
        <div className='logo'>
          <h2>Techonicle </h2>
        </div>

        <div className={showMediaIcons ? 'menu mobile-menu' : 'menu'}>
          <ul>
            <li>
              <a href='#'>Home</a>
            </li>
            <li>
              <a href='#'>Blog</a>
            </li>
            <li>
              <a href='#'>Podcasts</a>
            </li>
            <li>
              <a href='#'>Books</a>
            </li>
            <li>
              <a href='#'>About</a>
            </li>
          </ul>
        </div>

        <div className='links'>
          <ul className='links-desktop'>
          <li><a href='#'><FiShoppingBag className='cart'/></a></li>
          <li><a href='#'><CgProfile className='profile'/></a></li>
          </ul>

          {/* Hamburger */}
      <div className='hamburger-menu'>
        <a href='#' onClick={() => setShowMediaIcons(!showMediaIcons)}>
          <GiHamburgerMenu className='hamburgermenu'/>
        </a>
      </div>
        </div>
      </nav>


      {/* Body */}
      <section className='body'>
      <p>Welcome to</p>
      <h1>Techonicle</h1>
      </section>
    </>
  )
}

export default Navbar