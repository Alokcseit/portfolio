import React from "react";
import Home from "./Components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Viewproject from "./Components/Viewproject";
import Header from "./Components/Header";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Hireme from "./Components/Hireme";
import Viewresume from "./Components/Viewresume";
import Viewcertificate from "./Components/Viewcertificate";
import Learnmore from "./Components/Learnmore";

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/home/" element={<Home></Home>}>
          <Route path="viewresume" element={<Viewresume></Viewresume>}></Route>
          <Route
            path="viewproject"
            element={<Viewproject></Viewproject>}
          ></Route>
          <Route
            path="viewcertificate"
            element={<Viewcertificate></Viewcertificate>}
          ></Route>
          <Route path="learnmore" element={<Learnmore></Learnmore>}></Route>
        </Route>

        <Route path="/about" element={<About></About>}></Route>
        <Route path="/hireme" element={<Hireme></Hireme>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
