import React from 'react'
import { useGlobalContext } from './context'
import logo from '../images/logo.svg';
import {FaBars} from 'react-icons/fa'

const Navbar = () => {
  const {openSidebar, closeSubmenu, openSubmenu} = useGlobalContext();
  return (
    <nav className='nav'>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} alt='stripe' className='nav-logo' />
          <button className='btn toggle-btn' type='button' onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className='nav-links'>
          <li>
            <button type='button' className='link-btn'>
              products
            </button>
            <li>
              <button type='button' className='link-btn'>
                developers
              </button>
            </li>
            <li>
              <button type='button' className='link-btn'>
                company
              </button>
            </li>
          </li>
        </ul>
        <button type='button' className='btn signin-btn'>
          Sign in
        </button>
      </div>
    </nav>
  );
}

export default Navbar