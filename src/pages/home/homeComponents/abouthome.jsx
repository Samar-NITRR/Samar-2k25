import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './about.css';

function About() {
  const aboutRef = useRef(null);
  const isInView = useInView(aboutRef, { once: false, amount: 0.5 });

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.1, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  return (
    <motion.div
      className="About"
      ref={aboutRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerContainer}
    >
      {/* Heading */}
      <motion.h1 className="font-knightWarrior text-7xl tracking-widest drop-shadow-[3px_3px_0px_#000]" variants={fadeInUp}>
        About{' '}
        <span className="text-7xl italic text-rose-500 font-knightWarrior glow-text mb-8">Us</span>
      </motion.h1>

      {/* Glowing Underline */}
      <motion.div className="underline-glow" variants={fadeInUp}></motion.div>

      {/* Grid of Boxes with Animations */}
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
    <motion.div
      key={index}
      className="grid-box p-20 border-2 border-white"
      whileHover={{ scale: 1.05 }}
      variants={fadeInUp}
    >
      <h2 className="grid-box-heading font-crossFly text-xl uppercase">{box.title}</h2>
      <p className="text-1xl font-speedPixel mt-10">{box.description}</p>
    </motion.div>
  ))}
</motion.div>

    </motion.div>
  );
}

export default About;
