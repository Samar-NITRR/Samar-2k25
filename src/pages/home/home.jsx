import HomeBackground from '../../components/homeBackground.jsx';
import MatrixBackground from '../../components/matrixBackground.jsx';
import LandingSection from './homeComponents/landingSection.jsx';
import ImageGallery from './homeComponents/imageGallery.jsx';
import Sponsors from './homeComponents/sponsors.jsx';
import Timeline from './homeComponents/timeline.jsx';
import About from './homeComponents/abouthome.jsx';
import Intro from './intro.jsx';
import SwordAnimation from '../../components/swordAnimation.jsx';
import TeamRedirection from './homeComponents/teamRedirection.jsx';

import { useEffect, useRef } from 'react';

function Home({ showHomepage, setShowHomepage }) {
    const videoRef = useRef(null);

    // Check if session exists on component mount
    useEffect(() => {
        const sessionStarted = sessionStorage.getItem('sessionStarted');

        if (sessionStarted) {
            setShowHomepage(3); // If session exists, set showHomepage to 3
        } else {
            setShowHomepage(1); // If session doesn't exist, set showHomepage to 1
        }
    }, [setShowHomepage]);

    // Start session when handleDivClick is pressed
    const handleDivClick = () => {
        sessionStorage.setItem('sessionStarted', 'true'); // Mark session as started
        setShowHomepage(2); // Show video on first entry
    };

    // Stop session when user exits the tab/website
    useEffect(() => {
        const handleBeforeUnload = () => {
            sessionStorage.removeItem('sessionStarted'); // Clear session on unload
            sessionStorage.removeItem('videoPlayed'); // Clear video played session
        };

        const handleUnload = () => {
            sessionStorage.removeItem('sessionStarted'); // Clear session on unload
            sessionStorage.removeItem('videoPlayed'); // Clear video played session
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
            sessionStorage.setItem('videoPlayed', 'true'); // Mark that video has been played
        }
    }, [showHomepage]);

    useEffect(() => {
        if (showHomepage === 2) {
            const timer = setTimeout(() => setShowHomepage(3), 10000); // Skip after 10 seconds
            return () => clearTimeout(timer);
        }
    }, [showHomepage]);

    const handleSkip = () => {
        setShowHomepage(3); // Skip video
    };

    const videoSource = "https://res.cloudinary.com/dujmw5q9s/video/upload/v1736753727/uni1033_ofyrvn.mp4";

    return (
        <>
            {showHomepage === 1 ? (
                <Intro handleClick={handleDivClick} />
            ) : showHomepage === 2 ? (
                <div style={{ position: "relative", width: "100vw", height: "100vh", backgroundColor: "#000" }}>
                    <video ref={videoRef} style={{ display: "block", margin: "0 auto", width: "100%", height: "100%", objectFit: "cover", zIndex: 10 }} src={videoSource} crossOrigin="anonymous" playsInline autoPlay onError={(e) => console.error("Video Error:", e)} onLoadedData={() => console.log("Video loaded successfully")}>
                        Your browser does not support the video tag.
                    </video>

                    <button className='mt-8 border-2 text-xl italic border-rose-500 text-white font-crossFly rounded-tl-3xl rounded-br-3xl hover:bg-rose-500 hover:rounded-lg hover:scale-[.97] transition-all ease-in-out backdrop-blur-lg duration-75' onClick={handleSkip} style={{ position: "absolute", bottom: "20px", right: "20px", padding: "10px 20px", fontSize: "16px", zIndex: 1000 }}>
                        Skip
                    </button>
                </div>
            ) : (
                <>
                    <HomeBackground />
                    <MatrixBackground />
                    <LandingSection />
                    <SwordAnimation />
                    <About />
                    <TeamRedirection />
                    <Timeline />
                    <Sponsors />
                    <ImageGallery />
                </>
            )}
        </>
    );
}

export default Home;
