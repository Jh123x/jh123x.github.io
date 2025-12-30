import DSO_Logo from "../img/logos/dso_logo.jpeg";
import NUS_LOGO from "../img/logos/nus_logo_full.svg";
import FORUS_LABS_LOGO from "../img/logos/forus_labs.svg";
import SHOPEE_LOGO from "../img/logos/shopee_logo.svg";
import BYTEDANCE_LOGO from "../img/logos/bytedance.svg";
import { Entry } from "./types";


/**
 * Latest experience at the front of the array
 */
const workExperience: Entry[] = [
  {
    year: "Jan 2025 - Present",
    logo: BYTEDANCE_LOGO,
    title: "Backend Software Engineer II (Global Payments)",
    subTitle: "Bytedance Pte Ltd",
    text: "Creating and managing user payment information for Bytedance products, maintaining APIs for payment processing, and ensuring the security of payment information.",
  },
  {
    year: "Jun 2023 - Dec 2024",
    logo: BYTEDANCE_LOGO,
    title: "Backend Software Engineer (Global Payments)",
    subTitle: "Bytedance Pte Ltd",
    text: "Creating and managing user payment information for Bytedance products, maintaining APIs for payment processing, and ensuring the security of payment information.",
  },
  {
    year: "Aug 2022 - May 2023",
    logo: NUS_LOGO,
    title:
      "CS2107 (Introduction to Information Security) Assignment Teaching Assistant",
    subTitle: "National University of Singapore",
    text: "In this role, my responsibilities includes creating CTF style assignments, holding CTF consultations, answering queries and marking assignments. We work closely with the professors to ensure that the assignment questions covers the scope of the lecture and bridge the theory taught with lecture with practical applications.",
  },
  {
    year: "May 2022 - Aug 2022",
    title: "Security Research Intern",
    subTitle: "DSO National Laboratories",
    logo: DSO_Logo,
    text: "During my internship, I research on tools for automated vulnerability discovery and analysis. I also developed a proof of concept for finding vulnerabilities in binary code. These tools are useful in automatic vulnerability discovery and analysis. As this is not a commercial product, I am unable to disclose the details of the project.",
  },
  {
    year: "May 2022",
    title: "CP2106 (Orbital Project) Teaching Assistant",
    logo: NUS_LOGO,
    subTitle: "National University of Singapore",
    text: "Together with my team from NUS Greyhats, we conducted a web security workshop for the students of CP2106. It covers concepts ranging from SQL injection to XSS. We also include the source code for the CTF. It aims to promote better security in the projects by the students.",
    link: {
      github: {
        link: "https://github.com/NUSGreyhats/Orbital-2022",
        tooltip: "GitHub Repository",
      },
    },
  },
  {
    year: "Aug 2021 - Nov 2021",
    title: "Part Time Fullstack Engineering Intern",
    subTitle: "Forus Labs",
    logo: FORUS_LABS_LOGO,
    text: "During my internship, I worked on CI/CD Pipelines and flutter development for the Checkist application. The application is available in the Google Play Store.",
    link: {
      google: {
        link: "https://play.google.com/store/apps/details?id=com.foruslabs.checkist&hl=en_SG&gl=US&pli=1",
        tooltip: "Google Play Store",
      }
    },
  },
  {
    year: "Aug 2021 - Nov 2021",
    title: "CS2103T (Software Engineering Project) Senior Student Mentor",
    logo: NUS_LOGO,
    subTitle: "National University of Singapore",
    text: "In this role, my responsibilities include guiding students on technical difficulties encountered within their assignments and creating solutions.",
  },
  {
    year: "May 2021 - Jul 2021",
    title: "Software Engineering Intern (Backend)",
    subTitle: "Shopee Singapore",
    logo: SHOPEE_LOGO,
    text: "During my internship, I worked on projects related to the backend of Shopee's e-commerce platform. This includes the usage of Golang, Python2, Django and MySQL.",
  },
  {
    year: "May 2021",
    title: "CP2106 (Orbital Project) Teaching Assistant",
    logo: NUS_LOGO,
    subTitle: "National University of Singapore",
    text: "Together with my team from NUS Greyhats, we conducted a web security workshop for the students of CP2106.",
    link: {
      youtube: {
        link: "https://www.youtube.com/watch?v=yUs9zKqGJDU",
        tooltip: "YouTube Video",
      },
      github: {
        link: "https://github.com/NUSGreyhats/Orbital-2021",
        tooltip: "GitHub Repository",
      },
    },
  },
  {
    year: "Jan 2021 - May 2021",
    logo: NUS_LOGO,
    title:
      "CS2107 (Introduction to Information Security) Assignment Teaching Assistant",
    subTitle: "National University of Singapore",
    text: "In this role, my responsibilities includes creating CTF style assignments, hold consultations and marking assignments.",
  },
  {
    year: "Jan 2021 - Apr 2021",
    title: "CS2103T (Software Engineering Project) Student Mentor",
    logo: NUS_LOGO,
    subTitle: "National University of Singapore",
    text: "In this role, my responsibilities include guiding students on technical difficulties encountered within their assignments and creating solutions.",
  },
];

export default workExperience;
