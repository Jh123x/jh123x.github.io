import jh123x from "../img/projects/jh123x.com/homepage.png";
import fyp from "../img/projects/fyp/homepage.png";
import go_shell from "../img/projects/go_shell.svg";
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
import order_on_us from "../img/projects/orderonus.png";
import not_schrodinger from "../img/projects/not_schrodinger_box.png";
import go_validate from "../img/projects/go_validate.png";
import nus_jh123x from "../img/projects/nus_jh123x.png";
import go_test from "../img/projects/go_test.png";
import go_builder_gen from "../img/projects/go_buildergen.webp";
import lox_interpreter from "../img/projects/lox_interpreter.png";
import hysa_calculator from "../img/projects/hysa.webp";
import browser_telebot from "../img/projects/browser_telebot.png"
import astroid from "../img/projects/astroid.png";
import { PortfolioEntry } from "./types";

const portfolios: PortfolioEntry[] = [
  {
    title: "Lox Interpreter",
    text: "A interpreter for Lox in Golang",
    categories: [
      "Golang",
      "CodeCrafter",
    ],
    image: lox_interpreter,
    links: {
      github: {
        link: "https://github.com/Jh123x/codecrafters-interpreter-go",
        tooltip: "Github Repository",
      },
    }
  },
  {
    title: "HYSA Calculator",
    text: "A high yield savings accout calculator",
    categories: [
      "Typescript",
      "React",
    ],
    image: hysa_calculator,
    links: {
      github: {
        link: "https://github.com/Jh123x/SG-HYSA-Calculator",
        tooltip: "Github",
      },
      link: {
        link: "https://hysa.jh123x.com/",
        tooltip: "Official Website",
      }
    }
  },
  {
    title: "Browser Telebot",
    text: "A telegram bot in browser",
    categories: [
      "Typescript",
      "React",
      "Telegram",
    ],
    image: browser_telebot,
    links: {
      github: {
        link: "https://github.com/Jh123x/telegram-bot-on-browser",
        tooltip: "Github",
      },
      link: {
        link: "https://telebot.jh123x.com/",
        tooltip: "Official Website",
      }
    }
  },
  {
    title: "BuilderGen",
    text: "A code generation tools to build",
    categories: ["Golang"],
    image: go_builder_gen,
    links: {
      github: {
        link: "https://github.com/Jh123x/buildergen/",
        tooltip: "Github Repository"
      },
      link: {
        link: "https://portfolio.jh123x.com/buildergen/",
        tooltip: "Official Documentation"
      }
    }
  },
  {
    title: "Go Test",
    text: "A simple library for testing in Pure Go.",
    categories: ["Golang"],
    image: go_test,
    links: {
      github: {
        link: "https://github.com/Jh123x/GoTest",
        tooltip: "Github Repository"
      },
      link: {
        link: "https://portfolio.jh123x.com/GoTest/",
        tooltip: "Official Documentation",
      },
    },
  },
  {
    title: "Astroids Game",
    text: "An astroids game",
    categories: [
      "python",
      "game",
    ],
    image: astroid,
    links: {
      github: {
        link: "https://github.com/Jh123x/Asteroids",
        tooltip: "Github"
      },
    }
  },
  {
    title: "NUS Website",
    text: "A simple website for NUS students to find useful links and resources.",
    categories: ["Hugo", "Markdown"],
    image: nus_jh123x,
    links: {
      link: {
        link: "https://nus.jh123x.com/",
        tooltip: "Website",
      },
    },
  },
  {
    categories: ["Golang"],
    image: go_validate,
    links: {
      github: {
        link: "https://github.com/Jh123x/go-validate",
        tooltip: "GitHub Repository",
      },
      docs: {
        link: "https://portfolio.jh123x.com/go-validate/",
        tooltip: "Official Documentation",
      },
      link: {
        link: "https://jh123x.com/projects/go-validate/",
        tooltip: "Project Details",
      },
    },
    title: "Go Validate",
    text: "A simple library for validations in Pure Go.",
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
      link: [
        {
          link: "https://python.jh123x.com",
          tooltip: "Test Development of the Project",
        },
        {
          link: "https://visualpython.comp.nus.edu.sg/",
          tooltip: "Production Deployment of the Project",
        },
      ],
      docs: {
        link: "https://jh123x.com/projects/visualpython/",
        tooltip: "Project Page",
      },
    },
    title: "VisualPython",
    text: "A Visual Programming Platform for learning Python for my Final Year Project.",
  },
  {
    title: "Go Shell",
    image: go_shell,
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
    image: order_on_us,
    categories: ["Django", "ReactJs", "Python"],
    text: "It offers a queue management platform for all f&b admins running stalls. This was a project for Hack&Roll 2023",
    links: {
      github: {
        link: "https://github.com/Orderonus",
        tooltip: "GitHub Repository",
      },
      link: {
        link: "https://devpost.com/software/orderonus",
        tooltip: "Devpost",
      },
    },
  },
  {
    title: "JioU",
    text: "JioU is a simple, yet powerful, way to connect with others. Everyone can participate in events to help others.",
    categories: ["ReactJs", "NodeJs", "JavaScript", "Django"],
    image: jiou,
    links: {
      github: {
        link: "https://github.com/KTV-Capoos",
        tooltip: "GitHub Repository",
      },
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
      github: {
        link: "https://github.com/Jh123x/Typeracer-bot",
        tooltip: "GitHub Repository",
      },
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
      github: {
        link: "https://github.com/Jh123x/PDF-Combiner",
        tooltip: "Github Repository",
      },
      link:
      {
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
      github: {
        link: "https://github.com/Jh123x/overwatch-tools",
        tooltip: "GitHub Repository",
      },
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
      github: {
        link: "https://github.com/Jh123x/Reversi-Simulator",
        tooltip: "GitHub Repository",
      },
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
      github: {
        link: "https://github.com/Jh123x/Wordle-Solver",
        tooltip: "GitHub Repository",
      },
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
      github: {
        link: "https://github.com/COMP562-2022-Group-1",
        tooltip: "GitHub Repository",
      },
      link: [
        {
          link: "https://comp562-2022-group-1.github.io/Model-Training/US2016_Elections_code.html",
          tooltip: "Model Training and evaluation",
        },
        {
          link: "https://comp562-2022-group-1.github.io/",
          tooltip: "Project Page",
        },
      ],
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
      github: {
        link: "https://github.com/CodeToGather/",
        tooltip: "GitHub Repository",
      },
    },
  },
  {
    title: "McGymmy",
    image: mcgymmy,
    categories: ["Java", "Maven", "Software Engineering"],
    text: "McGymmy is a CLI based application for sedentary software engineers to manage their diet and stay healthy. This is completed as a CS2103T Project",
    links: {
      github: {
        link: "https://github.com/AY2021S1-CS2103T-W17-3",
        tooltip: "GitHub Repository",
      },
    },
  },
  {
    title: "CS4239 Server Side Request Forgery Research",
    image: ssrf,
    categories: ["Python", "Flask", "Docker", "Server Side Request Forgery"],
    text: "A research project on Server Side Request Forgery. This was completed as a CS4239 Project",
    links: {
      github: {
        link: "https://github.com/orgs/CS4239-U6",
        tooltip: "GitHub Repository",
      },
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
      github: {
        link: "https://github.com/tinyurl-com-ItsBigBrainTimeXD",
        tooltip: "GitHub Repository",
      },
      link: [{
        link: "https://devpost.com/software/not-schrodinger-s-box",
        tooltip: "Devpost",
      },
      {
        link: "https://jh123x.com/projects/hacknroll2022/",
        tooltip: "Project Details",
      },
      ],
    },
  },
];

export default portfolios;
