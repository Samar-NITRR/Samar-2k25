import React, { useEffect, useState } from "react";
import CollegeForm from "./CollegeForm";
import OptionForm from "./OptionForm";
import InputForm from "./InputForm";
import TeamLeaderForm from "./TeamLeaderForm";
import Rules from "./Rules";
import MemberForm from "./MemberForm";
import { useParams } from "react-router-dom";
import HomeBackground from "../../components/homeBackground";
import { HE_GROUPS, SHE_GROUPS, SPORTS } from "./Constants";
import UnderConstruction from "../underConstruction";
import AOS from "aos";
import "aos/dist/aos.css";

const Registration2 = () => {
  const { sport: sport_name } = useParams();
  const [sport, setSport] = useState(null);
  const [college, setCollege] = useState("");
  const [category, setCategory] = useState("");
  const [teamName, setTeamName] = useState("");
  const [leaderDetails, setLeaderDetails] = useState({});
  const [memberDetails, setMemberDetails] = useState([]);
  const [step, setStep] = useState(1);

  const scriptURL =
    "https://script.google.com/macros/s/AKfycbwxrQMHKa2hYdXgZrJ-EfKY7_sEDGNdt--aEB175uQHFNr7kLA1LxINyWAXP9ACwBqu/exec";

  useEffect(() => {
    const s = SPORTS.find((sport) => sport.name === sport_name) || null;
    console.log(s);
    setSport(s);
    AOS.init();
  }, []);

  useEffect(() => {
    if (!college) setStep(1);
    else if (!category) setStep(2);
    else if (!teamName) setStep(3);
    else if (
      !leaderDetails.name ||
      !leaderDetails.year ||
      !leaderDetails.phone ||
      !leaderDetails.email
    )
      setStep(4);
    else setStep(5);
  }, [sport, college, category, teamName, leaderDetails, step]);

  const handleSubmit = async () => {
    const payload = {
      sport: sport.name,
      college,
      category,
      teamName,
      leaderName: leaderDetails.name,
      leaderEmail: leaderDetails.email,
      leaderPhone: leaderDetails.phone,
      leaderYear: leaderDetails.year,
    };

    memberDetails.forEach((v, i) => {
      payload[`member_${i + 2}_name`] = v.name;
      payload[`member_${i + 2}_year`] = v.year;
    });
    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(payload).toString(),
      });

      if (response.ok) {
        alert("Form submitted successfully!");
      } else {
        const errorText = await response.text();
        alert("Form submission failed: " + errorText);
      }
    } catch (error) {
      alert("An error occurred: " + error.message);
    }
  };

  return (
    <>
      {!sport ? (
        <UnderConstruction />
      ) : (
        <>
          <HomeBackground />
          <div className="flex-col flex items-center justify-center w-full mt-[80px]">
            <h1
              style={{ textShadow: "2px 4px 5px black" }}
              className="text-gray-300 font-crossFly uppercase text-center text-2xl md:text-3xl lg:text-4xl font-extrabold mt-10"
            >
              {sport.display}
            </h1>
            <div className="w-[97%] flex flex-col justify-start items-center lg:flex-row lg:items-start  backdrop-blur-[10px] bg-black bg-opacity-60 mt-[80px] mb-[80px] px-2 rounded-[30px] shadow-2xl">
              <div className="w-full lg:w-1/2">
                <Rules sport={sport} />
              </div>
              <div className="px-8 py-6 border-t lg:border-t-0 lg:border-l-2 w-full h-full lg:w-1/2">
                <h3
                  style={{ textShadow: "2px 2px 5px black" }}
                  className=" text-center text-3xl lg:text-4xl text-rose-500 drop-shadow-lg font-crossFly uppercase font-bold mb-4"
                >
                  Form
                </h3>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit();
                  }}
                >
                  <CollegeForm value={college} setValue={setCollege} />
                  <OptionForm
                    index="2"
                    ques={"Category"}
                    value={category}
                    setValue={setCategory}
                    options={["Male", "Female"]}
                    enabled={true}
                  />
                  {college !== "NIT Raipur" && (
                    <InputForm
                      value={teamName}
                      setValue={setTeamName}
                      ques={"Team Name?"}
                      enabled={true}
                    />
                  )}
                  {college === "NIT Raipur" && (
                    <OptionForm
                      index="4"
                      ques={"Group"}
                      value={teamName}
                      setValue={setTeamName}
                      options={category == "Female" ? SHE_GROUPS : HE_GROUPS}
                      enabled={true}
                    />
                  )}
                  <TeamLeaderForm
                    leaderDetails={leaderDetails}
                    setLeaderDetails={setLeaderDetails}
                    enabled={true}
                  />
                  <MemberForm
                    value={memberDetails}
                    setValue={setMemberDetails}
                    count={sport.players - 1}
                    enabled={true}
                  />
                  <div className="flex gap-3 mt-2">
                    <button
                      className="focus:outline-none text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 mt-4"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Registration2;
