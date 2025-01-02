import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './about.css';

const TeamButton = () => {
    return(
        <button className="relative group select-none"onClick={() => console.log('Spin!')} >
            <div className="absolute inset-0 bg-amber-700 rounded-lg translate-y-2">
                <div className="absolute inset-0 opacity-20 rounded-lg" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.4' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3Ccircle cx='13' cy='13' r='1'/%3E%3C/g%3E%3C/svg%3E")`, }} />
            </div>
            
            <div className="relative px-12 py-4 bg-yellow-400 hover:bg-yellow-300 rounded-lg transform transition-all duration-150 active:translate-y-2 shadow-lg overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`, }} />
                <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent" />
                <span className="relative text-white text-3xl font-crossFly italic uppercase tracking-wider drop-shadow-[2px_2px_0px_#000]">
                    TEAM
                </span>
            </div>
        </button>
    )
}

function About() {
	const aboutRef = useRef(null);
	const isInView = useInView(aboutRef, { once: false, amount: 0.5 });

	const fadeInUp = {
		hidden: { opacity: 0, y: 50 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.01, ease: "easeOut" } }, // Reduced duration to 0.05
	};

	const staggerContainer = {
		hidden: { opacity: 0 },
		visible: {
		opacity: 1,
		transition: { staggerChildren: 0.3 },
		},
	};

	return (
		<>
			<motion.div className="About" ref={aboutRef} initial="hidden" animate={isInView ? "visible" : "hidden"} variants={staggerContainer} >
				<motion.h1 className="font-knightWarrior text-7xl tracking-widest drop-shadow-[3px_3px_0px_#000]" variants={fadeInUp}>
					About{' '}
					<span className="text-7xl italic text-rose-500 font-knightWarrior glow-text mb-8">Us</span>
				</motion.h1>

				<motion.div className="underline-glow" variants={fadeInUp}></motion.div>

				<motion.div className="grid-container" variants={staggerContainer}>
					{[
						{
							title: 'Samar',
							description:
							' SAMAR is the Annual College Sports Festival of NIT Raipur. It is a four-day mega eventheld during the winter that provides a platform for sports and games',
						},
						{
							title: 'Our Mission',
							description:
							'To provide a platform for students to showcase their athletic skills and nurture a spirit of sportsmanship.',
						},
						{
							title: 'Our Team',
							description:
							'A dedicated group of students and faculty members working tirelessly to make SAMAR a grand success.',
						},
						{
							title: 'Our Values',
							description:
							'Integrity, inclusivity, and commitment to creating a vibrant sporting community.',
						},
						{
							title: 'Our Impact',
							description:
							'Over 12,000 participants from 35+ institutions every year, making SAMAR a hallmark of excellence.',
						},
						{
							title: 'Our Future',
							description:
							'To expand SAMAR’s reach and continue to set benchmarks in college sports festivals.',
						},
					].map((box, index) => (
						<motion.div key={index} className="grid-box p-20 border-2 border-white" whileHover={{ scale: 1.05 }} variants={fadeInUp} >
							<h2 className="grid-box-heading font-crossFly text-xl uppercase">{box.title}</h2>
							<p className="text-1xl font-speedPixel mt-10">{box.description}</p>
						</motion.div>
					))}
				</motion.div>
			</motion.div>

			<div className='flex flex-col justify-center items-center mb-36'>
				<div className='w-full flex flex-col justify-center items-center backdrop-blur-md rounded-[25px] p-14 '>
					<h1 className='font-crossFly uppercase text-3xl drop-shadow-[3px_3px_0px_#000]'>Meet the Team of Samar</h1>
					<a href="/team">
						<TeamButton/>
					</a>
				</div>
			</div>
		</>
	);
}

export default About;