import "../globalStyles.css";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";

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

import Loader from "./components/loader/loader.jsx";
import { Analytics } from "@vercel/analytics/react";

function AppContent() {
    const location = useLocation();
    const [showHomepage, setShowHomepage] = useState(1);
    const [loading, setLoading] = useState(false);
    const videoRef = useRef(null);

    const hideHeaderFooterPaths = ['/merchandise', '/register', '/register/cricket', '/register/badminton_(singles)', '/register/badminton_(doubles)', '/register/basketball', '/register/vollyball', '/register/football', '/register/chess', '/register/athletics', '/register/hockey', '/register/handball', '/register/kabaddi', '/register/khokho', '/register/tt_singles', '/register/tt_doubles'];
    const shouldShowHeaderFooter = !hideHeaderFooterPaths.includes(location.pathname);

    useEffect(() => {
        const sessionStarted = sessionStorage.getItem('sessionStarted');

        if (sessionStarted) {
            setShowHomepage(3);
        } else {
            setShowHomepage(1);
        }
    }, []);

    const handleDivClick = () => {
        sessionStorage.setItem('sessionStarted', 'true');
        setShowHomepage(2);
    };

    useEffect(() => {
        const handleBeforeUnload = () => {
            sessionStorage.removeItem('sessionStarted');
            sessionStorage.removeItem('videoPlayed');
        };

        const handleUnload = () => {
            sessionStorage.removeItem('sessionStarted');
            sessionStorage.removeItem('videoPlayed');
        };

        window.addEventListener('beforeunload', handleBeforeUnload);
        window.addEventListener('unload', handleUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
            window.removeEventListener('unload', handleUnload);
        };
    }, []);

    useEffect(() => {
        const videoPlayed = sessionStorage.getItem('videoPlayed');
        const sessionStarted = sessionStorage.getItem('sessionStarted');

        if (showHomepage === 2 && sessionStarted && !videoPlayed && videoRef.current) {
            videoRef.current.play();
            sessionStorage.setItem('videoPlayed', 'true');
        }
    }, [showHomepage]);

    useEffect(() => {
        if (showHomepage === 2) {
            const timer = setTimeout(() => setShowHomepage(3), 10000);
            return () => clearTimeout(timer);
        }
    }, [showHomepage]);

    const handleSkip = () => {
        setShowHomepage(3);
    };

    const videoSource = "https://res.cloudinary.com/dujmw5q9s/video/upload/v1736753727/uni1033_ofyrvn.mp4";

    useEffect(() => {
        const handleLocationChange = () => {
            if (location.pathname === "/team") {
                setLoading(true);
                setTimeout(() => {
                    setLoading(false);
                }, 1500);
            } else {
                setLoading(false);
            }
        };
    
        handleLocationChange();
    }, [location]);
    

    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <>
                    {showHomepage === 1 ? (
                        <Intro handleClick={handleDivClick} />
                    ) : showHomepage === 2 ? (
                        <div style={{ position: "relative", width: "100vw", height: "100vh", backgroundColor: "#000" }}>
                            <video
                                ref={videoRef}
                                style={{ display: "block", margin: "0 auto", width: "100%", height: "100%", objectFit: "cover", zIndex: 10 }}
                                src={videoSource}
                                crossOrigin="anonymous"
                                playsInline
                                autoPlay
                                onError={(e) => console.error("Video Error:", e)}
                                onLoadedData={() => console.log("Video loaded successfully")}
                            >
                                Your browser does not support the video tag.
                            </video>

                            <button
                                className="mt-8 border-2 text-xl italic border-rose-500 text-white font-crossFly rounded-tl-3xl rounded-br-3xl hover:bg-rose-500 hover:rounded-lg hover:scale-[.97] transition-all ease-in-out backdrop-blur-lg duration-75 bottom-[60px] md:bottom-[20px]"
                                onClick={handleSkip}
                                style={{ position: "absolute", right: "20px", padding: "10px 20px", fontSize: "16px", zIndex: 1000 }}
                            >
                                Skip
                            </button>
                        </div>
                    ) : (
                        <>
                            {showHomepage === 3 && <Header />}
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/merchandise" element={<Merchandise />} />
                                <Route path="/team" element={<Team />} />
                                <Route path="/contact" element={<Contact />} />
                                <Route path="/register" element={<Register />} />
                                <Route path="/register/:sport" element={<Registration2 />} />
                                <Route path="*" element={<SUC />} />
                            </Routes>
                            <Analytics />
                            {showHomepage === 3 && shouldShowHeaderFooter && <Footer />}
                        </>
                    )}
                </>
            )}
        </>
    );
}

function RoutesConfig() {
    return (
        <Router>
            <AppContent />
        </Router>
    );
}

export default RoutesConfig;
