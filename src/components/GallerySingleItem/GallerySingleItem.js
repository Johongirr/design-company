import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { sliderImages } from "../../data";
import Contact from "../Contact/Contact";
import { Wrapper } from "../../App";
import { GalleryGrid } from "../GalleryList/GalleryList";
import GalleryItem from "../GalleryList/GalleryItem/GalleryItem";
import styled from "styled-components";

const GallerySingleItemBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
const GalleryImgBox = styled.figure`
  flex: 1 0 50%;
  line-height: 0;
`;
const GalleryTextBox = styled.div`
  position: relative;
  flex: 1 0 50%;
  padding: 80px;
  background: #242424;
  @media (max-width: 768px) {
    padding-bottom: 150px;
  }
`;
const GalleryBottomImages = styled.div`
  display: flex;
  & * {
    height: 200px;
    flex: 1;
  }
`;
const GalleryImgOverlay = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
  font-size: 40px;
`;
const GalleryItemTitle = styled.h2`
  color: #ffe99c;
  font-size: 25px;
`;
const GalleryItemSubtitle = styled.p`
  font-size: 17px;
  margin-top: 10px;
`;
const GalleryDetailList = styled.ul`
  margin-top: 50px;
`;
const GalleryDetailItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #555;
  margin-bottom: 15px;
`;
const GalleryBtn = styled.button`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 30px 0;
  left: 0;
  background: #ffe99c;
  cursor: pointer;
  @media (max-width: 768px) {
    margin-top: 100px;
  }
`;
const GallerySimilarProjects = styled.section`
  margin: 100px 0;
`;
const GalleryHeader = styled.header`
  margin-bottom: 50px;
`;
const GalleryTitle = styled.h2`
  font-weight: 500;
  font-size: 2rem;
`;

function GallerySingleItem() {
  const [currentImg, setCurrentImg] = useState("");
  const { id } = useParams("");

  useEffect(() => {
    setCurrentImg(sliderImages.find((img) => img.id == id));
  }, [id]);

  console.log(currentImg);
  return (
    <Wrapper>
      <GallerySingleItemBox>
        <GalleryImgBox>
          <img
            src={currentImg?.img}
            alt=""
            style={{ width: "100%", height: "500px" }}
          />
          <GalleryBottomImages>
            <img src={sliderImages[0]?.img} alt="" />
            <div style={{ position: "relative" }}>
              <img
                src={sliderImages[1]?.img}
                alt=""
                style={{ width: "100%" }}
              />
              <GalleryImgOverlay>+6</GalleryImgOverlay>
            </div>
          </GalleryBottomImages>
        </GalleryImgBox>
        <GalleryTextBox>
          <GalleryItemTitle>{currentImg?.imgName}</GalleryItemTitle>
          <GalleryItemSubtitle>{currentImg?.imgDetails}</GalleryItemSubtitle>
          <GalleryDetailList>
            <GalleryDetailItem>
              <span>FLAT GROUND</span>
              <span style={{ color: "#fff" }}>{currentImg?.imgDetails}</span>
            </GalleryDetailItem>
            <GalleryDetailItem>
              <span>FLAT GROUND</span>
              <span style={{ color: "#fff" }}>{currentImg?.imgDetails}</span>
            </GalleryDetailItem>
            <GalleryDetailItem>
              <span>FLAT GROUND</span>
              <span style={{ color: "#fff" }}>{currentImg?.imgDetails}</span>
            </GalleryDetailItem>
            <GalleryDetailItem>
              <span>FLAT GROUND</span>
              <span style={{ color: "#fff" }}>{currentImg?.imgDetails}</span>
            </GalleryDetailItem>
            <GalleryDetailItem>
              <span>FLAT GROUND</span>
              <span style={{ color: "#fff" }}>{currentImg?.imgDetails}</span>
            </GalleryDetailItem>
          </GalleryDetailList>
          <GalleryBtn>CONTACT</GalleryBtn>
        </GalleryTextBox>
      </GallerySingleItemBox>

      <GallerySimilarProjects>
        <GalleryHeader>
          <GalleryTitle>SIMILAR PROJECTS</GalleryTitle>
        </GalleryHeader>
        <GalleryGrid>
          {sliderImages?.slice(0, 3).map((img) => (
            <GalleryItem key={img.id} img={img} />
          ))}
        </GalleryGrid>
      </GallerySimilarProjects>
      <Contact />
    </Wrapper>
  );
}

export default GallerySingleItem;
