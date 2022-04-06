import React from "react";
import styled from "styled-components";
import GalleryList from "../../components/GalleryList/GalleryList";
import GalleryVideo from "../../components/GalleryVideo/GalleryVideo";
import ShowMoreBtn from "../../components/ShowMoreBtn/ShowMoreBtn";
import { Wrapper } from "../../App";

const GalleryBox = styled.div`
  margin: 100px 0;
`;
const GalleryHeader = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
`;
const GalleryTitle = styled.h2`
  font-size: clamp(1.5rem, calc(3vw + 1rem), 2rem);
  &:not(:last-child) {
    margin-right: 80px;
  }
`;

function Gallery() {
  return (
    <GalleryBox>
      <Wrapper>
        <GalleryHeader>
          <GalleryTitle>INTERIOR</GalleryTitle>
          <GalleryTitle style={{ color: "#333" }}>EXTERIOR</GalleryTitle>
        </GalleryHeader>
        <GalleryList />
        <ShowMoreBtn />
        <GalleryVideo />
      </Wrapper>
    </GalleryBox>
  );
}

export default Gallery;
