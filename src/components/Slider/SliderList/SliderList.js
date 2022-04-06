import React from "react";
import SliderItem from "./SliderItem/SliderItem";
import styled from "styled-components";

function SliderList({ sliderImages }) {
  return sliderImages.map((slider) => (
    <SliderItem key={slider.id} img={slider} />
  ));
}

export default SliderList;
