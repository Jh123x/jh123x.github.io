import jh123x from "../img/projects/jh123x.com/homepage.png";
import fyp from "../img/projects/fyp/homepage.png";
import goshell from "../img/projects/go_shell.svg";
import jiou from "../img/projects/jiou.png";
import typeracerbot from "../img/projects/typeracer_bot.jpg";
import pdfcombiner from "../img/projects/pdf_combiner.svg";
import ow_toolkit from "../img/projects/ow_toolkit.png";
import reversi_sim from "../img/projects/reversi_sim.png";
import wordle_solver from "../img/projects/wordle_solver.png";
import comp562_proj from "../img/projects/comp562_proj.png";
import code2gather from "../img/projects/code2gather.png";
import mcgymmy from "../img/projects/mcgymmy.png";
import ssrf from "../img/projects/ssrf.png";
import orderonus from "../img/projects/orderonus.png";
import not_schrodinger from "../img/projects/not_schrodinger_box.png";
import govalidate from "../img/projects/go_validate.png";

const portfolios = [
  {
    categories: ["Golang"],
    image: govalidate,
    links: {
      github: {
        link: "https://github.com/Jh123x/go-validate",
        tooltip: "GitHub Repository",
      },
      link: {
        link: "https://jh123x.com/projects/go-validate/",
        tooltip: "Project Details",
      }
    },
    title: "Go Validate",
    text: "A simple library for validations in Pure Go."
  },
  {
    categories: ["Hugo", "Markdown"],
    image: jh123x,
    links: {
      link: { link: "https://jh123x.com", tooltip: "Website" },
    },
    title: "Blog Website",
    text: "Created using Hugo",
  },
  {
    categories: [
      "ReactJs",
      "Django",
      "Python",
      "PostgreSQL",
      "Docker",
      "Judge0",
    ],
    image: fyp,
    links: {
      link: {
        link: "https://python.jh123x.com",
        tooltip: "Test Development of the Project",
      },
      link2: {
        link: "https://jh123x.com/projects/visualpython/",
        tooltip: "Project Page",
      },
    },
    title: "VisualPython",
    text: "A Visual Programming Platform for learning Python for my Final Year Project.",
  },
  {
    title: "Go Shell",
    image: goshell,
    categories: ["Go", "Shell"],
    text: "A simple shell written in Go, complete with unit tests and github actions pipelines.",
    links: {
      github: {
        link: "https://github.com/Jh123x/go-shell",
        tooltip: "GitHub Repository",
      },
      link: {
        link: "https://jh123x.com/projects/go-shell/",
        tooltip: "Project Details",
      },
    },
  },
  {
    title: "Orderonus",
    image: orderonus,
    text: "It offers a queue management platform for all f&b admins running stalls. This was a project for Hack&Roll 2023",
    links: {
      github: "https://github.com/Orderonus",
      link: {
        link: "https://devpost.com/software/orderonus",
        tooltip: "Devpost",
      },
    },
  },
  {
    title: "JioU",
    text: "JioU is a simple, yet powerful, way to connect with others. Everyone can participate in events to help others.",
    image: jiou,
    links: {
      github: "https://github.com/KTV-Capoos",
      link: {
        link: "https://jh123x.com/projects/lifehack2022/",
        tooltip: "Project Details",
      },
    },
  },
  {
    title: "Typeracer Bot",
    image: typeracerbot,
    categories: ["Python", "PyAutoGui", "OCR"],
    text: "A simple bot that plays typeracer for you very quickly.",
    links: {
      github: "https://github.com/Jh123x/Typeracer-bot",
      link: {
        link: "https://jh123x.com/projects/typeracer-bot/",
        tooltip: "Project Details",
      },
    },
  },
  {
    title: "PDF Combiner",
    image: pdfcombiner,
    categories: ["Python", "PyPDF2"],
    text: "A simple CLI application that combines multiple PDF files into one.",
    links: {
      github: "https://github.com/Jh123x/PDF-Combiner",
      link: {
        link: "https://jh123x.com/projects/pdf-combiner/",
        tooltip: "Project Details",
      },
    },
  },
  {
    title: "Overwatch Toolkit",
    image: ow_toolkit,
    categories: ["ReactJs", "NodeJs", "JavaScript"],
    text: "A toolkit for Overwatch players.",
    links: {
      github: "https://github.com/Jh123x/overwatch-tools",
      link: {
        link: "https://jh123x.com/projects/overwatch-tools/",
        tooltip: "Project Details",
      },
    },
  },
  {
    title: "Reversi Bot",
    image: reversi_sim,
    categories: ["Python", "Alpha-Beta Pruning", "Minimax", "Monte Carlo"],
    text: "A game of reversi which includes a bot that plays Reversi (Othello) using Alpha-Beta Pruning, Minimax, and Monte Carlo.",
    links: {
      github: "https://github.com/Jh123x/Reversi-Simulator",
      link: {
        link: "https://jh123x.com/projects/reversi-simulator/",
        tooltip: "Project Details",
      },
    },
  },
  {
    title: "Wordle Solver",
    image: wordle_solver,
    categories: ["Python", "Statistical Analysis"],
    text: "A simple CLI application that solves wordle puzzles with a GUI game",
    links: {
      github: "https://github.com/Jh123x/Wordle-Solver",
      link: {
        link: "https://jh123x.com/projects/wordle-solver/",
        tooltip: "Project Details",
      },
    },
  },
  {
    title: "COMP562 Project",
    image: comp562_proj,
    categories: ["Python", "PyTorch", "Deep Learning"],
    text: "A project for COMP562: Introduction to Machine Learning",
    links: {
      github: "https://github.com/COMP562-2022-Group-1",
      link: {
        link: "https://comp562-2022-group-1.github.io/Model-Training/US2016_Elections_code.html",
        tooltip: "Model Training and evaluation",
      },
      link2: {
        link: "https://comp562-2022-group-1.github.io/",
        tooltip: "Project Page",
      },
    },
  },
  {
    title: "Code2Gather",
    image: code2gather,
    categories: [
      "ReactJs",
      "NodeJs",
      "JavaScript",
      "Microservices",
      "Golang",
      "Docker",
      "Kubernetes",
    ],
    text: "A platform for developers to collaborate on code. This was completed as a CS3219 Project",
    links: {
      github: "https://github.com/CodeToGather/",
    },
  },
  {
    title: "McGymmy",
    image: mcgymmy,
    categories: ["Java", "Maven", "Software Engineering"],
    text: "McGymmy is a CLI based application for sedentary software engineers to manage their diet and stay healthy. This is completed as a CS2103T Project",
    links: {
      github: "https://github.com/AY2021S1-CS2103T-W17-3",
    },
  },
  {
    title: "CS4239 Server Side Request Forgery Research",
    image: ssrf,
    categories: ["Python", "Flask", "Docker", "Server Side Request Forgery"],
    text: "A research project on Server Side Request Forgery. This was completed as a CS4239 Project",
    links: {
      github: "https://github.com/orgs/CS4239-U6",
      link: {
        link: "https://jh123x.com/projects/ssrf-research/",
        tooltip: "Project Details",
      },
    },
  },
  {
    title: "NOT Schrödinger's Box",
    image: not_schrodinger,
    categories: ["Python", "React Native", "IoT"],
    text: "Ever had a problem with having too many items? Sometimes we do not know where everything is and they have become Schrödinger's items. NOT Schrödinger's Box is our way of tackling this issue. A project for Hack&Roll 2021.",
    links: {
      github: "https://github.com/tinyurl-com-ItsBigBrainTimeXD",
      link: {
        link: "https://devpost.com/software/not-schrodinger-s-box",
        tooltip: "Devpost",
      },
      link2: {
        link: "https://jh123x.com/projects/hacknroll2022/",
        tooltip: "Project Details",
      }
    }

  }
];

export default portfolios;
