import React, { useState } from "react";
import Contact from "../../components/Contact/Contact";
import { Wrapper } from "../../App";
import Img from "../../assets/Rectangle 28.png";
import styled from "styled-components";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const ServiceBox = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 50px;
  margin-bottom: 100px;
`;
const ServiceImgBox = styled.figure`
  position: relative
  line-height: 0;
  flex: 1;
`;
const ServiceImg = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;
export const ServiceOverlay = styled.div`
  position: absolute;
  inset: 0;

  transition: all 0.5s ease-out;
  &:hover {
    background: rgba(0, 0, 0, 0.4);
  }
`;

const ServiceVideoPlayBtn = styled.button`
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

const ServiceTextBox = styled.article`
  flex: 1;
  padding-top: 20px;
`;
const ServiceHeader = styled.header``;
const ServiceTitle = styled.h2`
  font-weight: 500;
  color: #ffe99c;
`;
const ServiceDescription = styled.p`
  margin-top: 10px;
  width: 90%;
`;
const ServiceBtn = styled.button`
  background: #ffe99c;
  border-radius: 15px;
  box-shadow: 3px 3px 2px rgba(255, 255, 255, 0.2);
  width: 200px;
  font-weight: bold;
  padding: 12px 0;
  margin-top: 15px;
  cursor: pointer;
  transition: all 0.3s ease-out;
  &:hover {
    box-shadow: 0 0 2px rgba(255, 255, 255, 0.2);
  }
`;

const AccordionSection = styled.section`
  margin: 100px 0;
  text-align: center;
`;
const ServiceAccordionHeader = styled.header`
  margin-bottom: 20px;
`;
const ServiceAccordionTitle = styled.h2``;
const Accordion = styled.ul`
  max-width: 460px;
  width: 90%;
  margin: 0 auto;
`;
const AccordionItem = styled.li``;
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
  background: #242424;
  margin: 10px 0;
  border-radius: 20px;
`;
const AccordionContent = styled.p`
  font-weight: 400;
  padding: 30px;
  color: lightgray;
`;

function Services() {
  const [selected, setSelected] = useState(null);
  const vals = Array.of(1, 2, 3, 4);
  const handleClick = (index, i) => {
    console.log(index);
    if (selected === index) {
      return setSelected(null);
    }
    setSelected(index);
  };
  return (
    <Wrapper>
      <ServiceBox>
        <ServiceImgBox>
          <ServiceImg src={Img} alt="Service img" />
          <ServiceOverlay>
            <ServiceVideoPlayBtn>
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
            </ServiceVideoPlayBtn>
          </ServiceOverlay>
        </ServiceImgBox>
        <ServiceTextBox>
          <ServiceHeader>
            <ServiceTitle>
              DESIGNER <br /> SERVICES
            </ServiceTitle>
          </ServiceHeader>
          <ServiceDescription>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea autem
            dignissimos rem cumque commodi tempore laboriosam placeat corrupti
            facilis non magnam molestiae aliquid, velit veniam voluptatum vero
            ipsam odio totam.
          </ServiceDescription>
          <ServiceBtn href="#">BOOK</ServiceBtn>
        </ServiceTextBox>
      </ServiceBox>
      <AccordionSection>
        <ServiceAccordionHeader>
          <ServiceAccordionTitle>
            <span style={{ color: "#ffe99c" }}>SERVICES</span>
          </ServiceAccordionTitle>
        </ServiceAccordionHeader>
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
                <AccordionContent>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                  voluptatum placeat, alias vero nobis iusto. Voluptatibus
                  explicabo quaerat porro dolore eum cumque recusandae, dicta
                  quas iusto possimus ea reprehenderit repellat!
                </AccordionContent>
              </AccordionImgBox>
            </AccordionItem>
          ))}
        </Accordion>
      </AccordionSection>
      <Contact />
    </Wrapper>
  );
}

export default Services;
