import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ImgBox = styled.figure`
  position: relative;
  &: hover .gallery__text-box {
    transform: translateY(0);
    opacity: 1;
  }
`;
const GalleryImg = styled.img`
  width: 100%;
  height: 100%;
`;
const GalleryTextBox = styled.div`
  position: absolute;
  bottom: 0;
  transform: translateY(50px);
  opacity: 0;
  height: 100px;
  width: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(24, 24, 24, 0.9);
  transition: all 0.5s ease-out;
`;
const GalleryImgTitle = styled.h3`
  color: #ffe99c;
  font-size: 17px;
  font-weight: 500;
`;
const GalleryDetail = styled.p`
  font-size: 14px;
`;

function GalleryItem({ img }) {
  return (
    <ImgBox>
      <GalleryImg src={img.img} />
      <GalleryTextBox className="gallery__text-box">
        <div>
          <GalleryImgTitle>{img.imgName}</GalleryImgTitle>
          <GalleryDetail>{img.imgDetails}</GalleryDetail>
        </div>
        <Link
          to={`/gallery/${img.id}`}
          style={{
            width: "30px",
            height: "30px",
            borderRadius: "50%",
            border: "1px solid #ffe99c",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          →
        </Link>
      </GalleryTextBox>
    </ImgBox>
  );
}

export default GalleryItem;
