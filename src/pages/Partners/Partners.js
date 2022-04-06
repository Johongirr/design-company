import React from "react";
import PartnersList from "../../components/PartnersList//PartnersList";
import { services } from "../../data";
import { Wrapper } from "../../App";
import ServiceList from "../../components/ServiceList/ServiceList";
import styled from "styled-components";

function Partners() {
  console.log(services);
  return (
    <Wrapper>
      <ServiceList services={services} />
    </Wrapper>
  );
}

export default Partners;
