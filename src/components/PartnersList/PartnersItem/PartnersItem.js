import React from "react";
import styled from "styled-components";

const PartnerCard = styled.div`
  position: relative;
  height: 200px;
  width: 100%;
  background: #242424;
  transition: all 0.5s ease-out;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  &:hover {
    transform: scale(1.05);
  }
`;
const PartnerImg = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

function PartnersItem({ partnerLogo }) {
  return (
    <PartnerCard>
      <PartnerImg src={partnerLogo} alt={partnerLogo} />
    </PartnerCard>
  );
}

export default PartnersItem;
