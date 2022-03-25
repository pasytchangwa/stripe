import React from "react";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import Sidebar from "./component/Sidebar";
import Submenu from "./component/Submenu";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Sidebar />
      <Submenu />
    </>
  );
}

export default App;
