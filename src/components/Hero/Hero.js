import React, { useRef, useEffect } from "react";
import { Wrapper } from "../../App";
import HeroImage from "../../assets/image 2.png";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight, HiDownload } from "react-icons/hi";
import { FaCommentDots } from "react-icons/fa";

const HeroSection = styled.section`
  position: relative;
  z-index: 0;
`;
const HeroHeader = styled.header``;
const HeroTitle = styled.h1`
  font-size: clamp(2rem, calc(5vw + 1rem), 3rem);
  line-height: 1.4;
`;
const HeroCirlce = styled.div`
  font-weight: bold;
  z-index: 9999;
  ${(props) =>
    props.small &&
    css`
      border: 1px solid #ffe99c;
      width: 50px;
      height: 50px;
      border-radius: 50%;
    `}
  ${(props) =>
    props.big &&
    css`
      width: 110px;
      height: 110px;
      padding: 10px;
      border-radius: 50%;
      border: 1px solid #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      font-size: 11px;
      transition: all 0.5s ease-out;
      @media (max-width: 800px) {
        width: 90px;
        height: 90px;
        font-size: 10px;
      }
      &:hover {
        background: #ffe99c;
        color: #111;
      }
    `}
`;
const HeroLinkText = styled.p`
  margin-right: -15px;
`;
const HeroList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 50px;
  margin-top: 60px;
  z-index: 9999;
  @media (max-width: 800px) {
    gap: 20px;
  }
`;
const HeroItem = styled.li`
  z-index: 9999;
`;

const HeroImg = styled.img`
  position: absolute;
  right: -10px;
  top: -190px;
  width: 480px;
  z-index: -9999;
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;
const HeroDownloadBox = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
  margin-left: auto;
  margin-top: 20px;
  @media (min-width: 768px) {
    margin-top: 0;
  }
`;
const HeroDownLoadBtn = styled.button`
  background: #ffe99c;
  padding: 10px 25px;
  border-radius: 15px;
  margin-right: 20px;
  transition: all 0.3s ease-out;
  cursor: pointer;

  &:hover {
    background: hsl(47, 100%, 71%);
  }
`;
const HeroIconBox = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffe99c;
  color: #111;
  font-size: 1.5rem;
`;

function Hero() {
  return (
    <Wrapper>
      <HeroSection>
        <HeroHeader>
          <HeroTitle>
            INTERIOR AND <br /> EXTERIROR DESIGN
          </HeroTitle>
        </HeroHeader>
        <Link
          to="/gallery"
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "40px",
            width: "100px",
          }}
        >
          <HeroLinkText>VISIT</HeroLinkText>
          <HeroCirlce small />
          <HiOutlineArrowNarrowRight style={{ marginLeft: "10px" }} />
        </Link>
        <HeroList>
          <HeroItem>
            <Link to="/gallery">
              <HeroCirlce big bgGold>
                INTERIOR AND EXTERIOR DESIGN
              </HeroCirlce>
            </Link>
          </HeroItem>
          <HeroItem>
            <Link to="/partners">
              <HeroCirlce big>BUILDING AND PAINTING</HeroCirlce>
            </Link>
          </HeroItem>
          <HeroItem>
            <Link to="/about">
              <HeroCirlce big>ABOUT US</HeroCirlce>
            </Link>
          </HeroItem>
          <HeroItem>
            <Link to="/service">
              <HeroCirlce big>OUR SERVICES</HeroCirlce>
            </Link>
          </HeroItem>
        </HeroList>
        <HeroImg src={HeroImage} alt="hero section image" />
        <HeroDownloadBox>
          <HeroDownLoadBtn>
            <HiDownload style={{ fontSize: "15px", marginRight: "5px" }} />
            DOWNLOAD CATALOG
          </HeroDownLoadBtn>
          <HeroIconBox>
            <FaCommentDots />
          </HeroIconBox>
        </HeroDownloadBox>
      </HeroSection>
    </Wrapper>
  );
}

export default Hero;
