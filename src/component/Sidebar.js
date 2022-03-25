import React from 'react'
import { useGlobalContext } from './context';
import sublinks from '../data';
import {FaTimes} from 'react-icons/fa'

const Sidebar = () => {
  const {isSidebar, closeSidebar} = useGlobalContext();
 

  return (
    <aside className={isSidebar ? 'sidebar-wrapper show' : 'sidebar-wraper'}>
     <div className="sidebar">
      <button className="close-btn" onClick={closeSidebar} typebutton>
        <FaTimes />
      </button>
      <div className="sidebar-links">
        {sublinks.map((item, index) => {
          const {links, page} = item;

          return (
            <article key={index}>
              <h4>{page}</h4>
              <div className="sidebar-sublinks">
                {links.map((link,index) => {
                  const {label, icon, url} = link;

                  return (
                     <a key={index} href={url}>
                      {icon}
                      {label}
                     </a>
                  )
                })}
              </div>
            </article>
          )
        })}
      </div>
     </div>
    </aside>
  )
}

export default Sidebar