import React, { useRef, useState, useEffect } from "react";
import styled, { css } from "styled-components";
import VideoModal from "../Modal/Modal";
import { useVideoPlayer } from "../../customHooks/videoPlayer";
import { useAccordion } from "../../customHooks/accordion";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import Img1 from "../../assets/Rectangle 24.png";
import Img2 from "../../assets/Rectangle 25.png";
import Img3 from "../../assets/Rectangle 26.png";
import Img4 from "../../assets/Rectangle 29.png";
import { FaPlay } from "react-icons/fa";

const AccordionSection = styled.section``;
const AboutAccordionHeader = styled.header`
  margin-bottom: 40px;
`;
const AboutAccordionTitle = styled.h2``;
const Accordion = styled.ul`
  max-width: 460px;
  width: 90%;
`;
const AccordionItem = styled.li`
  margin-bottom: 25px;
`;
const AccordionItemBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid #fff;
  padding-bottom: 5px;
  font-weight: 400;
`;
const AccordionToggleBtn = styled.button`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffe99c;
  cursor: pointer;
`;
const AccordionImgBox = styled.figure`
  position: relative;
  &::before {
    position: absolute;
    content: "";
    inset: 0;
    top: 20px;
    border-radius: 15px;
    height: 88%;
    transition: all 0.5s ease-out;
    z-index: 99;
  }
  &:hover::before {
    background: rgba(0, 0, 0, 0.4);
  }
`;
const AccordionContent = styled.img`
  position: relative;: ;
  width: 100%;
  height: 200px;
  border-radius: 15px;
  margin-top: 20px;
  object-fit: cover;
  z-index: 0;
   
`;
const AccordionPlayBtn = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  background: #111;
  color: #ffe99c;
  border: 4px solid #ffe99c;
  box-shadow: 0 0 5px 3px #000;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 999;
`;

function AboutUsAccordion() {
  const { open, onOpenModal, closeModal } = useVideoPlayer();
  const { selected, vals, handleClick } = useAccordion();
  return (
    <AccordionSection>
      <VideoModal open={open} closeModal={closeModal} />
      <AboutAccordionHeader>
        <AboutAccordionTitle>
          FREQUENTLY ASKED <span style={{ color: "#ffe99c" }}>QUESTIONS</span>
        </AboutAccordionTitle>
      </AboutAccordionHeader>
      <Accordion>
        {vals.map((_, i) => (
          <AccordionItem key={i}>
            <AccordionItemBox onClick={handleClick.bind(null, i)}>
              WHEN THE BEST TIME TO START CONSTRUCTION
              <AccordionToggleBtn>
                {selected === i ? <AiOutlineMinus /> : <AiOutlinePlus />}
              </AccordionToggleBtn>
            </AccordionItemBox>
            <AccordionImgBox
              className={
                selected === i
                  ? "accordion__content show"
                  : "accordion__content"
              }
            >
              <AccordionContent src={Img1} />
              <AccordionPlayBtn onClick={onOpenModal}>
                <FaPlay />
              </AccordionPlayBtn>
            </AccordionImgBox>
          </AccordionItem>
        ))}
      </Accordion>
    </AccordionSection>
  );
}

export default AboutUsAccordion;
