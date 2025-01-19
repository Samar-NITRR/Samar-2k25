import "./about.css";

function About() {

  return (
    <>
      <div id="about" className="mt-48">
        <div
          className="About"
          initial="hidden"
        >
          <h1
            className="font-knightWarrior text-7xl tracking-widest drop-shadow-[3px_3px_0px_#000]"
						data-aos="fade-up"
          >
            About{" "}
            <span className="text-7xl italic text-rose-500 font-knightWarrior glow-text mb-8">
              Us
            </span>
          </h1>

          <div
            className="underline-glow"
						data-aos="fade-up"
          ></div>

          <div className="grid-container">
            {[
              {
                title: "Samar",
                description:
                  " SAMAR is the Annual College Sports Festival of NIT Raipur. It is a four-day mega eventheld during the winter that provides a platform for sports and games",
              },
              {
                title: "Our Mission",
                description:
                  "To provide a platform for students to showcase their athletic skills and nurture a spirit of sportsmanship.",
              },
              {
                title: "Our Team",
                description:
                  "A dedicated group of students and faculty members working tirelessly to make SAMAR a grand success.",
              },
              {
                title: "Our Values",
                description:
                  "Integrity, inclusivity, and commitment to creating a vibrant sporting community.",
              },
              {
                title: "Our Impact",
                description:
                  "Over 12,000 participants from 35+ institutions every year, making SAMAR a hallmark of excellence.",
              },
              {
                title: "Our Future",
                description:
                  "To expand SAMAR’s reach and continue to set benchmarks in college sports festivals.",
              },
            ].map((box, index) => (
              <div
                key={index}
                className="grid-box p-20 border-2 border-white"
                whileHover={{ scale: 1.05 }}
								data-aos="flip-up"
              >
                <h2 className="grid-box-heading font-crossFly text-xl uppercase">
                  {box.title}
                </h2>
                <p className="text-1xl font-speedPixel mt-10">
                  {box.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
