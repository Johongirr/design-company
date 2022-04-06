import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  About,
  ContactUs,
  Gallery,
  Loft,
  Partners,
  Services,
} from "./pages/index";
import GallerySingleItem from "./components/GallerySingleItem/GallerySingleItem";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Copyright from "./components/Copyright/Copyright";
import styled from "styled-components";

const AppBox = styled.main`
  background: #181818;
  color: #fff;
`;
export const Wrapper = styled.div`
  max-width: 900px;
  width: 95%;
  margin: 0 auto;
`;

function App() {
  return (
    <AppBox>
      <BrowserRouter>
        <Wrapper>
          <Navbar />
        </Wrapper>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery/:id" element={<GallerySingleItem />} />
        </Routes>
        <Wrapper>
          <Footer />
        </Wrapper>
        <Copyright />
      </BrowserRouter>
    </AppBox>
  );
}

export default App;
/**
 *  Components
 *    App
 *      Navbar
 *      Home
 *        Hero
 *        Slider
 *          SliderList
 *            SliderItem
 *        PartnersRow
 *        ReviewsSlider
 *          ReviewsSliderRow
 *        VideoReviewsRow
 *        Contact
 *      Gallery
 *        GalleryList
 *          GalleryItem
 *        ShowMoreBtn
 *        GalleryVideo
 *      Loft
 *        LoftSection
 *        SimilarProjectsRow
 *        Contact
 *      AboutUs
 *        AboutUsSection
 *        AboutUsStatisticsRow
 *        AboutUsAccordion
 *      Partners
 *        PartnerList
 *          PartnerItem
 *      Services
 *        ServiceSection
 *        ServiceAccordion
 *        Contact
 *      Footer
 *      Copyright
 *
 *
 */
