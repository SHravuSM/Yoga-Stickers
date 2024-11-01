import React, { useState } from "react";
import Footer from "./Footer";
import Nav from "./Nav";
import Body from "./Body";
import { BrowserRouter, Routes } from "react-router-dom";

export default function Home() {
  const [about, setAbout] = useState(true);
  function About() {
    setAbout(false);
  }

  return (
    <>
      <div className="flex flex-col ">
        <Nav yes={0} About={About} about={about}></Nav>
        {about ? <Body></Body> : <About />}
        <Footer></Footer>
      </div>


      
    </>
  );
}
