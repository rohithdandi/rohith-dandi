import React from "react";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Home() {
  return (
    <>
      <Navbar />
      <Projects />
      <Contact />
    </>
  );
}

function App() {
  return (
    <>
      <Router basename="/rohith-dandi/">
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
