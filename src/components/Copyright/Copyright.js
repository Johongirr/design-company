import React from "react";
import styled from "styled-components";
import { Wrapper } from "../../App";

const CopyrightBox = styled.div`
  background: hsl(0, 0%, 8%);
  padding: 20px 0;
`;
const CopyrightRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
`;
const CopyrightText = styled.small`
  color: #555;
  font-size: 16px;
`;
const ImgBox = styled.div`
  display: none;
  align-items: center;
  margin-right: 10px;
  font-size: 13px;
  @media (min-width: 768px) {
    display: flex;
  }
`;

function Copyright() {
  return (
    <CopyrightBox>
      <Wrapper>
        <CopyrightRow>
          <CopyrightText>
            &copy; 2022 All rights reserved nuron.uz
          </CopyrightText>
          <div style={{ display: "flex", alignItems: "center" }}>
            <p style={{ marginRight: "20px" }}>
              Website development by lifestyle
            </p>
            <ImgBox>
              <svg
                style={{ marginRight: "5px" }}
                width="35"
                height="35"
                viewBox="0 0 23 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.12332 15.5326C4.29742 14.3433 5.78482 13.7471 7.59159 13.7471C8.50106 13.7471 9.31929 13.9022 10.0463 14.2155C10.7732 14.5258 11.3511 14.9303 11.7831 15.4261C12.215 15.9219 12.5526 16.4177 12.802 16.9105C13.0484 17.4063 13.2279 17.9082 13.3404 18.4192H10.3474C9.8668 17.1417 8.9482 16.5029 7.59159 16.5029C6.68212 16.5029 5.91561 16.8375 5.29206 17.5097C4.66851 18.1789 4.35826 19.0427 4.35826 20.0982C4.35826 21.1537 4.66851 22.0145 5.29206 22.6867C5.37115 22.7719 5.45023 22.8509 5.5354 22.924H9.1672H9.63258C9.94284 22.6015 10.1831 22.1818 10.3504 21.6556H13.3435C13.2553 22.0875 13.1214 22.5103 12.945 22.924H22.6541L14.9982 0.673828H8.06306L3.00165 15.3866L2.8374 15.8672C2.92561 15.7516 3.01991 15.639 3.12332 15.5326Z"
                  fill="#1ABAA3"
                />
                <path
                  d="M1.3651 20.1195L0.400879 22.9209H1.93694C1.56281 22.0905 1.36814 21.1598 1.3651 20.1195Z"
                  fill="#1ABAA3"
                />
              </svg>
              <p>
                ABBA <br />
                CODING
              </p>
            </ImgBox>
            <ImgBox>
              <svg
                width="35"
                height="35"
                viewBox="0 0 23 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.14825 17.0107C7.59487 17.0107 7.14374 17.1972 6.79186 17.5731C6.44299 17.9491 6.26855 18.4213 6.26855 18.9897V22.6739H9.83247V18.9897C9.83247 18.3581 9.67908 17.8679 9.37833 17.525C9.07457 17.1822 8.66254 17.0107 8.14825 17.0107Z"
                  fill="#007C99"
                />
                <path
                  d="M4.82481 15.4257C5.1015 15.6633 5.32105 15.8949 5.47744 16.1174H5.57669C5.74812 15.8949 5.98572 15.6633 6.28947 15.4257C6.93609 14.9656 7.68797 14.734 8.54511 14.734C9.58872 14.734 10.4759 15.128 11.2068 15.9129C11.9406 16.6979 12.3045 17.6573 12.3045 18.7911V22.6738H22.3977L14.8278 0.673828H7.97068L3.12256 14.758C3.74511 14.8272 4.31353 15.0468 4.82481 15.4257Z"
                  fill="#007C99"
                />
                <path
                  d="M3.79637 18.9896C3.79637 18.358 3.64599 17.8678 3.34223 17.525C3.08358 17.2332 2.75276 17.0678 2.34373 17.0227L0.400879 22.6738H3.79938V18.9896H3.79637Z"
                  fill="#007C99"
                />
              </svg>

              <p>
                ABBA <br />
                MEDIA
              </p>
            </ImgBox>
          </div>
        </CopyrightRow>
      </Wrapper>
    </CopyrightBox>
  );
}

export default Copyright;
