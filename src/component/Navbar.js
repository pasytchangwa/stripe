import React from 'react'
import { useGlobalContext } from './context'
import logo from '../images/logo.svg';
import {FaBars} from 'react-icons/fa'

const Navbar = () => {
  const {openSidebar, closeSubmenu, openSubmenu} = useGlobalContext();
  return (
    <div>Navbar</div>
  )
}

export default Navbar