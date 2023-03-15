// Create a react functional component named Animated.js
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Experience from "./Experience";
import Skills from "./Skills";
import Contact from "./Contact";
import { Localization } from "../localization";

import { AnimatePresence } from "framer-motion";
const Animated = () => {
  const location = useLocation();
  return (
    <div>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home Localization={Localization} />} />
          <Route
            path="/about"
            element={<About Localization={Localization} />}
          />
          <Route
            path="/experience"
            element={<Experience Localization={Localization} />}
          />
          <Route
            path="/skills"
            element={<Skills Localization={Localization} />}
          />
          <Route
            path="/contact"
            element={<Contact Localization={Localization} />}
          />
        </Routes>
      </AnimatePresence>
    </div>
  );
};
export default Animated;
