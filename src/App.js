import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/about";
import Header from "./components/header";

function App() {
  return (
    <Router>
      <div>
        <Header />
        {/* Wrap Route elements in a Routes component */}
        <Routes>
          {/* Define routes using the Route component to render different page components at different paths */}
          {/* Define a default route that will render the Home component */}
          <Route path="/" element={<div>Home</div>} />
          <Route path="about" element={<About />} />
          {/* <Route path="blog" element={<Blog />} /> */}
          {/* Define a route that will have descendant routes */}
          {/*<Route path="contact/*" element={<Contact />} />*/}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
