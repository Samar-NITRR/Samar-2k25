import { useState, useRef } from 'react';
// import FortniteBiome from '../assets/fortniteBiome.mp4';
import BGAudio from '../assets/audio/angelicalPad.mp3';
import MuteIcon from '../assets/icons/muteIcon.png';
import UnMuteIcon from '../assets/icons/unMuteIcon.png';

import HoverAudio from '../assets/audio/buttonHoverGTA.mp3';

function Background() {
    const [isMuted, setIsMuted] = useState(true);
    const audioRef = useRef(null);
    const FortniteBiome = "https://res.cloudinary.com/dujmw5q9s/video/upload/v1735453658/fortniteBiome_mlmpt6.mp4"

    const toggleAudio = () => {
        if (audioRef.current) {
            if (isMuted) {
                audioRef.current.play();
            } else {
                audioRef.current.pause();
            }
            setIsMuted(!isMuted);
        }
    };

    const hoverAudioRef = useRef(new Audio(HoverAudio));
    
    const handleHover = () => {
        hoverAudioRef.current.play();
    };

    return (
        <>
            <video src={FortniteBiome} autoPlay muted={isMuted} loop className="fixed w-screen h-screen object-cover z-[-20] blur-[2px] inset-0">
                Your browser does not support the video tag.
            </video>

            <audio ref={audioRef} src={BGAudio} loop autoPlay muted={isMuted} />
            <button onClick={toggleAudio} 
                    className="fixed bottom-10 right-10 p-3 border-2 border-rose-500 backdrop-blur-lg rounded-full hover:scale-95 transition-all ease-out z-30"
                    onMouseEnter={handleHover}
            >
                <img src={isMuted ? MuteIcon : UnMuteIcon} alt={isMuted ? 'Mute' : 'Unmute'} className="w-8 h-8" />
            </button>
        </>
    );
}

export default Background;