import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Brands from "./components/Brands/Brands";
import AboutUs from "./components/AboutUs/AboutUs";
import Projects from "./components/Projects/Projects";
import Testimonials from "./components/Testimonials/Testimonials";

function App() {
  return (
    <>
      <Header></Header>
      <Brands></Brands>
      <AboutUs></AboutUs>
      <Projects></Projects>
      <Testimonials></Testimonials>
    </>
  );
}

export default App;
