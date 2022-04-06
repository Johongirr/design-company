import React from "react";
import styled from "styled-components";

const AboutStatisticsWrapper = styled.div`
  border-radius: 15px;
  padding: 30px;
  background-color: #242424;
  margin: 100px 0;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
const AboutStatisticsBox = styled.div`
  &:not(:first-child) {
    border-top: 1px solid #666;
  }
  @media (min-width: 768px) {
    &:not(:first-child) {
      border-top: 0;
    }
    &:not(:last-child) {
      border-right: 1px solid #666;
    }
  }

  padding: 15px;
  text-align: center;
`;
const AboutStatisticsResult = styled.p`
  color: #ffe99c;
  font-size: 30px;
`;
const AboutStatisticsText = styled.p`
  color: #666;
  font-size: 14px;
`;

function AboutUsStaticsRow() {
  return (
    <AboutStatisticsWrapper>
      <AboutStatisticsBox>
        <AboutStatisticsResult>1456</AboutStatisticsResult>
        <AboutStatisticsText>
          Lorem ipsum, adipisicing Error, voluptates.
        </AboutStatisticsText>
      </AboutStatisticsBox>
      <AboutStatisticsBox>
        <AboutStatisticsResult>1456</AboutStatisticsResult>
        <AboutStatisticsText>
          Lorem ipsum, adipisicing Error, voluptates.
        </AboutStatisticsText>
      </AboutStatisticsBox>
      <AboutStatisticsBox>
        <AboutStatisticsResult>1456</AboutStatisticsResult>
        <AboutStatisticsText>
          Lorem ipsum, adipisicing Error, voluptates.
        </AboutStatisticsText>
      </AboutStatisticsBox>
      <AboutStatisticsBox>
        <AboutStatisticsResult>1456</AboutStatisticsResult>
        <AboutStatisticsText>
          Lorem ipsum, adipisicing Error, voluptates.
        </AboutStatisticsText>
      </AboutStatisticsBox>
    </AboutStatisticsWrapper>
  );
}

export default AboutUsStaticsRow;
