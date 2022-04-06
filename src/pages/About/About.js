import React from "react";
import AboutUsSection from "../../components/AboutUsSection/AboutUsSection";
import AboutUsStaticsRow from "../../components/AboutUsStatisticsRow/AboutUsStaticsRow";
import AboutUsAccordion from "../../components/AboutUsAccordion/AboutUsAccordion";
import { Wrapper } from "../../App";
import styled from "styled-components";

function About() {
  return (
    <Wrapper>
      <AboutUsSection />
      <AboutUsStaticsRow />
      <AboutUsAccordion />
    </Wrapper>
  );
}

export default About;
