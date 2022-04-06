import React from "react";
import styled from "styled-components";

const ServiceSection = styled.article`
  max-width: 760px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 40px;
  margin-bottom: 100px;
`;
const ServiceImgBox = styled.figure``;
const ServiceImg = styled.img`
  width: 100%;
`;
const ServiceTextBox = styled.section`
  padding-top: 30px;
`;
const ServiceHeader = styled.header`
  margin-bottom: 20px;
`;
const ServiceTitle = styled.h2`
  color: #ffe99c;
  font-size: 1.8rem;
`;
const ServiceDescription = styled.p`
  font-weight: 400;
`;

function ServiceItem({ service }) {
  return (
    <ServiceSection>
      <ServiceImgBox>
        <ServiceImg src={service?.img} alt={service?.title} />
      </ServiceImgBox>
      <ServiceTextBox>
        <ServiceHeader>
          <ServiceTitle>{service?.serviceTitle}</ServiceTitle>
        </ServiceHeader>
        <ServiceDescription>{service?.serviceDescription}</ServiceDescription>
      </ServiceTextBox>
    </ServiceSection>
  );
}

export default ServiceItem;
