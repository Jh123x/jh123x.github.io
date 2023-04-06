import jh123x from "../img/projects/jh123x.com/homepage.png";
import fyp from "../img/projects/fyp/homepage.png";
import goshell from "../img/projects/go_shell.svg";
import jiou from "../img/projects/jiou.png";
import typeracerbot from "../img/projects/typeracer_bot.jpg";
import pdfcombiner from "../img/projects/pdf_combiner.png";
import ow_toolkit from "../img/projects/ow_toolkit.png";
import reversi_sim from "../img/projects/reversi_sim.png";
import wordle_solver from "../img/projects/wordle_solver.png";

const portfolios = [
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
      }
    }
  }
];

export default portfolios;
