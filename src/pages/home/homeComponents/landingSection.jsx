import { NavLink } from 'react-router-dom';
import { useRef } from 'react';
import '../homeStyles.css'

import SamarIntroText from '../../../assets/customIllustration/samartextsvg.svg';
import HoverAudio from '../../../assets/audio/buttonHoverGTA.mp3';

function LandingSection() {
  const hoverAudioRef = useRef(new Audio(HoverAudio));

  const handleHover = () => {
    hoverAudioRef.current.play();
  };
  const BackgroundFall =
    "https://res.cloudinary.com/dujmw5q9s/image/upload/v1735453580/backgroundFall_vjuxnm.png";
  const Soldier =
    "https://res.cloudinary.com/dujmw5q9s/image/upload/v1735453583/soldier_tc0jie.png";
  const SamarLogo =
    "https://res.cloudinary.com/dujmw5q9s/image/upload/v1735453584/samarLogoWhite_lvycab.png";

  return (
    <>
      <section id="home" className="w-screen h-[calc(100vh-80px)] flex flex-col justify-center items-center overflow-hidden mt-[80px]" >
        <main className="w-[80%] h-full flex flex-row justify-between items-start">
          <div className="h-full -z-10 hidden md:block">
            <img
              src={BackgroundFall}
              alt="Background Fall"
              className="h-full object-cover"
            />
            <img
              src={Soldier}
              alt="Soldier"
              className="absolute bottom-0 md:max-w-[40vw] lg:max-w-[50vw] max-h-[80vh]"
            />
          </div>

          <div className="text-white w-[700px] h-[90%] md:h-[100%] flex flex-col justify-between items-center pt-32">
            <div className='flex flex-col justify-center items-center'>
              <div className="flex flex-row justify-center h-[5vmax] md:h-[4vmax] lg:h-[3vmax] items-center mb-1">
                <img src={SamarLogo} alt="Samar Logo" className="h-full" />
                <h1 className="font-knightWarrior text-[5vmax] md:text-[4vmax] lg:text-[3vmax] xl:text-[5vmax] glow-text drop-shadow-[3px_3px_0px_#000]">
                  2025
                </h1>
              </div>
              <h1 className="font-vermin text-9xl text-[#ff882d] glow-text m-0">
                <img
                  src={SamarIntroText}
                  alt="Samar Logo"
                  className="w-[90vw] md:h-[9vmax] lg:h-[9vmax] mt-14 max-h-[200px]"
                />
              </h1>

              <p className="max-w-[600px] mt-7 font-fastLines bold text-2xl bold text-center tracking-widest drop-shadow-[2px_2px_0px_#000]">
                A Flagship Sport's Event Organized by
                <a
                  className="text-rose-500 font-fastLines hover:cursor-pointer hover:text-rose-700 transition-all ease-in-out"
                  href="https://shaurya-nitrr.netlify.app/"
                  target="_blank"
                  >
                  Shaurya Sports Committee
                </a>
                , NITRR
              </p>

              <NavLink
                to="/register"
                className="border-2 mt-16 px-16 py-4 text-xl italic border-rose-500 text-white font-crossFly rounded-tl-3xl rounded-br-3xl hover:bg-rose-500 hover:rounded-lg hover:scale-[.97] transition-all ease-in-out backdrop-blur-lg duration-75"
                onMouseEnter={handleHover}
                >
                REGISTER
              </NavLink>

              <div className="flex flex-col justify-center items-center mt-16">
                <h1 className="text-l md:text-xl lg:text-2xl font-fastLines m-0">explore</h1>
                <div className="mouse-scroll">
                  <div className="mouse">
                    <div className="wheel"></div>
                  </div>

                  <div className="arrow"></div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}

export default LandingSection;
