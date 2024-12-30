import cocbg from "../../assets/illustration/coc-bg.jpg";
import { SPORTS } from "./Constants";
import HomeBackground from "../../components/homeBackground";
import "./register.css";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  return (
    <>
      <HomeBackground />
      <div className="flex w-full align-middle justify-center pt-5">
        <div className="w-[90%] py-10 mt-[80px]">
          <div className="flex gap-10 flex-wrap justify-center">
            {SPORTS.map((sport, index) => (
              <div
                className="sport-cont"
                key={index}
                onClick={(e) => {
                  navigate(`/register/${sport.name}`);
                }}
              >
                <img
                  className="object-center w-full h-[150px]"
                  src={sport.image}
                  alt=""
                />
                <div>
                  <h3 className="text-center text-gray-200 drop-shadow">
                    {sport.display}
                  </h3>
                  <p className="text-center ">Players: {sport.players}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
