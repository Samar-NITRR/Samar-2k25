import { NavLink } from 'react-router-dom';
import { useRef } from 'react';
import '../homeStyles.css'
import About from './abouthome.jsx';

// import BackgroundFall from '../../../assets/illustration/backgroundFall.png';
// import Soldier from '../../../assets/illustration/soldier.png';
// import SamarLogo from '../../../assets/logo/samarLogoWhite.png';
// import SamarIntroText from '../../../assets/customIllustration/samarIntroText.png';
import SamarIntroText from '../../../assets/customIllustration/samartextsvg.svg';

import HoverAudio from '../../../assets/audio/buttonHoverGTA.mp3';
import SwordAnimation from '../../../components/swordAnimation.jsx';

function LandingSection() {
    const hoverAudioRef = useRef(new Audio(HoverAudio));
    
    const handleHover = () => {
        hoverAudioRef.current.play();
    };
    const BackgroundFall = "https://res.cloudinary.com/dujmw5q9s/image/upload/v1735453580/backgroundFall_vjuxnm.png";
    const Soldier = "https://res.cloudinary.com/dujmw5q9s/image/upload/v1735453583/soldier_tc0jie.png";
    const SamarLogo = "https://res.cloudinary.com/dujmw5q9s/image/upload/v1735453584/samarLogoWhite_lvycab.png";

    return (
        <>
            <section id="home" className="w-screen h-screen flex flex-col justify-center items-center overflow-hidden">
                <main className="w-[80%] h-screen max-h-screen flex flex-row justify-between items-center">
                    <div className='h-screen'>
                        <img src={BackgroundFall} alt="Background Fall" className="h-full object-cover" />
                        <img src={Soldier} alt="Soldier" width={575} className="absolute bottom-0"/>
                    </div>

                    <div className='text-white w-[700px] h-screen flex flex-col justify-center items-center pt-16'>
                        <div className="flex flex-row justify-center items-center"> 
                            <img src={SamarLogo} alt="Samar Logo" className="w-[100px]" />
                            <h1 className="font-knightWarrior text-7xl glow-text drop-shadow-[3px_3px_0px_#000]">2025</h1>
                        </div>
                
                        <h1 className="font-vermin text-9xl text-[#ff882d] glow-text">
                            <img src={SamarIntroText} alt="Samar Logo" className="w-[1000px]" />
                        </h1>
                
                        <p className='w-[600px] mt-8 font-fastLines bold text-3xl bold text-center tracking-widest drop-shadow-[2px_2px_0px_#000]'>
                            A Flagship Sport's Event Organized by
                            <a className='text-rose-500 font-fastLines hover:cursor-pointer hover:text-rose-700 transition-all ease-in-out' href="https://shaurya-nitrr.netlify.app/" target="_blank">
                                Shaurya Sports Committee
                            </a>
                            , NITRR
                        </p>
                    
                        <NavLink  to="/register"  className='mt-8 border-2 px-16 py-4 text-xl italic border-rose-500 text-white font-crossFly rounded-tl-3xl rounded-br-3xl hover:bg-rose-500 hover:rounded-lg hover:scale-[.97] transition-all ease-in-out backdrop-blur-lg duration-75' onMouseEnter={handleHover} > 
                            REGISTER
                        </NavLink>
                    
                        <div className='flex flex-col justify-center items-center mt-12'>
                            <h1 className='text-5xl font-fastLines'>explore</h1>
                            <div className="mouse-scroll">
                                <div className="mouse">
                                    <div className="wheel"></div>
                                </div>
                                    
                                <div className="arrow"></div>
                            </div>
                        </div>
                    </div>
                </main>
            </section>

            <SwordAnimation />

            <div id='about' className='mt-48'>
                <About />
            </div>

        </>
    )
}

export default LandingSection;