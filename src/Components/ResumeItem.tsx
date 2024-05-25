import * as React from "react";
import styled from "styled-components";
import itemMap from "../data/iconMap";
import { WorkExperienceEntry } from "../data/types";

const ResumeItem = ({
  year,
  title,
  subTitle,
  text,
  logo,
  links,
}: WorkExperienceEntry) => (
  <ResumeItemStyled>
    <div className="left-content">
      <p>{year}</p>
    </div>
    <div className="right-content">
      {logo !== undefined ? (
        <img src={logo} width={100} height={100} alt={subTitle} />
      ) : (
        <></>
      )}
      <h5>{title}</h5>
      <h6>{subTitle}</h6>
      <p>{text}</p>
      {links ? itemMap(links) : <></>}
    </div>
  </ResumeItemStyled>
);

const ResumeItemStyled = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 421px) {
    p,
    h5,
    h6 {
      font-size: 80%;
    }
  }
  &:not(:last-child) {
    padding-bottom: 3rem;
  }
  .left-content {
    width: 50%;
    padding-left: 20px;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      left: -10px;
      top: 5px;
      height: 15px;
      width: 15px;
      border-radius: 50%;
      border: 2px solid var(--border-color);
      background-color: var(--background-dark-color);
    }
    p {
      display: inline-block;
    }
  }
  .right-content {
    padding-right: 5rem;
    position: relative;
    max-width: 60%;

    &::before {
      content: "";
      top: 15px;
      height: 2px;
      width: 3rem;
      background-color: var(--border-color);
    }
    h5 {
      color: var(--primary-color);
      font-size: 2rem;
      padding-bottom: 0.4rem;
    }
    h6 {
      padding-bottom: 0.6rem;
      font-size: 1.5rem;
    }
  }
`;
export default ResumeItem;
