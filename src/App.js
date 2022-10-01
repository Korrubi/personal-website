import React from "react";
import Layout from "./components/Layout";
import Homepage from "./pages/Homepage";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import AboutMe from "./pages/AboutMe";
import ContactMe from "./pages/ContactMe";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Layout>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
        <Routes>
          <Route path="/Resume" element={<Resume />} />
        </Routes>
        <Routes>
          <Route path="/Projects" element={<Projects />} />
        </Routes>
        <Routes>
          <Route path="/ContactMe" element={<ContactMe />} />
        </Routes>
        <Routes>
          <Route path="/AboutMe" element={<AboutMe />} />
        </Routes>
      </Router>
    </Layout>
  );
}

export default App;
