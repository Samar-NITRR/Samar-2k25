import { useState, useRef } from "react";
import {
  RazorpayButton,
  RazorpayButton3,
  RazorpayButton4,
} from "./payment.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import HoverAudio from "../../assets/audio/buttonHoverGTA.mp3";

import SizeChart from "../../assets/sizeChart.jpg";
import callofduty from "../../assets/merchandise/call_of_duty.png";
import valorant from "../../assets/merchandise/valorant.png";
import clashofclans from "../../assets/merchandise/clash_of_clans.png";
import CricketBackground from "../../assets/customIllustration/cricketBackground.jpg";

import "../../../globalStyles.css";

function Merchandise() {
  const [count, setCount] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const hoverAudioRef = useRef(new Audio(HoverAudio));

  const handleHover = () => {
    hoverAudioRef.current.play();
  };

  const increment = () => setCount(count < 3 ? count + 1 : 3);
  const decrement = () => setCount(count > 1 ? count - 1 : 1);

  const buttonMap = {
    1: <RazorpayButton />,
    2: <RazorpayButton3 />,
    3: <RazorpayButton4 />,
  };

  const imgarray = {
    1: callofduty,
    2: valorant,
    3: clashofclans,
  };

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <>
      <img
        src={CricketBackground}
        alt="Background"
        className="fixed w-full h-full object-cover"
      />

      <div className="relative flex flex-col justify-evenly items-center pt-16 bg-cover bg-center bg-no-repeat w-full h-full">
        <div className="heading_merch text-xl md:text-3xl xl:text-4xl mt-20 mb-9 font-vermin text-white shadow-lg text-center">
          MERCHANDISE
        </div>

        <div className="w-screen h-fit p-3 rounded-xl text-white flex flex-row justify-center">
          <div className="flex flex-col lg:flex-row rounded-3xl md:p-12 border-2 border-blue-800 px-7 pb-14 backdrop-blur bg-black/30 box-border md:w-auto md:max-w-7xl md:justify-between md:items-center">
            <div className="mid-section flex-1 mb-8 md:mb-0">
              <img
                src={imgarray[count]}
                alt="Merch 1"
                className="cu-main-image w-full max-w-full h-[350px] md:h-auto rounded-xl object-contain"
              />

              <div className="flex justify-center items-center gap-4  md:flex-row md:justify-evenly md:mt-5">
                <button
                  className="sign-left text-xs bg-white text-black border border-gray-300 rounded-md py-2 px-4 shadow-md transition-transform duration-300 transform hover:scale-105"
                  onClick={decrement}
                >
                  <FontAwesomeIcon icon={faArrowLeft} />
                </button>

                <span className="team-name text-xs font-bold md:text-sm font-vermin tracking-widest">
                  {count === 1
                    ? "Call Of Duty"
                    : count === 2
                    ? "Valorant"
                    : "clash of clans"}
                </span>

                <button
                  className="sign-right text-xs bg-white text-black border border-gray-300 rounded-md py-2 px-4 shadow-md transition-transform duration-300 transform hover:scale-105"
                  onClick={increment}
                >
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </div>
            </div>

            <div className="w-full max-w-[500px] md:w-[400px] xl:w-[500px] mt-6 ml-20 text-center md:mt-16">
              <p className="text-xl md:text-4xl font-semibold text-white font-vermin tracking-wider underline">
                SAMAR 2025 MERCH
              </p>
              <p className="cu-subtext text-lg md:text-2xl font-speedPixel text-violet-200 mt-14 text-shadow-md tracking-wider">
                Fuel your passion for the game!
              </p>
              <div className="cu-special-offer">
                <p className="cu-special-text text-sm md:text-lg font-speedPixel italic text-violet-200 tracking-wider mt-2">
                  It's all about celebrating your team. <br />
                  Wear your pride, live the action!
                </p>
              </div>

              <div className="samar-sizes mt-2 md:mt-7 mb-4 flex justify-center">
                <button
                  onMouseEnter={handleHover}
                  className="mt-16 block border-2 px-8 py-2 bg-violet-600 text-white text-xs italic font-crossFly rounded-tl-xl rounded-br-xl hover:rounded-lg hover:text-white hover:scale-[.97] transition-all ease-in-out duration-75"
                  onClick={toggleModal}
                >
                  GET THE RIGHT SIZE <br /> FOR YOU
                </button>
              </div>

              <div className="total text-lg font-bold mt-10">
                <span className="lol font-speedPixel">Total Amount: </span>
                <span className="lola text-white font-speedPixel italic">
                  {365}/-
                </span>
              </div>
              <div className="merch-btn mt-3">{buttonMap[count]}</div>
            </div>
          </div>
        </div>

        {isModalOpen && (
          <div className="modal fixed inset-0 bg-black/50 flex justify-center items-center z-50">
            <div className="modal-content bg-white p-5 rounded-lg relative">
              <span
                className="close-button w-[20px] h-[20px] lg:w-[50px] lg:h-[50px] m-5 flex flex-row justify-center items-center text-center absolute top-0 right-0 bg-red-600 hover:bg-red-700 rounded-full cursor-pointer text-white text-3xl hover:text-white transition duration-200"
                onClick={toggleModal}
              >
                &times;
              </span>
              <img
                src={SizeChart}
                alt="Size Chart"
                className="size-chart-image max-h-[60vh] max-w-[80vw]"
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Merchandise;
