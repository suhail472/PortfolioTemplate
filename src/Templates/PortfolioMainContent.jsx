import { useEffect, useState } from "react";
import profile from "../Images/Template/profileImg.png";
import Home from "../Sections/Home";
import Skills from "../Sections/Skills";
import About from "../Sections/About";
import ContactUs from "../Sections/ContactUs";

function TemplateMainData() {


  return (
    <>
      <Home/>
      <Skills/>
      <About />
      <ContactUs/>
    </>
  );
}

export default TemplateMainData;
