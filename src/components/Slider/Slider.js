import React, { useState, useRef, useEffect } from "react";
import SliderList from "./SliderList/SliderList";
import styled from "styled-components";
import Image from "../../assets/Rectangle 25.png";
import { sliderImages } from "../../data";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";

const SliderWrapper = styled.div`
  height: 600px;
  display: flex;
  align-items: center;
  margin: 100px 0;
  background: url(${Image});
`;
const SliderBox = styled.div`
  height: 500px;
  width: 100%;
  position: relative;
  overflow: hidden;
  &::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 250px;
    height: 100%;
    background: rgb(23, 23, 23, 0.8);
    z-index: 22;
    @media (max-width: 800px) {
      width: 80px;
    }
  }
  &::after {
    position: absolute;
    content: "";
    top: 0;
    right: 0;
    width: 250px;
    height: 100%;
    background: rgb(23, 23, 23, 0.8);
    z-index: 22;
    @media (max-width: 800px) {
      width: 80px;
    }
  }
`;
const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: #ffe99c;
  color: #111;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  font-size: 25px;
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  border: 2px solid #ffe99c;
  z-index: 9999;
  cursor: pointer;
`;

const ButtonLeft = styled(Button)`
  left: 80px;
  @media (max-width: 800px) {
    left: 10px;
  }
`;

const ButtonRight = styled(Button)`
  right: 80px;
  @media (max-width: 800px) {
    right: 10px;
  }
`;
const SliderImgBox = styled.figure`
  display: flex;
  gap: 20px;
  transition: all 0.5s ease-out;
  transform: translateX(140px);
`;

function Slider() {
  const imgBoxRef = useRef();
  const [count, setCount] = useState(0);
  const [isLeftSlideActive, setIsLeftSlideActive] = useState(false);
  const [isRightSlideActive, setIsRightSlideActive] = useState(false);

  useEffect(() => {
    if (count >= 0 && count < 12 && isLeftSlideActive) {
      console.log(count);
      imgBoxRef.current.style = `transform: translateX(-${count * 210}px)`;
      if (count === 0) {
        imgBoxRef.current.style = `transform: translateX(140px)`;
      }
    }
    if (count < 11 && isRightSlideActive) {
      console.log(count);
      imgBoxRef.current.style = `transform: translateX(-${count * 220}px)`;
    }
  }, [count, isRightSlideActive, isLeftSlideActive]);

  const slideToLeft = () => {
    if (count > 0) {
      setCount(count - 1);
      setIsLeftSlideActive(true);
      setIsRightSlideActive(false);
    }
  };
  const slideToRight = () => {
    if (count < 9) {
      setCount(count + 1);
      setIsLeftSlideActive(false);
      setIsRightSlideActive(true);
    }
  };
  return (
    <SliderWrapper>
      <SliderBox>
        {count > 0 && (
          <ButtonLeft className="btn left" onClick={slideToLeft}>
            <HiArrowNarrowLeft />
          </ButtonLeft>
        )}
        {count < 9 && (
          <ButtonRight className="btn right" onClick={slideToRight}>
            <HiArrowNarrowRight />
          </ButtonRight>
        )}
        <SliderImgBox ref={imgBoxRef}>
          <SliderList sliderImages={sliderImages} />
        </SliderImgBox>
      </SliderBox>
    </SliderWrapper>
  );
}
export default Slider;
