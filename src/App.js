import { useState, useEffect } from "react";
import Sidebar from "./Components/Sidebar";
import styled from "styled-components";
import { Brightness4, Menu as MenuIcon } from "@mui/icons-material";
import { Switch, IconButton } from "@mui/material";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import PortfoliosPage from "./Pages/PortfoliosPage";
import ResumePage from "./Pages/ResumePage";
import { Routes, Route } from "react-router-dom";

const App = () => {
  const [checked, setChecked] = useState(false);
  const [navToggle, setNavToggle] = useState(false);

  useEffect(() => {
    document.documentElement.className = checked ? "light-theme" : "dark-theme";
  }, [checked]);

  return (
    <div className="App">
      <Sidebar navToggle={navToggle} />

      <div className="theme">
        <div className="light-dark-mode">
          <div className="left-content">
            <Brightness4 />
          </div>
          <div className="right-content">
            <Switch
              value=""
              checked={checked}
              inputProps={{ "aria-label": "" }}
              size="medium"
              onClick={() => setChecked(!checked)}
            />
          </div>
        </div>
      </div>

      <div className="ham-burger-menu">
        <IconButton onClick={() => setNavToggle(!navToggle)}>
          <MenuIcon />
        </IconButton>
      </div>

      <MainContentStyled>
        <Routes>
          <Route path="/">
            <Route index element={<HomePage />} />
            <Route path="resume" element={<ResumePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="portfolios" element={<PortfoliosPage />} />
          </Route>
        </Routes>
      </MainContentStyled>
    </div>
  );
};

const MainContentStyled = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;
  @media screen and (max-width: 1200px) {
    margin-left: 0;
  }
  .lines {
    position: absolute;
    min-height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    opacity: 0.4;
    z-index: -1;
    .line-1,
    .line-2,
    .line-3,
    .line-4 {
      width: 1px;
      min-height: 100vh;
      background-color: var(--border-color);
    }
  }
`;

export default App;
