import React, { useState } from "react";
import "./assets/css/index.css";
import Experience from "./pages/Experience/Experience";
import Contact from "./pages/Contact/Contact";
import Projects from "./pages/Projects/Projects";
import Header from "./pages/Header/Header";
import Hero from "./pages/Hero/Hero";
import Skills from "./pages/Skills/Skills";
import Education from "./pages/Education/Education";

import { Route, Routes } from "react-router-dom";

export default function App() {
    // TODO Add a toggle to switch between one-page mode and router mode
  const [isOnePage, setIsOnePage] = useState(false); // Toggle state

  return (
    <>
      <Header />
      {/* Conditional Rendering */}
      {isOnePage ? (
        // One-Page Mode: Render all components together
        <>

          <Hero />
          <Skills />
          <Experience />

            {/* TODO Edit education item so that it says Resume or Experience */}
          <Education />
          <Contact />
        </>
      ) : (
        // Router Mode: Use routes for navigation
        <Routes>`
            {/* TODO Add custom routes and remove the ones we don't need */}
          <Route path="/" element={<Hero />} />
          <Route path="/skills" element={<Skills />} />
            {/* TODO IMPORTANT Update experience page */}
          <Route path="/experience" element={<Experience />} />
          <Route path="/education&experience" element={<Education />} />
          <Route path="/contact" element={<Contact />} />

            {/* TODO Update projects section */}
          <Route path="/projects" element={<Projects />} />
        </Routes>
      )}
    </>
  );
}
