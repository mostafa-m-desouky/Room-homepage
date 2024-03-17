import React from "react";
import Header from "./components/header/Header";
import logo from "./logo.svg"
import menu from "./images/icon-hamburger.svg"
import close from "./images/icon-close.svg"
import ShowCase from "./components/sec-1/ShowCase";
import arrow from "./images/icon-arrow.svg"
import left from "./images/icon-angle-left.svg"
import right from "./images/icon-angle-right.svg"
import aboutDark from "./images/image-about-dark.jpg"
import aboutLight from "./images/image-about-light.jpg"
import About from "./components/about/About";


function App() {
  return (
    <React.Fragment>
      <Header logo={logo} menu={menu} close={close} />
      <ShowCase arrow={arrow} left={left} right={right} />
      <About dark={aboutDark} light={aboutLight} />
    </React.Fragment>
  );
}

export default App;
