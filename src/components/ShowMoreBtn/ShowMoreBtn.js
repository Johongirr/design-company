import React from "react";
import styled from "styled-components";

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
`;
const Button = styled.button`
  display: inline-block;
  border: 2px solid #fff;
  color: #ffe99c;
  width: 250px;
  height: 50px;
  margin-top: 70px;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease-out;
  cursor: pointer;
  &:hover {
    background: #ffe99c;
    color: #000;
  }
`;

function ShowMoreBtn() {
  return (
    <ButtonBox>
      <Button>
        <svg
          style={{ marginRight: "10px" }}
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.7529 0.510057L13.7627 2.45457C11.6913 0.30517 8.54917 -0.54084 5.62905 0.36551C2.28684 1.40287 0.00401041 4.4967 0.000227118 7.99514C-0.0175364 8.67674 1.01265 8.68077 1.00021 7.99911C1.00361 4.93447 2.9956 2.23063 5.92396 1.32172C8.59093 0.493949 11.4593 1.33552 13.2647 3.39809L10.8848 3.41075C10.2175 3.41434 10.2214 4.41548 10.8888 4.41182L14.2725 4.3933C14.5373 4.39185 14.7731 4.17249 14.7715 3.8874L14.753 0.506218C14.7514 0.222317 14.5231 -0.00743421 14.2438 0.000184147C13.9646 0.00780254 13.7515 0.235316 13.7529 0.510057ZM14.9999 8.001C14.9966 11.0656 13.0045 13.7695 10.0762 14.6784C7.40922 15.5062 4.54088 14.6646 2.73547 12.602L5.11532 12.5894C5.78262 12.5857 5.7787 11.5846 5.11137 11.5883C3.98346 11.5945 1.96448 11.6055 1.72763 11.6068C1.46288 11.6083 1.22705 11.8276 1.22862 12.1127L1.24714 15.4939C1.2487 15.7778 1.47703 16.0076 1.7608 15.9998C2.03541 15.9922 2.2485 15.7647 2.24712 15.49C2.24391 14.8418 2.2373 13.5455 2.2373 13.5455C4.30875 15.6949 7.45083 16.5409 10.371 15.6345C13.7132 14.5972 15.996 11.5033 15.9998 8.0049C16.0087 7.6641 15.7555 7.49315 15.5018 7.49216C15.2481 7.49116 14.9937 7.66014 14.9999 8.001Z"
            fill="#FFE99C"
          />
        </svg>
        SHOW MORE
      </Button>
    </ButtonBox>
  );
}

export default ShowMoreBtn;
