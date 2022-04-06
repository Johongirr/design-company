import React from "react";
import { FaPlay } from "react-icons/fa";
import GalleryVideoThumbnail from "../../assets/Rectangle 37.png";
import styled from "styled-components";
import { ServiceOverlay as GalleryOverlay } from "../../pages/Services/Services";

const GalleryVideoImgBox = styled.figure`
  position: relative;
  margin: 80px 0;
  line-height: 0;
`;
const GalleryVideoImg = styled.img`
  width: 100%;
`;
const GalleryVideoPlayBtn = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 60px;
  border-radius: 50%;
  cursor: pointer;
  background: #111;
  color: #ffe99c;
  border: 4px solid #ffe99c;
  box-shadow: 0 0 5px 3px #000;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
`;

function GalleryVideo() {
  return (
    <GalleryVideoImgBox>
      <GalleryVideoImg src={GalleryVideoThumbnail} alt="gallery thumbnail" />
      <GalleryOverlay>
        <GalleryVideoPlayBtn>
          <FaPlay />
        </GalleryVideoPlayBtn>
      </GalleryOverlay>
    </GalleryVideoImgBox>
  );
}

export default GalleryVideo;
