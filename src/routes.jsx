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

  useEffect(() => {
    if (showHomepage === 2) {
      const timer = setTimeout(() => setShowHomepage(3), 10000); 
      return () => clearTimeout(timer); 
    }
  }, [showHomepage]);

  const handleDivClick = () => {
    setShowHomepage(2); 
  };

  const handleSkip = () => {
    setShowHomepage(3); 
  };

  const videoSource = "assets/videos/uni1033.mp4";

  return (
    <Router>
      {showHomepage === 1 ? (
        <Intro handleClick={handleDivClick} /> 
      ) : showHomepage === 2 ? (
        <div style={{ position: "relative", width: "100vw", height: "100vh", backgroundColor: "#000" }}>
          <video
            ref={videoRef}
            style={{
              display: "block",
              margin: "0 auto",
              width: "100%",
              height: "100%",
              objectFit: "cover",
              zIndex: 10,
            }}
            src={videoSource}
            crossOrigin="anonymous"
            playsInline
            autoPlay
            onError={(e) => console.error("Video Error:", e)} 
            onLoadedData={() => console.log("Video loaded successfully")} 
          >
            Your browser does not support the video tag.
          </video>
          <button className='mt-8 border-2  text-xl italic border-rose-500 text-white font-crossFly rounded-tl-3xl rounded-br-3xl hover:bg-rose-500 hover:rounded-lg hover:scale-[.97] transition-all ease-in-out backdrop-blur-lg duration-75'  
            onClick={handleSkip}
            style={{
              position: "absolute",
              bottom: "20px",
              right: "20px",
              padding: "10px 20px",   
              fontSize: "16px",
              zIndex: 1000,
            }}
          >
            Skip
          </button>
        </div>
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

          <Footer />
        </>
      )}
    </Router>
  );
}

export default RoutesConfig;
