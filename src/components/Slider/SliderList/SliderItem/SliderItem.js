import React from "react";
import styled from "styled-components";

const SliderImgBox = styled.div`
  position: relative;
  &:nth-child(odd) {
    transform: translateY(50px);
  }

  &:hover .img__overlay {
    top: 0;
    opacity: 1;
  }
`;
const SliderImgOverlay = styled.div`
  position: absolute;
  top: -100px;
  bottom: 0;
  left: 0;
  opacity: 0;
  width: 70%;
  background: rgba(24, 24, 24, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  transition: all 0.5s ease-out;
`;
const SliderImgTitle = styled.h3`
  color: #ffe99c;
  font-size: 22px;
`;
const SliderTextBox = styled.div``;
const SliderTextList = styled.ul``;
const SliderTextItem = styled.li`
  position: relative;
  margin-bottom: 5px;
  &::before {
    position: absolute;
    content: "";
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #ffe99c;
    left: -20px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const SliderImg = styled.img`
  width: 350px;
  height: 450px;
  object-fit: cover;
`;

function SliderItem({ img }) {
  return (
    <SliderImgBox>
      <SliderImg src={img.img} />
      <SliderImgOverlay className="img__overlay">
        <SliderImgTitle>{img.imgName}</SliderImgTitle>
        <SliderTextBox>
          <SliderTextList>
            <SliderTextItem>{img.imgDetails[0]}</SliderTextItem>
            <SliderTextItem>{img.imgDetails[1]}</SliderTextItem>
          </SliderTextList>
        </SliderTextBox>
      </SliderImgOverlay>
    </SliderImgBox>
  );
}

export default SliderItem;
