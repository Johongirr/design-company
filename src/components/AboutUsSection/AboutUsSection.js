import React, { useState } from "react";
import styled from "styled-components";
import Img from "../../assets/Rectangle 37.png";
import VideoModal from "../Modal/Modal";
import { Wrapper } from "../../App";
import { useVideoPlayer } from "../../customHooks/videoPlayer";

const AboutBox = styled.section`
  display: flex;
  flex-direction: column;
  gap: 30px;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
const AboutImgBox = styled.figure`
  position: relative;
  flex: 1;
  line-height: 0;
  border-radius: 15px;
`;
const AboutImg = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;
const AboutOverlay = styled.div`
  position: absolute;
  inset: 0;

  transition: all 0.5s ease-out;
  &:hover {
    background: rgba(0, 0, 0, 0.4);
  }
`;
const AboutVideoPlayBtn = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: transparent;
  cursor: pointer;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 233, 156, 0.2);
`;

const AboutTextBox = styled.article`
  flex: 1;
  padding-top: 20px;
  @media (min-width: 768px) {
    padding-left: 40px;
  }
`;
const AboutHeader = styled.header``;
const AboutTitle = styled.h2`
  font-weight: 500;
`;
const AboutDescription = styled.p`
  margin-top: 30px;
  width: 90%;
`;

function AboutUsSection() {
  const { open, onOpenModal, closeModal } = useVideoPlayer();
  return (
    <AboutBox>
      <AboutImgBox>
        <AboutImg src={Img} />
        <AboutOverlay>
          <AboutVideoPlayBtn onClick={onOpenModal}>
            <svg
              width="21"
              height="24"
              viewBox="0 0 21 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.17083 1.10043L19.6294 11.7575L1.17083 22.4146L1.17083 1.10043Z"
                stroke="#FFE99C"
              />
            </svg>
          </AboutVideoPlayBtn>
        </AboutOverlay>
      </AboutImgBox>
      <AboutTextBox>
        <VideoModal open={open} closeModal={closeModal} />
        <AboutHeader>
          <AboutTitle>
            ABOUT US
            <br />
            <span style={{ color: "#ffe99c" }}>NURAN GROUP</span>
          </AboutTitle>
        </AboutHeader>
        <AboutDescription>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea autem
          dignissimos rem cumque commodi tempore laboriosam placeat corrupti
          facilis non magnam molestiae aliquid, velit veniam voluptatum vero
          ipsam odio totam.
        </AboutDescription>
      </AboutTextBox>
    </AboutBox>
  );
}

export default AboutUsSection;
