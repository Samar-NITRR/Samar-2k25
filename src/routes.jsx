import "../globalStyles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

import Header from "./components/navigation/header/header";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Merchandise from "./pages/merchandise/merchandise";
import Team from "./pages/team/team.jsx";
import Contact from "./pages/contact/contact";
import Register from "./pages/register/register";
import Registration2 from "./pages/register/Registration2.jsx";
import SUC from "./pages/underConstruction.jsx";
import Footer from "./components/navigation/footer/footer";
import Intro from "./pages/home/intro.jsx";

function RoutesConfig() {
  const [showHomepage, setShowHomepage] = useState(1); 
  const videoRef = useRef(null); 


  useEffect(() => {
    if (showHomepage === 2 && videoRef.current) {
      videoRef.current.play();
    }
  }, [showHomepage]); 

  const handleDivClick = () => {
    setShowHomepage(2); 
  };


  const videoSource = "/src/assets/customIllustration/uni1033.mp4";

  return (
    <Router>
      {showHomepage === 1 ? (
        <Intro handleClick={handleDivClick} /> 
      ) : showHomepage === 2 ? (
        <>
          <video
            ref={videoRef}
            style={{
              display: "block",
              margin: "0 auto",
              width: "100%",
              height: "100%",
            }}
            src={videoSource}
            onError={(e) => console.error("Video Error:", e)} 
            onLoadedData={() => console.log("Video loaded successfully")} 
          >
            Your browser does not support the video tag.
          </video>

          {setTimeout(() => setShowHomepage(3), 10000)} 
        </>
      ) : (
        <>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/merchandise" element={<Merchandise />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/register" element={<Register />} />
            <Route path="/register/:sport" element={<Registration2 />} />
            <Route path="*" element={<SUC />} />
          </Routes>

          {/* <Footer /> */}
        </>
      )}
    </Router>
  );
}

export default RoutesConfig;
