import React from "react";
import GalleryItem from "./GalleryItem/GalleryItem";
import { sliderImages } from "../../data";
import styled from "styled-components";

export const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 40px;
`;

function GalleryList() {
  return (
    <GalleryGrid>
      {sliderImages.map((img) => (
        <GalleryItem key={img.id} img={img} />
      ))}
    </GalleryGrid>
  );
}

export default GalleryList;
