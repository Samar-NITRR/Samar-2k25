import cricket from "../../assets/register/cricket.jpg";
import badminton from "../../assets/register/badminton.jpg";
import badminton2 from "../../assets/register/badminton2.jpeg";
import basketball from "../../assets/register/basketball.jpeg";
import vollyball from "../../assets/register/vollyball.jpeg";
import football from "../../assets/register/football.jpg";
import chess from "../../assets/register/chess.jpg";
import athletics from "../../assets/register/athletics.jpg";
import hockey from "../../assets/register/hockey.webp";
import handball from "../../assets/register/handball.jpg";
import kabaddi from "../../assets/register/kabaddi.jpeg";
import khokho from "../../assets/register/kho-kho.png";
import tt1 from "../../assets/register/tt1.jpeg";
import tt2 from "../../assets/register/tt2.jpg";


const BADMINTON_SINGLES_RULES = [
  "Participants must be current students of the college.",
  "Each participant can register for only one category: singles or doubles.",
  "The last date for registration is [Insert Date].",
  "Participants must bring their own rackets; shuttlecocks will be provided.",
  "Matches will follow the standard rules of singles badminton.",
  "The organizing committee reserves the right to modify rules as per event requirements.",
  "Players must adhere to the code of conduct and display sportsmanship at all times.",
  "Any form of misconduct will lead to disqualification.",
  "Participants are responsible for their health and well-being.",
  "The organizing committee will not be liable for any injuries sustained during the matches.",
];

const BADMINTON_DOUBLES_RULES = [
  "A team must consist of 2 players.",
  "Participants must be current students of the college.",
  "Each participant can register for only one category: singles or doubles.",
  "The last date for registration is [Insert Date].",
  "Participants must bring their own rackets; shuttlecocks will be provided.",
  "Matches will follow the standard rules of doubles badminton.",
  "The organizing committee reserves the right to modify rules as per event requirements.",
  "Players must adhere to the code of conduct and display sportsmanship at all times.",
  "Any form of misconduct will lead to disqualification.",
  "Participants are responsible for their health and well-being.",
  "The organizing committee will not be liable for any injuries sustained during the matches.",
];
const CRICKET_RULES = [
  "A team must consist of 11 players, including a captain and a vice-captain.",
  "Each team is allowed a maximum of 2 substitute players.",
  "Participants must be current students of the college.",
  "Each participant can register for only one cricket team.",
  "The last date for team registration is [Insert Date].",
  "Teams must wear proper cricket uniforms during the matches.",
  "Teams are required to bring their own equipment, including bats, balls, and gloves.",
  "Matches will follow the standard rules of one-day cricket.",
  "The organizing committee reserves the right to modify rules as per event requirements.",
  "Players must adhere to the code of conduct and display sportsmanship at all times.",
  "Any form of misconduct will lead to disqualification.",
  "Participants are responsible for their health and well-being.",
  "The organizing committee will not be liable for any injuries sustained during the matches.",
];
const BASKETBALL_RULES = [];
const VOLLYBALL_RULES = [];
const FOOTBALL_RULES = [];
const CHESS_RULES = [];
const ATHLETICS_RULES = [];
const HOCKEY_RULES = [];
const HANDBALL_RULES = [];
const KABADDI_RULES = [];
const KHOKHO_RULES = [];
const TABLE_TENNIS_RULES = [];

export const SPORTS = [
  {
    name: "cricket",
    display: "Cricket",
    players: 15,
    image: cricket,
    rules: CRICKET_RULES,
  },
  {
    name: "badminton_(singles)",
    display: "Badminton (Singles)",
    players: 1,
    image: badminton,
    rules: BADMINTON_SINGLES_RULES,
  },
  {
    name: "badminton_(doubles)",
    display: "Badminton (Doubles)",
    players: 2,
    image: badminton2,
    rules: BADMINTON_DOUBLES_RULES,
  },
  {
    name: "basketball",
    display: "Basketball",
    players: 5,
    image: basketball,
    rules: BASKETBALL_RULES,
  },
  {
    name: "vollyball",
    display: "Vollyball",
    players: 5,
    image: vollyball,
    rules: VOLLYBALL_RULES,
  },
  {
    name: "football",
    display: "Football",
    players: 5,
    image: football,
    rules: FOOTBALL_RULES,
  },
  {
    name: "chess",
    display: "Chess",
    players: 1,
    image: chess,
    rules: CHESS_RULES,
  },
  {
    name: "athletics",
    display: "Athletics",
    players: 1,
    image: athletics,
    rules: ATHLETICS_RULES,
  },
  {
    name: "hockey",
    display: "Hockey",
    players: 5,
    image: hockey,
    rules: HOCKEY_RULES,
  },
  {
    name: "handball",
    display: "Handball",
    players: 5,
    image: handball,
    rules: HANDBALL_RULES,
  },
  {
    name: "kabaddi",
    display: "Kabaddi",
    players: 5,
    image: kabaddi,
    rules: KABADDI_RULES,
  },
  {
    name: "khokho",
    display: "Kho Kho",
    players: 5,
    image: khokho,
    rules: KHOKHO_RULES,
  },
  {
    name: "tt_singles",
    display: "Table Tennis (Singles)",
    players: 1,
    image: tt1,
    rules: TABLE_TENNIS_RULES,
  },
  {
    name: "tt_doubles",
    display: "Table Tennis (Doubles)",
    players: 2,
    image: tt2,
    rules: TABLE_TENNIS_RULES,
  }
];

export const SHE_GROUPS = [
  "BIOTECH + IT + MECH + M.TECH",
  "CIVIL + CSE + MCA + BIOMED",
  "MINING + META + ARCH + M.SC",
  "CHEM + ELEC. + ECE",
];
export const HE_GROUPS = [
  "CIVIL + CSE + MCA",
  "MINING + ARCH + M.SC + M.TECH",
  "BIOTECH + IT",
  "META + BIOMED",
  "MECH + ECE",
  "CHEM + ELEC.",
];
