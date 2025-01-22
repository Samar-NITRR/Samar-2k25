import React from 'react';
import Marquee from 'react-fast-marquee';
import img1 from '/sponsors/asianNews.jpg';
import img2 from '/sponsors/asianPaints.jpeg';
import img3 from '/sponsors/creda.png';
import img4 from '/sponsors/decathlon.jpeg';
import img5 from '/sponsors/dermaFusion.png';
import img7 from '/sponsors/fml.jpeg';
import img8 from '/sponsors/hiRaipur.png';
import img9 from '/sponsors/ndc.jpg';
import img10 from '/sponsors/suyash.jpeg';
import '../homeComponents/sponsors.css';

function Sponsors() {
  return (
    <div className="Sponsors">
        <h1 className="font-crossFly text-3xl md:text-4xl drop-shadow-[3px_3px_0px_#000]"> Our <span className="text-3xl md:text-4xl italic text-rose-500 font-crossFly  glow-text mb-8 "> Sponsors </span> </h1>

       <div className="underline-glow"></div>

      <div className="marquee-container">
        <Marquee direction="right" speed={100}>
          <div className="mr-10 h-[200px]">
            <img src={img5} alt="" className='h-full mr-14'/>
          </div>
          <div className="mr-10 h-[200px]">
            <img src={img7} alt="" className='h-full mr-14'/>
          </div>
          <div className="mr-10 h-[200px]">
            <img src={img8} alt="" className='h-full mr-14'/>
          </div>
          <div className="mr-10 h-[200px]">
            <img src={img9} alt="" className='h-full mr-14'/>
          </div>
          <div className="mr-10 h-[200px]">
            <img src={img10} alt="" className='h-full mr-14'/>
          </div>
          <div className="mr-10 h-[200px]">
            <img src={img1} alt="" className='h-full mr-14'/>
          </div>
          <div className="mr-10 h-[200px]">
            <img src={img2} alt="" className='h-full mr-14'/>
          </div>
          <div className="mr-10 h-[200px]">
            <img src={img3} alt="" className='h-full mr-14'/>
          </div>
          <div className="mr-10 h-[200px]">
            <img src={img4} alt="" className='h-full mr-14'/>
          </div>
        </Marquee>
      </div>
    </div>
  );
}


export default Sponsors;
