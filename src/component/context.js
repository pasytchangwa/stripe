import React, {useState, useContext, createContext} from "react";
import sublinks from "../data";


const AppContext = createContext();

const AppProvider = ({children}) => {

 const [isSidebar, setIsSidebar] = useState(true);
 const [isSubmenu, setIsSubmenu] = useState(true);
 

 const openSidebar = () => {
   setIsSidebar(true);
 }

 const closeSidebar = () => {
   setIsSidebar(false);
 }

 const openSubmenu = () => {
   setIsSubmenu(true);
 }

 const closeSubmenu = () => {
   setIsSubmenu(false);
 }

 return (
  <AppContext.Provider value = {{isModal: isSubmenu, isSidebar, openModal: openSubmenu, closeModal: closeSubmenu, openSidebar, closeSidebar}}>
    {children}
  </AppContext.Provider>
 )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export {AppProvider, AppContext};