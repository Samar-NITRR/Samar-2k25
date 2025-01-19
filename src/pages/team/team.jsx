import React from 'react';
import bgImage from '../../assets/illustration/teamBg.png';
import coBox from '../../assets/illustration/co_box.png';
import teamCard from '../../assets/illustration/teamCard.png';
import ocCard from '../../assets/illustration/ocCard.png';
import teamData from './teamData.json';
import coordinatorData from './coordinator.json';
import executiveData from './executive.json';
import './team.css';

function Team() {
  return (
    <div
      className="w-full min-h-screen bg-cover bg-fixed bg-center text-white pt-[80px]"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundColor: 'black',
      }}
    >
      {/* Section Heading */}
      <div className="text-center font-crossFly uppercase text-4xl font-extrabold py-10">
        <span className="text-white font-crossFly">TEAM</span>{' '}
        <span className="text-rose-500 font-crossFly">SHAURYA</span>
      </div>

      {/* Render Team Sections Dynamically */}
      {Object.keys(teamData).length > 0 ? (
        Object.keys(teamData).map((designation, index) => (
          <div key={index} className="py-10">
            {/* Designation Heading */}
            <div className="text-center font-crossFly text-3xl font-semibold mb-10 mt-5 relative group">
              {designation.split(/(?=[A-Z])/).join(' ')}
              <span className="absolute bottom-0 left-1/2 w-0 h-1 bg-rose-500 transition-all duration-300 transform -translate-x-1/2 group-hover:w-32" />
            </div>

            {/* Card Section */}
            <div className="flex justify-center flex-wrap gap-10 px-10 pb-10">
              {teamData[designation].map((member, idx) => (
                <div key={idx} className="flip-card w-[300px] h-[400px]">
                  <div className="flip-card-inner">
                    {/* Front of Card */}
                    <div className="flip-card-front relative rounded-lg overflow-hidden">
                      <img src={member.Photo} alt={`${member.Name}'s photo`} />
                      <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white text-center p-2">
                      <h2 className="text-lg font-bold uppercase">{member.Name}</h2>
                        {/* <p className="text-sm">{member.Branch}</p> */}
                      </div>
                    </div>

                    {/* Back of Card */}
                    <div
                      className="flip-card-back bg-gray-900 rounded-lg shadow-lg flex flex-col justify-end p-4"
                      style={{
                        backgroundImage:
                          designation === 'OverallCoordinator'
                            ? `url(${ocCard})`
                            : `url(${teamCard})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    >
                      {/* <h2 className="text-white text-lg font-bold text-center">{member.Name}</h2> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))
      ) : (
        <div className="text-center text-xl font-semibold py-10">
          No team data available.
        </div>
      )}

      {/* Coordinators Section */}
      <div className="py-10">
        <div className="text-center font-crossFly text-3xl font-semibold mb-10 mt-5">
          Coordinators
        </div>
        {Object.entries(coordinatorData).map(([domain, members], idx) => (
          <div key={idx} className="py-5">
            <h3 className="text-xl font-vermin font-bold text-center mb-5">{domain}</h3>
            <ul className="flex flex-wrap justify-center gap-5">
              {members.map((member, i) => (
                <li
                  key={i}
                  className="relative flex items-center justify-center text-white p-4 rounded-lg shadow-md w-[210px] h-[160px]"
                  style={{
                    backgroundImage: `url(${coBox})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    color: '#ffffff',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    borderRadius: '10px',
                  }}
                >
                  <span className="z-10">{member}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Executives Section */}
      <div className="py-10">
        <div className="text-center font-crossFly text-3xl font-semibold mb-10 mt-5">
          Executives
        </div>
        {Object.entries(executiveData).map(([domain, members], idx) => (
          <div key={idx} className="py-5">
            <h3 className="text-xl font-vermin font-bold text-center mb-5">{domain}</h3>
            <ul className="flex flex-wrap justify-center gap-5">
              {members.map((member, i) => (
                <li
                  key={i}
                  className="relative flex items-center justify-center text-white p-4 rounded-lg shadow-md w-[210px] h-[80px] bg-white/10 border border-[#f43f5d60] backdrop-blur-md"
                >
                  <h4 className="font-semibold text-center">{member}</h4>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
