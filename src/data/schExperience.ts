import NUS_LOGO from "../img/logos/nus_logo_full.svg";
import UNC_LOGO from "../img/logos/unc_logo.svg";
import JJC_LOGO from "../img/logos/jurong_jc.png";
import { Entry } from "./types";

/**
 * Latest experience at the front of the array
 */
const schExperience: Entry[] = [
  {
    year: "Aug 2019 - May 2023",
    logo: NUS_LOGO,
    title: "Bachelor of Computing (Honours) in Computer Science",
    subTitle: "National University of Singapore",
    text: "Studied Computer Science at the National University of Singapore. I am currently in my final year of my undergraduate studies.",
  },
  {
    year: "Jan 2022 - May 2022",
    logo: UNC_LOGO,
    title: "Exchange Programme",
    subTitle: "University of North Carolina at Chapel Hill",
    text: "I went on exchange at the University of North Carolina at Chapel Hill. I am taking courses in Computer Science.",
  },
  {
    year: "Feb 2019 - May 2019",
    logo: NUS_LOGO,
    title: "iBlocs for CS1010X & CS2030",
    subTitle: "National University of Singapore",
    text: "I was a student under the iBlocs programme for CS1010X Programming Methodology and CS2030 Programming Methodology II.",
  },
  {
    year: "Jan 2015 - Dec 2016",
    logo: JJC_LOGO,
    title: "Science Course",
    subTitle: "Jurong Junior College",
    text: "I studied Science at Jurong Junior College. I took the A Level H2 Mathematics, H2 Physics, H2 Chemistry, H1 Economics, H1 General Paper, H1 Mother Tongue (Chinese) and H1 Project work.",
  }
];

export default schExperience;
