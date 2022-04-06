import React from "react";
import Hero from "../../components/Hero/Hero";
import Slider from "../../components/Slider/Slider";
import PartnersList from "../../components/PartnersList/PartnersList";
import ReviewsSlider from "../../components/ReviewsSlider/ReviewsSlider";
import VideoReviewsRow from "../../components/VideoReviewsRow/VideoReviewsRow";
import Contact from "../../components/Contact/Contact";
import { Wrapper } from "../../App";
import { partnersLogos } from "../../data";

function Home() {
  return (
    <>
      <Hero />
      <Slider />
      <Wrapper>
        <PartnersList partnersLogos={partnersLogos} />
        <ReviewsSlider />
        <VideoReviewsRow />
        <Contact />
      </Wrapper>
    </>
  );
}

export default Home;
