import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Brands from "./components/Brands/Brands";

function App() {
  return (
    <>
      <Header></Header>
      <Brands></Brands>
    </>
  );
}

export default App;
