import React from 'react'
import { useGlobalContext } from './context'
import logo from '../images/logo.svg';
import {FaBars} from 'react-icons/fa'


const Navbar = () => {
  const {openSidebar, closeSubmenu, openSubmenu} = useGlobalContext();

  const displaySubmenu = (e) => {
   const page = e.target.textContent;
   const tempBtn = e.target.getBoundingClientRect();
   const center = (tempBtn.left + tempBtn.right)/2;
   const bottom = tempBtn.bottom - 3
    openSubmenu(page, {center, bottom});
  };
  
   const handleSubmenu = (e) => {
     if (!e.target.classList.contains('link-btn')) {
       closeSubmenu()
     }
   }

  return (
    <nav className='nav' onMouseOver={handleSubmenu}>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} alt='stripe' className='nav-logo' />
          <button
            className='btn toggle-btn'
            type='button'
            onClick={openSidebar}
          >
            <FaBars />
          </button>
        </div>
        <ul className='nav-links'>
          <li>
            <button
              type='button'
              className='link-btn'
              onMouseOver={displaySubmenu}
            >
              products
            </button>
          </li>
          <li>
            <button
              type='button'
              className='link-btn'
              onMouseOver={displaySubmenu}
            >
              developers
            </button>
          </li>
          <li>
            <button
              type='button'
              className='link-btn'
              onMouseOver={displaySubmenu}
            >
              company
            </button>
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